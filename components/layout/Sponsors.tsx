import React, { useEffect, useRef } from 'react'
import Button from '../ul/Buttons'
import sparkle from '../../public/images/sparky.png'
import swirl from '../../public/images/scribble-2.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const Sponsors: React.FC = () => {
  // Create refs for elements we want to animate
  const sectionRef = useRef<HTMLDivElement>(null)
  const swirlRef = useRef<HTMLImageElement>(null)
  const sparkleRef = useRef<HTMLImageElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subheadingRef = useRef<HTMLHeadingElement>(null)
  
  // Use proper typing for the refs array
  const boxRefs = useRef<HTMLDivElement[]>([])
  
  // Reset the refs array
  boxRefs.current = []
  
  // Add or update ref for sponsor boxes with proper typing
  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !boxRefs.current.includes(el)) {
      boxRefs.current.push(el)
    }
  }

  useEffect(() => {
    // Create a timeline for the animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none"
      }
    })
    
    // Animate the swirl
    gsap.fromTo(swirlRef.current, 
      { 
        rotation: -180,
        opacity: 0,
        scale: 0.5
      },
      { 
        rotation: 0,
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "elastic.out(1, 0.3)"
      }
    )
    
    // Animate the sparkle
    gsap.fromTo(sparkleRef.current, 
      { 
        opacity: 0,
        scale: 0,
        rotate: -45
      },
      { 
        opacity: 1,
        scale: 1,
        rotate: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "back.out(2)"
      }
    )
    
    // Animate the heading
    tl.fromTo(headingRef.current, 
      { 
        y: 50,
        opacity: 0
      },
      { 
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      }
    )
    
    // Animate the subheading
    tl.fromTo(subheadingRef.current, 
      { 
        y: 30,
        opacity: 0
      },
      { 
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out"
      },
      "-=0.4" // Start slightly before the previous animation ends
    )
    
    // Animate the sponsor boxes with stagger
    tl.fromTo(boxRefs.current, 
      { 
        y: 60,
        opacity: 0,
        scale: 0.9
      },
      { 
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.7,
        stagger: 0.15, // Each box starts animating 0.15s after the previous one
        ease: "power2.out"
      },
      "-=0.3"
    )
    
    // Clean up function
    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill()
      }
    }
  }, [])

  return (
    <div className='bg-[#ffffff]' ref={sectionRef}>
      <div className='relative flex w-full bg-[#fffff] flex-col items-center justify-center p-4 md:flex-row md:justify-between md:p-8'>
        <img 
          ref={swirlRef}
          src={swirl.src}
          alt="swirl"
          className="absolute -mt-4 h-[100px] max-w-xs mx-auto md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2"
        />
      </div>
      <div className={'relative flex flex-col items-center'}>
        {/* Sparkle image positioned on top left of h2 */}
        <div className="absolute left-18 top-1 transform -translate-x-1/2 -translate-y-1/4 md:-translate-x-1/3 md:-translate-y-1/3 w-12 sm:w-16 md:w-20 lg:w-24 z-10">
          <img ref={sparkleRef} src={sparkle.src} alt="spark" className="w-full h-auto" />
        </div>
        
        {/* Main heading */}
        <h2 
          ref={headingRef}
          className='relative text-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-wider font-[700] text-[#000000] text-center mt-6'
        >
          Become our sponsor <br/>
        </h2>
        
        {/* Subheading with reduced size */}
        <h4 
          ref={subheadingRef}
          className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl tracking-wide m-5 font-[500] text-[#424141] text-center max-w-4xl'
        >
          Get exclusive episodes, merch and more
        </h4>
      </div>
      <div>
        {/* Grid layout for sponsor benefits */}
        <div className="grid grid-cols-1 m-4 md:grid-cols-2 lg:grid-cols-3 gap-7 p-4 md:p-8">
          {/* box 1 */}
          <div className='max-w-300' ref={addToRefs}>
            <div className='border border-gray-600 rounded-lg p-4 my-2'>
              <h2 className='font-bold my-2 text-lg'>Member</h2>
              <p className='py-2'>
                Lorem ipsum dolor sit amet consectet <br />
                cing elit, sed do eiusmod tempor.
              </p>
              <div className='mt-6 flex justify-between items-center'>
                <button
                  className="px-4 py-2 bg-black text-white font-light uppercase rounded-md shadow-md hover:bg-gray-900 transition-colors"
                >
                  SUBSCRIBE
                </button>
                <div>
                  <h1 className='text-2xl font-bold text-[#CD4631]'>$9.99</h1>
                  <h6>/month</h6>
                </div>
              </div>
            </div>
            <div className='border border-gray-600 rounded-lg p-4 my-2 text-sm'>
              <h5>What's Included:</h5>
              <ul className='list-disc list-inside'>
                <li className='my-2'>Exclusive Content</li>
                <li className='my-2'>5% Discount on Merch</li>
                <li className='my-2'>Join the Community</li>
                <li className='my-2'>Livestreaming Access</li>
              </ul>
            </div>
          </div>

          {/* box 2 */}
          <div className='max-w-300' ref={addToRefs}>
            <div className='border border-[#CD4631] bg-[#F7EDE8] rounded-lg p-4 my-2'>
              <div className='flex justify-between items-center'>
			  	<h2 className='font-bold my-2 text-lg'>family</h2>
				<p className='bg-[#CD4631] text-sm py-1 px-2  text-white rounded-sm'>Most popular</p>
			  </div>
              <p className='py-2'>
                Lorem ipsum dolor sit amet consectet <br />
                cing elit, sed do eiusmod tempor.
              </p>
              <div className='mt-6 flex justify-between items-center'>
                <button
                  className="px-4 py-2 bg-black text-white font-light uppercase rounded-md shadow-md hover:bg-gray-900 transition-colors"
                >
                  SUBSCRIBE
                </button>
                <div>
                  <h1 className='text-2xl font-bold text-[#CD4631]'>$14.99</h1>
                  <h6>/month</h6>
                </div>
              </div>
            </div>
            <div className='border border-[#CD4631] bg-[#F7EDE8] rounded-lg p-4 my-2 text-sm'>
              <h5>What's Included:</h5>
              <ul className='list-disc list-inside'>
                <li className='my-2 font-bold'>Everything in Tire 1</li>
                <li className='my-2'>Free tickets to Events</li>
                <li className='my-2'>Limited Eddtion Merch</li>
                <li className='my-2'>Promote your Product</li>
              </ul>
            </div>
          </div>

          {/* box 3 */}
          <div className='max-w-300' ref={addToRefs}>
            <div className='border border-gray-600 rounded-lg p-4 my-2'>
              <h2 className='font-bold my-2 text-lg'>Official</h2>
              <p className='py-2'>
                Lorem ipsum dolor sit amet consectet <br />
                cing elit, sed do eiusmod tempor.
              </p>
              <div className='mt-6 flex justify-between items-center'>
                <button
                  className="px-4 py-2 bg-black text-white font-light uppercase rounded-md shadow-md hover:bg-gray-900 transition-colors"
                >
                  SUBSCRIBE
                </button>
                <div>
                  <h1 className='text-2xl font-bold text-[#CD4631]'>$29.99</h1>
                  <h6>/month</h6>
                </div>
              </div>
            </div>
            <div className='border border-gray-600 rounded-lg p-4 my-2 text-sm'>
              <h5>What's Included:</h5>
              <ul className='list-disc list-inside'>
                <li className='my-2'>Everything in Tire 2</li>
                <li className='my-2'>Exclusive Badge on Livestreaming</li>
                <li className='my-2'>Become an Official Sponsor</li>
                <li className='my-2'>Early Acsess to all Episodes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sponsors