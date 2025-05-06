'use client';
import React, { useState, useEffect} from 'react'
import Navbar from './Navbar'
import Vector4 from '../../public/images/shape-swirl.svg'
import stars from '../../public/images/stars.png'
import spotify from '../../public/images/Spotify.png'
import google from '../../public/images/Google-Podcast.png'
import youtube from '../../public/images/Youtube.png'
import Button from '../ul/Buttons'
import EpisodeList from '../podcast/EpisodeList'
import Insipiration from './Inspiration'
import Membership from './Membership';
import RecentEpisodes from './EpisodesCards';
import Sponsors from './Sponsors';
import ArticleNews from './ArticleNews'

const Header = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
	  // Set a small timeout to ensure the animation starts after page load
	  const timer = setTimeout(() => {
		setIsVisible(true);
	  }, 100);
  
	  return () => clearTimeout(timer);
	}, []);
  	return (
		<>
			<div className='overflow-hidden w-full'>
				<Navbar />
				<div className=' relative w-full h-[400px] flex flex-col md:flex-row justify-between items-center md:h-screen bg-cover bg-no-repeat bg-center px-4 py-0 md:py-0'>
					{/* Left swirl image - hidden on mobile */ }
					<div className="absolute md:static md:w- md:block md:w-1/4 lg:w-1/3">
						<img
							src={Vector4.src} 
							alt="vector"
							className="w-3/4 h-auto max-w-xs md:top-2 mx-auto md:mx-0 "
						/>
					</div>
					<div className="text-center md:w-1/2 z-10 my-8 md:my-0">
						<h1 className="text-7xl sm:text-7xl md:text-6xl lg:text-7xl xl:text-8xl mb-5 font-bold text-[#000000]">
							your Daily <br />
							<span className={`text-7xl text-[#CD4631] sm:text-7xl md:text-6xl lg:text-7xl xl:text-8xl inline-block transition-all duration-1000 transform ${
							isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
							}`}
							>Podcast</span>
						</h1>
						<Button text="Subscribe" onClick={() => console.log('Subscribed!')} />
					</div>
					<div className="absolute right-2 md:static md:flex md:justify-center md:w-1/4 lg:w-1/3 mt-4 md:mb-50 z-10">
						<img 
							src={stars.src} 
							alt="stars"
							className="w-1/4 h-auto max-w-xs mx-auto md:mx-0 "
						/>
					</div>
					
				</div>
				<div>
					<EpisodeList />
				</div>
				<div className="flex flex-col items-center justify-center py-5 px-4 md:px-10">
					<hr className="w-full border border-gray-300 m-2" />
					<div className='flex flex-col md:flex-row items-center justify-center space-x-4 md:space-x-0 md:space-y-4 py-5'>
						<p className='px-3 py-2'>Supported By:</p>
						<img className='px-3 py-2' src={spotify.src} alt="spotify" />
						<img className='px-3 py-2' src={google.src} alt="google" />
						<img className='px-3 py-2' src={youtube.src} alt="youtube" />
					</div>
					<hr className="w-full border border-gray-300" />
				</div>
				<Insipiration />
				<Membership />
				<RecentEpisodes />
				<Sponsors />
				<ArticleNews />
			</div>
		</>
  	)
}

export default Header