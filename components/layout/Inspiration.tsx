'use client';
import React, { useState, useEffect, useRef} from 'react';
import TestimonialSection from '../ul/TestimonialCards';
import swirl from '../../public/images/scribble.png'
import illustrator1 from '../../public/images/Illustration-1.svg'
import swirl2 from '../../public/images/Vector4.png'
import swirl3 from '../../public/images/scribble-2.png'
import sparkle from '../../public/images/sparkle.png'
import avatar from '../../public/images/avatar.png'
import spot from '../../public/images/spot.png'
import star from '../../public/images/Star4.png'
import illustrator2 from '../../public/images/Illustration-2.svg'

const Inspiration = () => {
	const [isHeadingVisible, setIsHeadingVisible] = useState(false);
	const [isIllustratorsVisible, setIsIllustratorsVisible] = useState(false);
	const [isTestimonialVisible, setIsTestimonialVisible] = useState(false);
	const [isListenerSectionVisible, setIsListenerSectionVisible] = useState(false);

	// Ref for sections we want to observe
	const headingRef = useRef(null);
	const illustratorsRef = useRef(null);
	const testimonialRef = useRef(null);
	const listenerSectionRef = useRef(null);


	useEffect(() => {
		// intersection observer for sections
		const observerOptions = {
			root: null,
			rootMargin: '0px',
			threshold: 0.5
		};

		const headingObserver = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					setIsHeadingVisible(true);
					headingObserver.unobserve(entry.target);
				}
			});
		}, observerOptions);

		const illustratorsObserver = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					setIsIllustratorsVisible(true);
					illustratorsObserver.unobserve(entry.target);
				}
			});
		}, observerOptions);

		const testimonialObserver = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					setIsTestimonialVisible(true);
					testimonialObserver.unobserve(entry.target);
				}
			});
		}, observerOptions);

		const listenerSectionObserver = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					setIsListenerSectionVisible(true);
					listenerSectionObserver.unobserve(entry.target);
				}
			});
		}, observerOptions);

		// observing if refs are available
		if (headingRef.current) {
			headingObserver.observe(headingRef.current);
		}
		if (illustratorsRef.current) {
			illustratorsObserver.observe(illustratorsRef.current);
		}
		if (testimonialRef.current) {
			testimonialObserver.observe(testimonialRef.current);
		}
		if (listenerSectionRef.current) {
			listenerSectionObserver.observe(listenerSectionRef.current);
		}

		return () => {
			if (headingRef.current) headingObserver.unobserve(headingRef.current);
			if (illustratorsRef.current) illustratorsObserver.unobserve(illustratorsRef.current);
			if (testimonialRef.current) testimonialObserver.unobserve(testimonialRef.current);
			if (listenerSectionRef.current) testimonialObserver.unobserve(listenerSectionRef.current);
		}

	}, [])

  return (
	<>
		<div className="bg-[#ffffff]">
			<div className='relative flex w-full bg-[#F7EDE8] min-h-[10px] flex-col items-center mt-2 justify-center p-4 md:flex-row md:justify-between md:p-8'>
				<img 
					src={swirl.src}
					alt="swirl"
					className="absolute mt-3 h-[100px] max-w-xs mx-auto md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2"
				/>
			</div>
			<div 
				ref={headingRef}
				className='relative flex w-full flex-col items-center mt-5 justify-center p-4 md:flex-row md:justify-between md:p-8'>
				<h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-wider mb-5 font-[700] text-[#000000] text-center transition-all duration-1000 transform ${
						isHeadingVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
						}`}>
					Talk. Listen. Get inspired <br/>
					by every minute of it.
				</h1>

			</div>
			<div
				ref={illustratorsRef} 
				className='flex flex-col md:flex-row items-center justify-between py-5 px-4 md:px-10'>
				<div className={`w-full md:w-1/2 flex flex-col items-center justify-center space-x-4 md:space-x-0 md:space-y-4 py-5 transition-all duration-1000 transform ${
					isIllustratorsVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
				}`}>
					<img src={illustrator1.src} alt="illustrator1" />
					<p className='text-center w-4/5 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet maxime dolore veritatis sunt, cumque itaque, nulla? Modi magnam ex voluptate consectetur!</p>
				</div>
				<div className={`flex flex-col w-full md:w-1/2 items-center justify-center space-x-4 md:space-x-0 md:space-y-4 py-5 transition-all duration-1000 transform ${
					isIllustratorsVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
				}`}>
					<img src={illustrator2.src} alt="illustrator2" />
					<p className='text-center w-4/5 mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, sint ut ipsa dolorem enim debitis eos aut consequuntur labore dignissimos vel est neque rerum!</p>
				</div>
			</div>

			{/* ---small box----- */}

			<div className='bg-[#ffffff] w-full flex items-center justify-center py-16'>
				<div 
				ref={testimonialRef}
				className={`relative w-full max-w-7xl mx-4 md:mx-8 lg:mx-auto bg-[#F7EDE8] rounded-lg transition-all duration-1000 transform ${
					isTestimonialVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
				}`}>
					{/* Star image - positioned at top-right edge */}
					<div className='absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 md:translate-x-1/3 z-1000'>
						<img src={star.src} alt="star" className="w-24 md:w-32 lg:w-40" />
					</div>
					
					{/* Swirl image - positioned at left edge */}
					<div className='absolute top-1/2 left-0 transform -translate-x-1/4 -translate-y-1/2 z-10'>
						<img src={swirl2.src} alt="swirl" className="w-20 md:w-24 lg:w-32" />
					</div>
					
					{/* Main content */}
					<div className='flex flex-col md:flex-row items-center justify-between p-6 md:p-12 lg:p-16'>
						{/* Empty div for spacing where swirl is positioned */}
						<div className="w-1/12 md:w-1/6"></div>
					
					{/* Testimonial content */}
					<div className='w-full md:w-4/6 flex flex-col items-center justify-center py-8'>
						<h2 className="text-6xl md:text-7xl lg:text-9xl font-bold text-[#CD4631] leading-none">&ldquo;</h2>
						<h2 className="text-lg md:text-xl lg:text-2xl text-center font-medium my-4">
						One of the best daily podcasts that<br/>covers every topic on Spotify.
						</h2>
						
						{/* Avatar and credentials */}
						<div className='flex flex-col md:flex-row items-center justify-center w-full mt-6'>
							<img src={avatar.src} alt="avatar" className="w-16 h-16 rounded-full" />
							<div className='flex flex-col md:flex-row items-center mt-4 md:mt-0 md:ml-4'>
								<img className='h-6 mr-2' src={spot.src} alt="spotify" />
								<h4 className='font-bold text-sm md:text-base'>Social community manager</h4>
							</div>
						</div>
					</div>
					
						{/* Empty div for spacing where star extends */}
						<div className="w-1/12 md:w-1/6"></div>
					</div>
				</div>
			</div>
			{/* --- Listeners Say----- */}
			<div className='bg-[#EDF3F7]'>
				<div className='relative flex w-full bg-[#EDF3F7] flex-col items-center mt-2 justify-center p-4 md:flex-row md:justify-between md:p-8'>
					<img 
						src={swirl3.src}
						alt="swirl"
						className="absolute mt-3 h-[100px] max-w-xs mx-auto md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2"
					/>
				</div>
				<div 
				ref={listenerSectionRef}
				className='relative flex w-full flex-col items-center mt-5 justify-center p-4 md:flex-row md:justify-between md:p-8'>
					<div className={`relative flex flex-col items-center transition-all duration-1000 transform ${
							isListenerSectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
						}`}>
						{/* Sparkle image positioned on top left of h2 */}
						<div className="absolute left-0 top-0 transform -translate-x-1/4 -translate-y-1/4 md:-translate-x-1/3 md:-translate-y-1/3 w-12 sm:w-16 md:w-20 lg:w-24 z-10">
							<img src={sparkle.src} alt="spark" className="w-full h-auto" />
						</div>
						
						{/* Main heading */}
						<h2 className='relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-wider font-[700] text-[#000000] text-center mt-6'>
							What our listeners say <br/>
						</h2>
						
						{/* Subheading with reduced size */}
						<h4 className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl tracking-wide m-5 font-[500] text-[#424141] text-center max-w-4xl'>
							Their experience throughout the platform
						</h4>
					</div>
					
				</div>
				<div>
					<TestimonialSection />
				</div>
			</div>
      </div>
	</>
  );
};

export default Inspiration;
