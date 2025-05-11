'use client'
import React, { useState, useEffect, useRef } from 'react'
import Button from '../../components/ul/Buttons'
import Vector4 from '../../public/images/shape-swirl.svg'
import Navbar from '../../components/layout/Navbar'
import stars from '../../public/images/stars.png'
import mic from '../../public/images/mic.png'
import gsap from 'gsap'

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const swirlRef = useRef(null);
  const starsRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    // GSAP animation for the swirl SVG
    if (swirlRef.current) {
      // Initial state - scale down and rotate slightly
      gsap.set(swirlRef.current, { 
        scale: 0.8, 
        rotation: -10,
        opacity: 0
      });
      
      // Animation timeline
      const tl = gsap.timeline();
      
      tl.to(swirlRef.current, {
        duration: 1.5,
        scale: 1,
        rotation: 0,
        opacity: 1,
        ease: "power3.out"
      }).to(swirlRef.current, {
        duration: 8,
        rotation: 360,
        repeat: -1,
        ease: "linear"
      }, "<=");
    }
    
    // GSAP animation for stars
    if (starsRef.current) {
      gsap.set(starsRef.current, { opacity: 0, y: -20 });
      
      gsap.to(starsRef.current, {
        duration: 1,
        opacity: 1,
        y: 0,
        delay: 0.8,
        ease: "power2.out"
      });
      
      // Create a floating effect
      gsap.to(starsRef.current, {
        y: '+=20',
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
  }, []);
  
  return (
    <div className='w-full overflow-hidden'>
      <Navbar />
      <div className='relative w-full h-[600px] flex flex-col md:flex-row justify-between items-center md:h-screen bg-cover bg-no-repeat bg-center px-4 py-0 md:py-0'>
        {/* Left swirl image - animated with GSAP */}
        <div className="absolute md:static md:w-1/4 lg:w-1/3">
          <img
            src={Vector4.src} 
            alt="vector"
            className="hidden md:block w-3/4 h-auto max-w-xs md:top-2 mx-auto md:mx-0"
          />
        </div>
        <div className="text-center md:w-1/2 z-10 my-6 md:my-0">
          <h1 className="text-7xl sm:text-7xl md:text-6xl lg:text-7xl xl:text-8xl mb-5 font-bold text-[#000000]">
            About <br />
            <span className={`text-7xl text-[#CD4631] sm:text-7xl md:text-5xl lg:text-5xl xl:text-7xl inline-block transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            >Pod Of Cast</span>
          </h1>
          <p className='my-4 text-[#4D4D4D]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam–quis.</p>
          <div className='flex flex-col  md:flex-row gap-2 text-center items-center justify-center space-x-4 md:space-x-0 '>
		  	<button className='px-6 py-3 border border-gray-900 bg-transparent text-black font-bold uppercase rounded-md shadow-md hover:bg-gray-300 transition-colors'>Become Sponsor</button>
		  	<button className='px-6 py-3 bg-black text-white font-bold uppercase rounded-md shadow-md hover:bg-gray-900 transition-colors'>Subscribe</button>
		  </div>
        </div>
        <div className="absolute -right-4 md:static md:flex md:justify-center md:w-1/4 lg:w-1/3 mt-4 md:mb-50 z-10">
          <img 
            ref={starsRef}
            src={stars.src} 
            alt="stars"
            className="w-1/4 h-auto max-w-xs mx-auto md:mx-0"
          />
        </div>
      </div>

      {/* ----What Our Listeners say about us---------- */}
      <div className='w-full bg-[#ffffff]'>
        <div className='w-full z-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center -mt-6'>
              <div className='border rounded-lg border-[#000000] w-[80%] max-w-sm h-[200px] flex flex-col justify-center items-center p-4'>
                <h2 className='text-[#CD4631] text-4xl font-bold mb-3'>72<span className='text-[#000000]'>K</span></h2>
                <p>Community Members</p>
              </div>
              <div className='border rounded-lg border-[#000000] w-[80%] max-w-sm h-[200px] flex flex-col justify-center items-center p-4'>
                <h2 className='text-[#CD4631] text-4xl font-bold mb-3'>128<span className='text-[#000000]'>K</span></h2>
                <p>Subscribers</p>
              </div>
              <div className='border rounded-lg border-[#000000] w-[80%] max-w-sm h-[200px] flex flex-col justify-center items-center p-4'>
                <h2 className='text-[#CD4631] text-4xl font-bold mb-3'>59<span className='text-[#000000]'>K</span></h2>
                <p>Daily Listeners</p>
              </div>
        </div>
        <div className='w-full flex flex-col justify-center items-center mt-10'>
          <h2>What our listeners say</h2>
          <p>Their experience throughout every platform</p>
          <div className='w-[80%] flex flex-col justify-center items-center p-4'>
            <img src={mic.src} alt="mic" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;