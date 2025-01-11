import React from 'react';
import Navbar from '../components/Navbar';
import { FaHome, FaGrinBeam, FaAngry, FaDollarSign, FaPray, FaRing, FaHandPaper, FaExclamationTriangle, FaSadTear, FaWineBottle, FaBrain, FaBaby } from 'react-icons/fa'; 

const services = [
  { 
    id: 1, 
    icon: FaHome, 
    title: 'Build Stronger Relationships', 
    description: 'Strengthen your relationships, resolve conflicts, and build healthy family dynamics with our guidance and support.',
    link: '/marriage-family-counseling' 
  },
  { 
    id: 2, 
    icon: FaGrinBeam, 
    title: 'Overcome Depression', 
    description: 'Manage and overcome feelings of sadness, hopelessness, and emotional distress.',
    link: '/depression-counseling' 
  },
  { 
    id: 3, 
    icon: FaAngry, 
    title: 'Manage Anger Constructively', 
    description: 'Learn tools and techniques to manage anger constructively and foster healthier interactions.',
    link: '/anger-management' 
  },
  { 
    id: 4, 
    icon: FaDollarSign, 
    title: 'Achieve Financial Stability', 
    description: 'Get assistance in managing financial challenges and fostering financial stability within your family.',
    link: '/financial-counseling' 
  },
  { 
    id: 5, 
    icon: FaPray, 
    title: 'Explore Your Spirituality', 
    description: 'Explore and strengthen your spiritual beliefs and values in a safe, supportive environment.',
    link: '/spiritual-counseling' 
  },
  { 
    id: 6, 
    icon: FaRing, 
    title: 'Prepare for a Successful Marriage', 
    description: 'Prepare for marriage by addressing communication, conflict resolution, and shared goals.',
    link: '/pre-marital-counseling' 
  },
  { 
    id: 7, 
    icon: FaHandPaper, 
    title: 'Heal from Abuse', 
    description: 'Find support on your journey toward healing and recovery from abuse.',
    link: '/abuse-counseling' 
  },
  { 
    id: 8, 
    icon: FaSadTear, 
    title: 'Cope with Grief and Loss', 
    description: 'Navigate the complex emotions associated with loss and bereavement.',
    link: '/grief-counseling' 
  },
  { 
    id: 9, 
    icon: FaWineBottle, 
    title: 'Overcome Addiction', 
    description: 'Find support and strategies to overcome addictions and build a healthier lifestyle.',
    link: '/addiction-counseling' 
  },
  { 
    id: 10, 
    icon: FaBrain, 
    title: 'Improve Your Mental Health', 
    description: 'Receive comprehensive support for a wide range of mental health challenges.',
    link: '/mental-health-counseling' 
  },
  { 
    id: 11, 
    icon: FaBaby, 
    title: 'Strengthen Parent-Child Bonds', 
    description: 'Develop skills and strategies to build strong, nurturing relationships with your children.',
    link: '/parenting-counseling' 
  },
  { 
    id: 12, 
    icon: FaHome, 
    title: 'Address Family of Origin Issues', 
    description: 'Address patterns and challenges rooted in family history to foster personal growth and healthier relationships.',
    link: '/family-of-origin-counseling' 
  },
];

const Services: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
        <p className="text-lg text-center mb-12">
          At CCAJAX, we offer a wide range of counseling services to address the diverse needs of our clients. Our programs are designed to support individuals, couples, and families in their journey toward healing, growth, and fulfillment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg ${index % 2 === 0 ? 'bg-gray-100' : ''}`} 
            >
              <a > {/* Make the whole card clickable */}
                <service.icon className="text-3xl mb-4 text-blue-500" /> 
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center mb-6">Our Commitment to You</h2>
          <p className="text-lg leading-relaxed text-center"> 
            In addition to the above services, our goal for each of our clients is to help build healthy personal identities, a deeper sense of meaning and purpose in their lives, fulfilling marriages, and meaningful parent-child relationships.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Services;