import React from 'react'
import swirl from '../../public/images/scribble-1.png'


const AppStore = () => {
  return (
	<>
		<div>
			<div className='relative flex w-full bg-[#fffff]  flex-col items-center justify-center p-4 md:flex-row md:justify-between md:p-8'>
				<img 
				src={swirl.src}
				alt="swirl"
				className="absolute -mt-4 h-[100px] max-w-xs mx-auto md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2"
				/>
			</div>
			<div>
				
			</div>
		</div>
	</>
  )
}

export default AppStore