'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define the Episode interface
interface Episode {
  id: number;
  episodeNumber: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  date: string;
  hosts: string[];
}

// Sample data structure - replace with your actual data or API call
const episodes: Episode[] = [
  {
    id: 1,
    episodeNumber: 5,
    title: 'Pandemic Becoming Endemic',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac nibh auctor, faucibus odio semper, commodo dolor.',
    image: '/images/cover-1.png',
    duration: '45:00',
    date: '14 Jan',
    hosts: ['/images/avatar-11.png', '/images/avatar-12.png']
  },
  {
    id: 2,
    episodeNumber: 4,
    title: 'Tesla Autopilot Controversy',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac nibh auctor, faucibus odio semper, commodo dolor.',
    image: '/images/cover-2.png',
    duration: '38:45',
    date: '7 Jan',
    hosts: ['/images/avatar-11.png', '/images/avatar-12.png']
  },
  {
    id: 3,
    episodeNumber: 3,
    title: 'Women\'s Rights? Is it alright?',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac nibh auctor, faucibus odio semper, commodo dolor.',
    image: '/images/cover-3.png',
    duration: '52:10',
    date: '21 Dec',
    hosts: ['/images/avatar-11.png', '/images/avatar-12.png']
  },
  {
    id: 4,
    episodeNumber: 2,
    title: 'How to Deal with Self-Confidence',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac nibh auctor, faucibus odio semper, commodo dolor.',
    image: '/images/cover-4.png',
    duration: '41:35',
    date: '14 Dec',
    hosts: ['/images/avatar-11.png', '/images/avatar-12.png']
  },
  {
    id: 5,
    episodeNumber: 1,
    title: 'Types of Social Classes of People',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac nibh auctor, faucibus odio semper, commodo dolor.',
    image: '/images/cover-5.png',
    duration: '39:20',
    date: '7 Dec',
    hosts: ['/images/avatar-11.png', '/images/avatar-12.png']
  },
  {
    id: 6,
    episodeNumber: 0,
    title: 'Are you a Perplexed Mind Person?',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac nibh auctor, faucibus odio semper, commodo dolor.',
    image: '/images/cover-2.png',
    duration: '45:15',
    date: '30 Nov',
    hosts: ['/images/avatar-11.png', '/images/avatar-12.png']
  }
];

interface EpisodeCardProps {
  episode: Episode;
}

const EpisodeCard: React.FC<EpisodeCardProps> = ({ episode }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-hover">
      <div className="relative">
        <div className="w-full h-48 relative">
          <Image 
            src={episode.image} 
            alt={episode.title} 
            layout="fill" 
            objectFit="cover" 
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-md text-xs font-medium">
          Ep. {episode.episodeNumber}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{episode.title}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{episode.description}</p>
        
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-xs border border-gray-300 rounded-full text-gray-600">Business</button>
            <button className="px-3 py-1 text-xs border border-gray-300 rounded-full text-gray-600">Tech</button>
          </div>
          <div className="text-xs text-gray-500">{episode.duration}</div>
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <div className="flex -space-x-2 items-center">
            <div className="text-xs mx-2 text-gray-700">Hosted by:</div>
            {episode.hosts.map((host: string, index: number) => (
                
                <div key={index} className="w-6 h-6 rounded-full overflow-hidden border-2 border-white">
                  <Image 
                    src={host} 
                    alt="Host" 
                    width={24}
                    height={24}
                    className="w-full h-full object-cover"
                  />
                </div>
                
              ))}
          </div>
          
        </div>
      </div>
    </div>
  );
};

const RecentEpisodes: React.FC = () => {
  return (
    <section className="bg-[#F7EDE8] py-16">
      <div className="container mx-auto px-4">
        {/* Decorative element */}
        <div className="flex justify-center mb-6">
          <div className="w-8 h-12 border-l border-gray-400"></div>
        </div>
        
        {/* Section title */}
        <div className="text-center mb-2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Recent Episodes</h2>
          <p className="text-gray-600 mt-2">Available on your favorite platform</p>
        </div>
        
        {/* Decorative elements */}
        <div className="relative">
          <div className="absolute right-0 md:right-10 top-0 md:-top-10">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0L60 60" stroke="#CD4631" strokeWidth="2" />
              <path d="M15 0L60 45" stroke="#CD4631" strokeWidth="2" />
              <path d="M30 0L60 30" stroke="#CD4631" strokeWidth="2" />
            </svg>
          </div>
        </div>
        
        {/* Episodes grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {episodes.map((episode: Episode) => (
            <div key={episode.id}>
              <EpisodeCard episode={episode} />
            </div>
          ))}
        </div>
        
        {/* Browse all button */}
        <div className="flex justify-center mt-10">
          <Link href="/episodes">
            <button className="bg-black text-white px-8 py-3 uppercase text-sm font-medium tracking-wider">
              Browse All Episodes
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentEpisodes;