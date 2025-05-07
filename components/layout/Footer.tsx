import React from 'react'
import appstore from '../../public/images/appstore.png'
import tiktok from '../../public/images/tiktok.png'
import instagram from '../../public/images/instagram.png'
import twitter from '../../public/images/twitter.png'
import googleplay from '../../public/images/googleplay.svg'
import googlepod from '../../public/images/Google-Podcast.png'
import spotify from '../../public/images/Spotify.png'
import youtube from '../../public/images/Youtube.png'
import logo from '../../public/images/logo.png'
import Link from 'next/link'


const Footer = () => {
  return (
    <>
      <div className='md:flex md:flex-row justify-between w-full p-3'>
        <div className='mt-3'>
          <img src={logo.src} className='max-w-[50px]' alt="logo" />
          <p className='text-sm md:mb-3  md:mt-3 my-3'>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
          <div className='flex gap-2'>
            <img src={twitter.src} alt="twitter" />
            <img src={instagram.src} alt="instagram" />
            <img src={tiktok.src} alt="tiktok" />
          </div>
        </div>
        {/* -----links------ */}
        <div className='flex flex-row mt-3 gap-8'>
          <div>
            <ul>
              <li className='py-2'><Link href="/about" className="hover:text-[#CD4631] transition-colors">About</Link></li>
              <li className='py-2'><Link href="/episodes" className="hover:text-[#CD4631] transition-colors">Episodes</Link></li>
              <li className='py-2'><Link href="/testimonies" className="hover:text-[#CD4631] transition-colors">Testimonies</Link></li>
            </ul>
          </div>
          <div>
            <ul>
              <li className='py-2'><Link href="/about" className="hover:text-[#CD4631] transition-colors">About</Link></li>
              <li className='py-2'><Link href="/episodes" className="hover:text-[#CD4631] transition-colors">Episodes</Link></li>
              <li className='py-2'><Link href="/testimonies" className="hover:text-[#CD4631] transition-colors">Testimonies</Link></li>
            </ul>
          </div>
        </div>
        {/* ---------links----------- */}

        {/* -----podcasts -------- */}
        <div className='mt-3'>
          <p className='mx-2 text-sm'>Listen to episodes on your fav platform:</p>
          <div className='flex mt-3 gap-4'>
            <img src={googlepod.src} className='max-w-[80px] max-h-[20px]' alt="podcast" />
            <img src={spotify.src} className='max-w-[80px] max-h-[20px]' alt="podcast" />
            <img src={youtube.src} className='max-w-[80px] max-h-[20px]' alt="podcast" />
          </div>
          <div className='mt-3'>
            <p>App available on:</p>
            <div>
              <img src={appstore.src} alt="appstore" />
              <img src={googleplay.src} alt="googleplay" />
            </div>
          </div>
        </div>
        {/* -----podcasts -------- */}

      </div>
      <div className='flex flex-col justify-between w-full p-3'>
        <hr className="w-full border border-gray-400 m-2" />
        <div className='flex justify-between'>
          <p className='text-sm'>©2025. All Rights Reserved. <span className='text-[#CD4631]'>Pod of Cast</span></p>
          <div className='flex gap-2'>
            <p className='text-sm'>Terms</p>
            <p className='text-sm'>Privacy</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer