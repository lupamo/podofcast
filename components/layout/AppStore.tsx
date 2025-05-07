import React from 'react'
import swirl from '../../public/images/scribble.png'
import home from '../../public/images/Home.png'
import play from '../../public/images/play.png'
import gp from '../../public/images/gp.png'
import yt from '../../public/images/yt.png'
import sp from '../../public/images/sp.png'

const AppStore = () => {
  return (
	<>
		<div className='mt-5 text-center items-center align-center bg-[#EDF3F7] max-h-[700px] overflow-hidden'>
			
			<div className='flex justify-between align-center'>
				<div className='md:flex h-[400px] hidden'>
					<img src={home.src} alt="home" />
				</div>

				{/* ----text content --------- */}
				<div className='flex flex-col justify-center items-center w-full md:w-1/2 lg:w-1/3 p-4'>
					<button className='m-4 border rounded-sm px-3 py-1 text-600 border-[#CD4631] text-[#CD4631]'>BETA</button>
					<h2 className='text-5xl font-semibold my-4'>Available Now<br /> Pod of cast</h2>
					<p className='my-3'>We just launched our podcast app!</p>
					<button className='my-3 py-2 px-3 border text-[#ffffff] bg-black border-black rounded-sm'>Download Now</button>
					<div className='flex w-full justify-center items-center mt-4 gap-3'>
						<img src={yt.src} alt="youtube" />
						<img src={sp.src} alt="spotify" />
						<img src={gp.src} alt="google" />
					</div>
				</div>
				<div className='md:flex h-[400px] hidden'>
					<img src={play.src} alt="play" />
				</div>
			</div>
		</div>
	</>
  )
}

export default AppStore