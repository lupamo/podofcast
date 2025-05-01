import React from 'react'
import Button from '../ul/Buttons'
import swirl from '../../public/images/scribble-2.png'
import scribble from '../../public/images/member-scribble.png'
import scribble1 from '../../public/images/scribble-member1.png'
import star from '../../public/images/star.png'
import stars from '../../public/images/shining-stars-member.png'
import face1 from '../../public/images/face-1.png'
import face2 from '../../public/images/face-5.png'
import fire from '../../public/images/fire.png'




const Membership = () => {
  return (
	<div className="bg-[#ffffff]">     
		<div className='relative flex w-full bg-[#fffff]  flex-col items-center justify-center p-4 md:flex-row md:justify-between md:p-8'>
			<img 
				src={swirl.src}
				alt="swirl"
				className="absolute -mt-4 h-[100px] max-w-xs mx-auto md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2"
			/>
		</div>
      <div className="w-full flex justify-center items-center p-4 md:p-8 relative">
        {/* Container for the heading and subheading with relative positioning */}
        <div className="flex flex-col items-center justify-center relative max-w-3xl">
          {/* Scribble positioned absolutely relative to this container */}
          <div className="absolute -top-12 -right-16 md:-top-16 md:-right-20 lg:-top-20 lg:-right-24 z-10">
            <img 
              src={scribble.src} 
              alt="scribble decoration" 
              className="w-24 md:w-32 lg:w-40"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#000000] mb-5 text-center"> 
            Membership Benefits
          </h1>
          <h4 className="text-base text-[#2b2a2a] md:text-lg lg:text-xl text-center">
            Become our sponsor and get all benefits
          </h4>
        </div>
      </div>
	  {/* -----grid box ------ */}
	  <div>
		<div className="grid grid-cols-1 m-3 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:p-8">
			{/* Each box */}
			<div className="p-6 flex flex-col items-center justify-center">
				<img src={scribble1.src} alt="scribble1" />
				<h2 className="text-xl font-bold mb-4">Exclusive Content</h2>
				<p className="text-gray-700 text-center">Access to exclusive episodes and behind-the-scenes content.</p>
			</div>
			<div className="p-6 flex flex-col items-center justify-center">
				<img src={face1.src} alt="scribble1" />
				<h2 className="text-xl font-bold mb-4">Exclusive Content</h2>
				<p className="text-gray-700 text-center">Access to exclusive episodes and behind-the-scenes content.</p>
			</div>
			<div className="p-6 flex flex-col items-center justify-center">
				<img src={face2.src} alt="scribble1" />
				<h2 className="text-xl font-bold mb-4">Exclusive Content</h2>
				<p className="text-gray-700 text-center">Access to exclusive episodes and behind-the-scenes content.</p>
			</div>
			<div className="p-6 flex flex-col items-center justify-center">
				<img src={stars.src} alt="scribble1" />
				<h2 className="text-xl font-bold mb-4">Exclusive Content</h2>
				<p className="text-gray-700 text-center">Access to exclusive episodes and behind-the-scenes content.</p>
			</div>
			<div className="p-6 flex flex-col items-center justify-center">
				<img src={fire.src} alt="scribble1" />
				<h2 className="text-xl font-bold mb-4">Exclusive Content</h2>
				<p className="text-gray-700 text-center">Access to exclusive episodes and behind-the-scenes content.</p>
			</div>
			<div className="p-6 flex flex-col items-center justify-center">
				<img src={star.src} alt="scribble1" />
				<h2 className="text-xl font-bold mb-4">Exclusive Content</h2>
				<p className="text-gray-700 text-center">Access to exclusive episodes and behind-the-scenes content.</p>
			</div>
		</div>
	  </div>
	  <div className="flex items-center justify-center p-4 md:p-4 relative">
		 <Button text="Become Sponsor" />
	  </div>
    </div>
  )
}

export default Membership