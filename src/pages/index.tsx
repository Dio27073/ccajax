import React from 'react';
import { Button } from 'components/ui/Button';
import Navbar from 'components/Navbar';
import BlurFade from "components/ui/blur-fade";
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Header Section - From Original Home Page */}
      <header className="relative bg-cover bg-center py-24" style={{ backgroundImage: "url('/pictures/oran.jpeg')" }}>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/20" />
        
        <div className="container relative mx-auto text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Welcome to CCAJAX</h1>
          <p className="text-2xl mb-8">Providing compassionate Christian counseling services in Jacksonville</p>
          
          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <Link 
              href="/contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/service"
              className="px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </header>

      {/* Mission Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg shadow-md p-8">
            <p className="text-lg leading-relaxed mb-6">
              Christian Counseling Associates of Jacksonville (CCAJAX) is a not-for-profit organization founded for the purpose of providing psychological, emotional and spiritual counseling services for individuals, couples and families throughout the Jacksonville community.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Founded in the deeply rooted principles of the unerring word of God, the mission of CCAJAX is to provide people from all backgrounds with all of their counseling needs.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              With the ever-increasing stresses of life, coupled with the increasing costs of professional evaluation, assessment, diagnosis, treatment planning and therapeutic intervention, many people lack the resources to get the quality help they need. That's where CCAJAX comes in.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section - From Original Home Page */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BlurFade inView delay={0.1}>
              <div className="text-center"> 
                <img src="/pictures/1.png" alt="Individual Counseling" className="mx-auto feature-image rounded-lg" />
                <h3 className="text-xl font-bold mt-4">Individual Counseling</h3>
                <p>Providing personalized support for your unique needs.</p>
              </div>
            </BlurFade>
            <BlurFade inView delay={0.3}>
              <div className="text-center">
                <img src="/pictures/2.png" alt="Couples Counseling" className="mx-auto feature-image rounded-lg" />
                <h3 className="text-xl font-bold mt-4">Couples Counseling</h3>
                <p>Strengthening relationships and fostering communication.</p>
              </div>
            </BlurFade>
            <BlurFade inView delay={0.5}>
              <div className="text-center">
                <img src="/pictures/3.png" alt="Family Counseling" className="mx-auto feature-image rounded-lg" />
                <h3 className="text-xl font-bold mt-4">Family Counseling</h3>
                <p>Building healthy family dynamics and resolving conflicts.</p>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Commitment Section - Inspired by Previous Commitment Component */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Commitment</h2>
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg shadow-md p-8">
            <p className="text-lg leading-relaxed mb-6">
              At CCAJAX, we understand the challenges individuals and families face in finding high-quality counseling services at affordable costs.
            </p>

            <h3 className="text-2xl font-bold mb-4">Our Pledge to You:</h3>
            <ul className="list-disc list-inside text-lg leading-relaxed mb-6 space-y-3">
              <li>Sliding Fee Scale: We offer a flexible pricing model to accommodate diverse financial needs.</li>
              <li>Inclusive Support: Our commitment is to support everyone who reaches out, regardless of financial constraints.</li>
              <li>Personalized Care: We provide tailored counseling addressing your unique circumstances.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section - Now with matching background */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center"> 
              <div className="flex flex-col items-center justify-center"> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /> 
                </svg>
                <h3 className="font-bold text-lg">Email</h3>
              </div>
              <p>For urgent matters, please give us a call.</p>
              <a href="mailto:info@ccajax.net" className="text-blue-500 hover:underline">info@ccajax.net</a> 
            </div>
            <div className="text-center">
              <div className="flex flex-col items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372a2.25 2.25 0 011.06-1.873l2.84-3.437a2.25 2.25 0 00.821-1.884V6.75M4.5 4.5h15a2.25 2.25 0 012.25 2.25v1.372a2.25 2.25 0 001.06 1.873l2.84 3.437a2.25 2.25 0 01.821 1.884v1.372a2.25 2.25 0 002.25 2.25h2.25z" /> 
                </svg>
                <h3 className="font-bold text-lg">Phone</h3>
              </div>
              <p>You can reach us at</p>
              <a href="tel:+19047584399" className="text-blue-500 hover:underline">+19047584399</a>
            </div>
            <div className="text-center">
              <div className="flex flex-col items-center justify-center"> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <h3 className="font-bold text-lg">Office</h3>
              </div>
              <p>We look forward to hearing from you!</p>
              <p className="font-medium">822 A1A N. Suite 310 Ponte Vedra Beach, FL 32082</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;