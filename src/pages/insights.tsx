import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import { Play, Pause } from 'lucide-react';

interface Podcast {
  id: number;
  title: string;
  description: string;
  audioUrl: string;
  spotifyId: string;
}

interface AudioPlayerProps {
  spotifyId: string;
}

const podcasts: Podcast[] = [
  {
    id: 1,
    title: 'CCA Insights Trailer',
    description: 'Welcome to CCA Insights! In this short 2-minute trailer, we give you a sneak peek into what you can expect from our podcast series',
    audioUrl: 'https://open.spotify.com/episode/5QUTEFpoDp4SLMeEs6ZzfM',
    spotifyId: '5QUTEFpoDp4SLMeEs6ZzfM'
  },
  {
    id: 2,
    title: 'Season 2, Episode 1',
    description: 'place holder',
    audioUrl: 'https://open.spotify.com/episode/example',
    spotifyId: 'example'
  }
];

const AudioPlayer: React.FC<AudioPlayerProps> = ({ spotifyId }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const togglePlay = () => {
    if (iframeRef.current) {
      const message = isPlaying ? 'pause' : 'play';
      iframeRef.current.contentWindow?.postMessage({
        command: message
      }, '*');
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === 'playerStateChanged') {
        setIsPlaying(event.data.data.isPlaying);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div className="w-full rounded-lg p-4">
      <button
        onClick={togglePlay}
        className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors mb-4"
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
      </button>
      
      <iframe
        ref={iframeRef}
        title={`spotify-player-${spotifyId}`}
        src={`https://open.spotify.com/embed/episode/${spotifyId}?utm_source=generator`}
        width="100%"
        height="152"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        className="border-0 rounded-lg"
      />
    </div>
  );
};

const Podcasts: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">CAJAXX Insight Podcast</h1>
        <p className="text-lg text-center mb-12">
        Join us on the CCA Insights Podcast, where we tackle everyday challenges through a blend of biblical wisdom and mental health expertise. Each episode is designed to inspire, inform, and guide you on your journey.

        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {podcasts.map((podcast) => (
            <div
              key={podcast.id}
              className="rounded-lg shadow-lg bg-white max-w-sm mx-auto"
            >
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-4">
                  {podcast.title}
                </h5>
                <p className="text-gray-700 text-base mb-6">
                  {podcast.description}
                </p>
                <AudioPlayer spotifyId={podcast.spotifyId} />
                <a
                  href={podcast.audioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Listen on Spotify
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Podcasts;