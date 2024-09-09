import React from 'react'
import Navbar from '../components/Navbar'
import { LuSmilePlus } from "react-icons/lu";
import { MdOutlineLightbulb } from "react-icons/md";
import { SlGraph } from "react-icons/sl";
import { MdEmojiEmotions } from "react-icons/md";
import graphic1 from "../assets/graphic1.webp"
import graphic2 from "../assets/graphic2.webp"
import graphic3 from "../assets/graphic3.webp"
import bgImage from "../assets/bg.jpg";

const UsersPage = () => {
  return (
    <div className='w-full'>
        <Navbar />
        <div className='px-[40px] relative bg-white flex flex-col items-center justify-center w-full h-[80vh]' style={{ backgroundImage: `url(${bgImage})`, backgroundPosition: "center", backgroundAttachment: "fixed", backgroundSize: "cover" }}>
          <div className='flex flex-col items-center justify-center w-[60%] text-center mb-4'>
            <h1 className='text-black font-bold text-5xl mb-3'>Mental health that meets people where they are</h1>
            <p className='text-lg text-gray-600 mb-2'>Working on yourself, made easier</p>
            <a href="/signup" className='bg-green-500 text-white px-2 py-1 rounded-md'>Sign Up</a>
          </div>
        </div>
        <div className='flex p-[40px] bg-teal-50'>
            <div className='w-[50%]'>
                <h1 className='text-6xl font-bold mb-4'>With Uzima, you've got someone in your corner.</h1>
                <p className='text-xl'>With Uzima, you’ll get actionable advice to use today and learn proven ways to better cope in the future.</p>
            </div>
            <div className='w-[50%] grid grid-cols-2 gap-5'>
                <div className='p-[15px] flex flex-col items-center justify-center'>
                    <LuSmilePlus className='text-[50px] text-green-500 mb-3' />
                    <h1 className='mb-2 text-xl font-bold'>Boost confidence</h1>
                    <p className='text-center'>Learn how to swap negative self-critique for radical acts of self-compassion.</p>
                </div>
                <div className='p-[15px] flex flex-col items-center justify-center'>
                    <MdOutlineLightbulb className='text-[50px] text-orange-500 mb-3' />
                    <h1 className='mb-2 text-xl font-bold'>Gain Clarity</h1>
                    <p className='text-center'>Discover new, valuable insights into your authentic values, beliefs and motivations.</p>
                </div>
                <div className='p-[15px] flex flex-col items-center justify-center'>
                    <SlGraph className='text-[50px] text-blue-500 mb-3' />
                    <h1 className='mb-2 text-xl font-bold'>Change thought pattern</h1>
                    <p className='text-center'>Retrain your brain to embrace positive thinking and avoid unnecessary stress and anxiety.</p>
                </div>
                <div className='p-[15px] flex flex-col items-center justify-center'>
                    <MdEmojiEmotions className='text-[50px] text-yellow-500 mb-3' />
                    <h1 className='mb-2 text-xl font-bold'>Figure out your emotions</h1>
                    <p className='text-center'>Get in-tune with your anxieties and desires and learn why you react the way you do.</p>
                </div>
            </div>
        </div>
        <div className='p-[40px]'>
            <h1 className='text-center font-bold text-4xl mb-6'>How Does It Work?</h1>
            <div className='grid grid-cols-2 gap-4'>
                <div className=''>
                    <h1 className='font-bold text-xl mb-3'>Step 1 : Opening up to our AI</h1>
                    <ul className='list-disc'>
                        <li className='mb-2'>Conversational AI creates an anonymous, safe space to work through worries and stressors, preventing them from escalating in severity and towards illness</li>
                        <li className='mb-2'>Wysa's AI is clinically proven to create a therapeutic alliance equivalent to a human therapist within the first week</li>
                        <li>Most people feel better after their first conversation and lean on Wysa for on-demand support, whenever needed</li>
                    </ul>
                </div>
                <div>
                    <img src={graphic1} className='h-[400px] w-full object-cover' alt="" />
                </div>
                <div>
                    <img src={graphic2} className='h-[400px] w-full object-cover' alt="" />
                </div>
                <div className=''>
                    <h1 className='font-bold text-xl mb-3'>Step 2: Structured programs and on-demand self-care</h1>
                    <ul className='list-disc'>
                        <li className='mb-2'>Wysa's AI conversational care guides users through both curated CBT programs and on-demand support</li>
                        <li className='mb-2'>In Wysa's Clinical Programs, the AI checks in every morning and evening, and can also be supplemented by a human coach or therapist. The programs are clinically validated to reduce symptoms of depression and anxiety</li>
                        <li>For day-to-day stress, Wysa offers on-demand self-care through 150+ evidence-based exercises, including resources for anxiety, sleep, handling difficult conversations, and improving productivity.</li>
                    </ul>
                </div>
                <div className=''>
                    <h1 className='font-bold text-xl mb-3'>Step 3:  Work with a professional </h1>
                    <ul className='list-disc'>
                        <li className='mb-2'>Wysa coaches offer 1-on-1 sessions, along with unlimited messaging between sessions. If chosen, employees can also be redirected to in-house EAP support through Wysa</li>
                        <li className='mb-2'>Wysa's conversational AI takes on 80% of the load by supporting people with sub-clinical symptom levels and guiding them through proactive prevention routines</li>
                        <li>Those who need professional support can access it sooner and as much as needed.</li>
                    </ul>
                </div>
                <div>
                    <img src={graphic3} className='h-[400px] w-full object-cover' alt="" />
                </div>
                
            </div>
        </div>
        <div className='border border-t p-[20px] text-center'>
            <p>Copyright Uzima AI</p>
        </div>
    </div>
  )
}

export default UsersPage