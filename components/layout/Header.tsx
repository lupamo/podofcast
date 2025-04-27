'use client';
import React from 'react'
import Navbar from './Navbar'
import Vector4 from '../../public/images/shape-swirl.svg'
import stars from '../../public/images/stars.png'
import Button from '../ul/Buttons'
import EpisodeList from '../podcast/EpisodeList'

const Header = () => {
  return (
	<>
		<Navbar />
		<div className=' relative w-full h-[600px] flex flex-col md:flex-row justify-between items-center md:h-screen bg-cover bg-no-repeat bg-center px-4 py-0 md:py-0'>
			{/* Left swirl image - hidden on mobile */ }
			<div className="hidden md:block md:w-1/4 lg:w-1/3">
				<img
					src={Vector4.src} 
					alt="vector"
					className="w-full h-auto max-w-xs lg:max-w-md"
				/>
        	</div>
			<div className="text-center md:w-1/2 z-10 my-8 md:my-0">
				<h1 className="text-6xl sm:text-7xl md:text-6xl lg:text-7xl xl:text-8xl mb-5 font-bold text-[#000000]">
					your Daily <br />
					<span className='text-[#CD4631]'>Podcast</span>
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
	</>
  )
}

export default Header