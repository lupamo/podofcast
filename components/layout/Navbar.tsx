'use client'
import React, { useState, useRef, useEffect } from 'react'
import logo  from '../../public/images/logo.png'
import arrowDown  from '../../public/images/Arrow-Down.png'
import Link from 'next/link'


const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    const handleclickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }

    };
    document.addEventListener('mousedown', handleclickOutside);

    return () => {
      document.removeEventListener('mousedown', handleclickOutside);

    }
  }, []);

  return (
	<nav className="px-4 py-5 md:px-10 md:py-8">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
		<div className=" flex flex-wrap items-center justify-between">
        	{/* Logo */}
			<div>
				<img src={logo.src} className="w-12 h-12" alt="Logo" />
			</div>
			<div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col mx-12 md:flex-row w-full md:w-auto md:items-center mt-4 md:mt-0`}>
				<ul className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-6 font-bold text-base mb-4 md:mb-0 md:mr-6">
					<li><Link href="/episodes" className="hover:text-[#CD4631] transition-colors">Episodes</Link></li>
					<li><Link href="/about" className="hover:text-[#CD4631] transition-colors">About</Link></li>
					<li className='relative' ref={dropdownRef}>
            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
            className="flex items-center hover:text-[#CD4631] transition-colors focus:outline-none"
            >
              More
              <img 
                src={arrowDown.src}
                width={16}
                height={16}
                className={`ml-1 #{isDropdownOpen ? 'rotate-180' ; ''}  transition-transform`}
                alt='Dropdown Arrow'
               />
            </button>
            {isDropdownOpen && (
                  <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg py-1 md:left-0 left-4 right-0">
                    <Link href="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Blogs</Link>
                    <Link href="/podcasts" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Podcasts</Link>
                  </div>
            )}
          </li>
				</ul>
			</div>
		</div>
        
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        
        {/* Menu items and buttons */}
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row w-full md:w-auto md:items-center mt-4 md:mt-0`}> 
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3">
            <button className="px-4 py-2 bg-white text-[#000000] border rounded-md hover:bg-blue-50 cursor-pointer">
              Recent Episodes
            </button>
            <button className="px-4 py-2 bg-[#000000] text-white rounded-md shadow-md shadow-gray-600 cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;