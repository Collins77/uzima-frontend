import React from 'react'
import Navbar from '../components/Navbar'


const HomePage = () => {
  return (
    <div className='w-full bg-white h-[100vh]'>
        <Navbar />
        <div className='sm:px-[40px] px-[10px] relative bg-white flex flex-col items-center justify-center w-full h-full'>
          <div className='flex flex-col items-center justify-center w-[60%] text-center mb-4'>
            <h1 className='text-black font-bold sm:text-5xl text-2xl mb-3'>Mental Health Counselling At Your Convenience.</h1>
            <p className='text-lg text-gray-600'>Access Uzima and get help anywhere anytime. Our AI is trained to handle all types of mental health disorders, including addictions.</p>
          </div>
          <div className='sm:flex sm:flex-row flex flex-col items-center justify-center gap-[10px]'>
            <button className='bg-green-400 text-white px-2 py-1 rounded-md'>7 Day Free Trial</button>
            <button className='border border-green-500 rounded-md px-2 py-1'>Request a Demo</button>
          </div>
          <div className='absolute sm:block hidden left-5 z-2 top-20 bg-gray-400 text-white p-2 rounded-sm'>
            <p>Hey, I am Uzima AI, your counsellor today...</p>
          </div>
          <div className='absolute sm:block hidden right-5 z-2 bottom-50 bg-gray-400 text-white p-2 rounded-sm'>
            <p>It is okay to feel sad....</p>
          </div>
        </div>
    </div>
  )
}

export default HomePage