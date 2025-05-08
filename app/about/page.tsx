import React from 'react'
import Vector4 from '../../public/images/shape-swirl.svg'
import Navbar from '../../components/layout/Navbar'


const About = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Navbar />
				<div className=' relative w-full h-[400px] flex flex-col md:flex-row justify-between items-center md:h-screen bg-cover bg-no-repeat bg-center px-4 py-0 md:py-0'>
					<div className='relative flex justify-center w-full items-center'>
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
                About Us<br />
              </h1>
            </div>
          </div>
        </div>
  </div>
  )
}

export default About;