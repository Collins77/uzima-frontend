import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';  // Import framer-motion
import { FaApple } from "react-icons/fa";
// import videoSrc from '../assets/iphone-spin-up.mp4';  // Import the video
import { IoLogoGooglePlaystore } from "react-icons/io5";

// Image imports
import pic1 from '../assets/burwein.png';
import pic2 from '../assets/eye2.png';
import pic3 from '../assets/brin.png';
import pic4 from '../assets/525958_40670.webp';
import pic5 from '../assets/714311_499127.webp';
import pic6 from '../assets/197002_201910.webp';
import pic7 from '../assets/879879_705100.webp';
import iphone from '../assets/iphone-spin-up.png';

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='w-full bg-white h-[100vh]'
    >
      <Navbar />
      <div className='sm:px-[40px] px-[10px] relative bg-white flex flex-col items-center justify-center w-full h-full'>
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
          className='flex flex-col items-center justify-center w-[60%] text-center mb-4'
        >
          <h1 className='text-black font-bold sm:text-5xl text-2xl mb-3'>
            Mental Health Counselling At Your Convenience.
          </h1>
          <p className='text-lg text-gray-600'>
            Access Uzima and get help anywhere anytime. Our AI is trained to handle all types of mental health disorders, including addictions.
          </p>
        </motion.div>
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className='sm:flex sm:flex-row flex flex-col items-center justify-center gap-[10px]'
        >
          <a href="/signup" className='bg-green-400 text-white px-2 py-1 rounded-md'>
            7 Day Free Trial
          </a>
          <a href="/" className='border border-green-500 rounded-md px-2 py-1'>
            Request a Demo
          </a>
        </motion.div>

        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 120 }}
          className='absolute sm:block hidden left-5 z-2 top-20 bg-gray-400 text-white p-2 rounded-sm'
        >
          <p>Hey, I am Uzima AI, your counsellor today...</p>
        </motion.div>
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 120 }}
          className='absolute sm:block hidden right-5 z-2 bottom-50 bg-gray-400 text-white p-2 rounded-sm'
        >
          <p>It is okay to feel sad....</p>
        </motion.div>
      </div>

      <div className='bg-cyan-100 flex flex-col h-[300px] items-center justify-center px-[70px]'>
        <h1 className='text-4xl font-bold'>Mental health that meets people where they are</h1>
        <p className='text-xl font-semibold'>
          At Uzima, we believe mental health support should be available to everyone, no matter who you are or where you are.
          Our AI-driven platform offers personalized care that’s always available, helping individuals, organizations, healthcare providers, and young people thrive.
        </p>
        <a href="/" className='bg-green-500 py-2 px-2 text-white rounded-md hover:bg-green-800'>
          Who are our clients?
        </a>
      </div>

      <div className='bg-white h-[500px] p-[40px] flex flex-col items-center justify-center'>
        <h1 className='text-5xl mb-4 font-bold'>Meet Uzima...</h1>
        <div className='flex items-center justify-between'>
          <div className='w-[30%] shadow-md rounded-md p-[40px] flex flex-col items-center justify-center'>
            <img src={pic1} alt="" className='w-[100px] h-[100px]' />
            <h1 className='text-2xl bg-cyan-300 font-bold text-center mb-2'>Targeted relief</h1>
            <p className='text-gray-500 text-center mb-2'>Evidence-based tools that effectively treat the root cause of anxiety & depression.</p>
            <a href="/" className='underline text-gray-400 text-center'>Learn More</a>
          </div>
          <div className='w-[30%] shadow-md rounded-md p-[40px] flex flex-col items-center justify-center'>
            <img src={pic2} alt="" className='w-[100px] h-[100px]' />
            <h1 className='text-2xl bg-orange-200 font-bold text-center mb-2'>for young minds</h1>
            <p className='text-gray-500 text-center mb-2'>
              Designed specifically to support the 1.5 million young Aussies struggling with their mental health each year.
            </p>
            <a href="/" className='underline text-gray-400 text-center'>Learn More</a>
          </div>
          <div className='w-[30%] shadow-md rounded-md p-[40px] flex flex-col items-center justify-center'>
            <img src={pic3} alt="" className='w-[100px] h-[100px]' />
            <h1 className='text-2xl bg-cyan-300 font-bold text-center mb-2'>that works!</h1>
            <p className='text-gray-500 text-center mb-2'>After 6 weeks, 8 out of 10 young people found relief from their anxiety or depression with Uzima.</p>
            <a href="/" className='underline text-gray-400 text-center'>Learn More</a>
          </div>
        </div>
      </div>

      <div className='p-[40px] bg-orange-50'>
        <h1 className='text-center text-5xl font-bold mb-10'>Why Uzima?</h1>
        <div className='grid grid-cols-3 gap-[20px]'>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-green-500 text-4xl text-center font-semibold mb-4'>Always on, always there</h1>
            <p className='text-center font-semibold'>
              Uzima is available 24/7, providing immediate, evidence-based support whenever it's needed. No matter the time of day, Uzima is ready to help—no appointments, no waiting, just instant access to care.
            </p>
          </div>
          <div>
            <img src={pic4} alt="" className='rounded-lg' />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-green-500 text-4xl text-center font-semibold mb-4'>Trusted by millions worldwide</h1>
            <p className='text-center font-semibold'>
              With over 5 million users and counting, Uzima has become a globally trusted leader in mental health support. Our AI-powered platform has guided more than 500 million conversations, delivering care that’s both personal and impactful.
            </p>
          </div>
          <div>
            <img src={pic5} alt="" className='rounded-lg' />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-green-500 text-4xl text-center font-semibold mb-4'>Anonymous and secure</h1>
            <p className='text-center font-semibold'>
              Privacy is our priority. Uzima offers a safe, judgment-free space where users can express themselves freely. All conversations are anonymous, ensuring users feel secure while accessing the support they need.
            </p>
          </div>
          <div>
            <img src={pic6} alt="" className='rounded-lg' />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-green-500 text-4xl text-center font-semibold mb-4'>Clinically validated</h1>
            <p className='text-center font-semibold'>
              Uzima’s approach is grounded in science, utilizing evidence-based tools such as CBT, to deliver clinically effective support. Our methods are validated by research and trusted by leading healthcare organizations to improve mental wellbeing.
            </p>
          </div>
          <div>
            <img src={pic7} alt="" className='rounded-lg' />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-green-500 text-4xl text-center font-semibold mb-4'>Proven impact</h1>
            <p className='text-center font-semibold'>
              Users report significant improvements in their mental health, with 82% experiencing relief after just 6 weeks. Uzima’s personalized approach ensures each individual receives the care they need to thrive.
            </p>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-between px-[40px]'>
        <div className='p-[20px] w-[50%] flex flex-col justify-center items-start'>
          <h1 className='text-2xl font-bold text-start mb-[10px]'>
            Trusted by mental health organizations across the world
          </h1>
          <p className='text-center text-gray-600'>
            Get Uzima on your mobile device, available on iOS and Android platforms.
          </p>
          <div className='flex gap-4'>
            <a href="/" className='mt-4 bg-black flex shadow-sm text-white py-2 px-4 rounded-md'>
              <FaApple className='text-[40px]' />
              Download the App on <br /> App Store
            </a>
            <a href="/" className='mt-4 bg-black flex shadow-sm text-white py-2 px-4 rounded-md'>
              <IoLogoGooglePlaystore className='text-[40px]' />
              Download the App on <br /> Play Store
            </a>
          </div>
        </div>
        
        <motion.div
          className='h-[400px] w-[50%]'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* <video autoPlay muted loop controls className=' object-cover'>
            <source src={videoSrc} type='video/mp4' />
          </video> */}
          <img src={iphone} alt="phone " />
        </motion.div>


      </div>
    </motion.div>
  );
};

export default HomePage;
