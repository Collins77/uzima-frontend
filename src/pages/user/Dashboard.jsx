import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import MoodChart from '../../components/MoodChart'
import { FaBookOpen } from 'react-icons/fa'
import { IoTime } from 'react-icons/io5'
import { useSelector } from 'react-redux'

const Dashboard = () => {
    const user = useSelector((state) => state.auth.user);

    return (
        <div className='p-2 w-full'>
            <div className='bg-gray-50 w-full h-[100vh] p-2'>
                <div className='bg-red-500 py-1 flex items-center justify-center'>
                    <p className='text-white text-sm'>You are on a free plan. Your access to our services is limited. Kindly <a href="/billing" className='underline'>Upgrade Here</a> to access everything.</p>
                </div>
                <div className='mb-4'>
                    <h1 className='font-extrabold text-2xl'>Welcome, {user?.firstName} 👋</h1>
                    <p className='text-gray-500 text-sm'>Take a look at some of our features</p>
                </div>
                <div className='flex w-full gap-2 mb-4'>
                    <div className='grid grid-cols-2 gap-2 w-[60%]'>
                        <div className='bg-green-300 p-2 rounded-md'>
                            <h1 className='text-white font-bold text-sm'>Access Uzima AI and chat with our tailored model.</h1>
                            <p className='text-gray-600 text-[11px] mb-6'>Chat with Uzima AI and get help and insight into your mental health state. You can discuss anything with the AI.</p>
                            <a href="/" className='flex items-center text-sm gap-1 underline'>
                                Talk to Uzima
                                <FaArrowRight />
                            </a>
                        </div>
                        <div className='bg-purple-300 p-2 rounded-md'>
                            <h1 className='text-white font-bold text-sm'>Take Our Mental Analysis Questionnaire</h1>
                            <p className='text-gray-600 text-[11px] mb-6'>Our questionnaire helps us get a better view of your mental state so the AI can better understand you.</p>
                            <a href="/" className='flex items-center text-sm gap-1 underline'>
                                Take the questionnaire here
                                <FaArrowRight />
                            </a>
                        </div>

                    </div>
                    <div className='w-[40%]'>
                        <div className='flex items-center justify-between'>
                            <h1 className='font-bold'>Resources Tab</h1>
                            <a href="/" className='underline'>View All</a>
                        </div>
                        <div className='border border-gray-200 rounded-md'>
                            <div className='flex items-center justify-between w-full p-2 border-b'>
                                <div>
                                    <h1 className='font-bold '>An experts guide to dealing with addiction</h1>
                                    <a href="/" className='text-sm underline flex items-center gap-1'>
                                        View Resource
                                        <FaArrowRight />
                                    </a>
                                </div>
                                <div className='w-10 h-10 bg-gray-300 rounded-md flex items-center justify-center'>
                                    <FaBookOpen />
                                </div>
                            </div>

                            <div className='flex items-center justify-between w-full p-2 border-b'>
                                <div>
                                    <h1 className='font-bold '>An experts guide to dealing with addiction</h1>
                                    <a href="/" className='text-sm underline flex items-center gap-1'>
                                        View Resource
                                        <FaArrowRight />
                                    </a>
                                </div>
                                <div className='w-10 h-10 bg-gray-300 rounded-md flex items-center justify-center'>
                                    <FaBookOpen />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <div className='w-[50%] h-[250px]'>
                        <h1 className='mb-4 font-bold text-xl'>This Weeks Analysis</h1>
                        <MoodChart />
                    </div>
                    <div className='w-[50%]'>
                        <h1 className='font-bold mb-4'>Professional Appointments</h1>
                        <div className='p-2 border rounded-md w-full'>
                            <h1 className='text-gray-400'>No Professional appointments available.</h1>
                            {/* <div className='flex items-center justify-between border-b mb-3 border-gray-300 gap-2'>
                                <div className='flex gap-2 items-center'>
                                    <div className='p-4 border-4 rounded-full w-[20px] h-[20px] border-black flex items-center justify-center'>01</div>
                                    <div>
                                        <h1>Battling Alcohol Addiction</h1>
                                        <p>Date: 22/7/2024</p>
                                    </div>
                                </div>
                                <div>
                                    <p>
                                        <IoTime size={28} />
                                    </p>
                                    12:40 A.M
                                </div>
                            </div>
                            <div className='flex items-center justify-between border-b mb-3 border-gray-300 gap-2'>
                                <div className='flex gap-2 items-center'>
                                    <div className='p-4 border-4 rounded-full w-[20px] h-[20px] border-black flex items-center justify-center'>02</div>
                                    <div>
                                        <h1>Battling Alcohol Addiction</h1>
                                        <p>Date: 22/7/2024</p>
                                    </div>
                                </div>
                                <div>
                                    <p>
                                        <IoTime size={28} />
                                    </p>
                                    12:40 A.M
                                </div>
                            </div>
                            <div className='flex items-center justify-between border-b mb-3 border-gray-300 gap-2'>
                                <div className='flex gap-2 items-center'>
                                    <div className='p-4 border-4 rounded-full w-[20px] h-[20px] border-black flex items-center justify-center'>03</div>
                                    <div>
                                        <h1>Battling Alcohol Addiction</h1>
                                        <p>Date: 22/7/2024</p>
                                    </div>
                                </div>
                                <div>
                                    <p>
                                        <IoTime size={28} />
                                    </p>
                                    12:40 A.M
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard