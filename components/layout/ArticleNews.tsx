import React from 'react'
import Button from '../ul/Buttons'
import swirl from '../../public/images/scribble-2.png'
import pod from '../../public/images/pod.png'
import dood from '../../public/images/dood.png'

const ArticleNews = () => {
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
        <div className='w-full text-center justify-center items-center p-4 md:p-8 relative'>
          <h1 className='text-4xl font-bold'>Article and News</h1>
          <h6 className='text-[#6d6c6c] font-bold'>News Tips, Tricks and More</h6>
        </div>

        {/* ----Grid Box ------- */}
        <div className='grid grid-cols-1 m-3 md:grid-cols-2 lg:grid-cols-2 gap-4 md:p-8'>
          {/* Each box */}
          <div className='flex flex-col items-start p-2 border border-gray-600 rounded-lg shadow-md overflow-hidden'>
            <div className='w-full flex justify-center'>
              <img src={pod.src} alt="scribble1" />
            </div>
            <div>
              <h5 className='text-xl mt-3 mx-2 font-bold text-gray-500 text-start'>Podcast</h5>
              <h2 className='text-4xl text-[#CD4631] font-bold mx-2 my-2 text-start'>Setup your own podcast</h2>
              <p className='text-sm mx-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimvel iam, quis nostrud exercitation ullamco laboris...</p>
              <hr className="w-full border border-gray-400 m-2" />
              <div className="m-3 flex space-x-2">
                <button className="px-3 py-1 text-xs border border-gray-300 rounded-sm text-gray-600">Business</button>
                <button className="px-3 py-1 text-xs border border-gray-300 rounded-sm text-gray-600">Startup</button>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-start p-2 border border-gray-600 rounded-lg shadow-md overflow-hidden'>
            <div className='w-full flex justify-center'>
              <img src={dood.src} alt="scribble1" />
            </div>
            <div>
              <h5 className='text-xl mt-3 mx-2 font-bold text-gray-500 text-start'>Tips and Tricks</h5>
              <h2 className='text-4xl font-bold mx-2 my-2 text-start'>Doodle artwork 101</h2>
              <p className='text-sm mx-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimvel iam, quis nostrud exercitation ullamco laboris...</p>
              <hr className="w-full border border-gray-400 m-2" />
              <div className="m-3 flex space-x-2">
                <button className="px-3 py-1 text-xs border border-gray-300 rounded-sm text-gray-600">Art</button>
                <button className="px-3 py-1 text-xs border border-gray-300 rounded-sm text-gray-600">Tips and Tricks</button>
                <button className="px-3 py-1 text-xs border border-gray-300 rounded-sm text-gray-600">Business</button>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center m-5 align-center my-3'>
          <Button text="Browse All" onClick={() => console.log('Browse')} />
        </div>
      </div>
    </>
  )
}

export default ArticleNews