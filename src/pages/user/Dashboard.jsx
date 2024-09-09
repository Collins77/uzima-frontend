import React, { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { FaBookOpen } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import axios from 'axios'
import DashMood from '../../components/DashMood'

const SERVER = 'http://localhost:5000'
// const SERVER = 'https://uzima-backe.vercel.app'

const Dashboard = () => {
    const user = useSelector((state) => state.auth.user);
    const [showModal, setShowModal] = useState(false);
    const [mood, setMood] = useState('');
    const [loading, setLoading] = useState(false);
    const [currentUser, setCurrentUser] = useState(false);
    const token = useSelector((state) => state.auth.token);

    useEffect(() => {
        const checkMoodForToday = () => {
            if (currentUser && currentUser.moods) {
                const today = new Date().toISOString().split('T')[0];
                const moodToday = currentUser.moods.find(
                    (mood) => new Date(mood.date).toISOString().split('T')[0] === today
                );

                if (!moodToday) {
                    setShowModal(true);
                }
            }
        };

        checkMoodForToday();
    }, [currentUser]);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`${SERVER}/api/users/get-user/${user._id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`, // Replace `yourAuthToken` with your actual token
                    'Content-Type': 'application/json'
                }
            });
            setCurrentUser(res.data.user)
        };

        fetchUser()
    }, [user._id, token]);

    const handleMoodChange = (e) => {
        setMood(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            // Post the new mood to the server
            await axios.post(`${SERVER}/api/users/update-mood`, {
                userId: user._id,
                mood
            });
            // Close the modal since the mood is now updated for today
            setShowModal(false);
        } catch (error) {
            console.error('Error submitting mood:', error);
        }
        setLoading(false);
    };


    return (
        <div className='p-2 w-full'>
            <div className='bg-gray-50 w-full h-[100vh] p-2'>
                <div className="bg-blue-500 text-white p-3 rounded-md text-center mb-4">
                    <p className="text-sm">You are on a free plan. Upgrade <a href="/billing" className="underline">here</a> to access more services.</p>
                </div>
                <div className='mb-4'>
                    <h1 className='font-extrabold sm:text-2xl text-xl'>Welcome, {currentUser?.firstName} 👋</h1>
                    <p className='text-gray-500 text-sm'>Take a look at some of our features</p>
                </div>
                <div className='sm:flex w-full gap-2 mb-4'>
                    <div className='sm:grid sm:grid-cols-2 sm:gap-2 sm:w-[60%] w-full'>
                        <div className='bg-green-300 p-2 rounded-md sm:mb-0 mb-4'>
                            <h1 className='text-white font-bold text-sm'>Access Uzima AI and chat with our tailored model.</h1>
                            <p className='text-gray-600 text-[11px] mb-6'>Chat with Uzima AI and get help and insight into your mental health state. You can discuss anything with the AI.</p>
                            <a href="/chat" className='flex items-center text-sm gap-1 underline'>
                                Talk to Uzima
                                <FaArrowRight />
                            </a>
                        </div>
                        <div className='bg-purple-300 p-2 sm:mb-0 mb-4 rounded-md'>
                            <h1 className='text-white font-bold text-sm'>Take Our Mental Analysis Assessment</h1>
                            <p className='text-gray-600 text-[11px] mb-6'>Our questionnaire helps us get a better view of your mental state so the AI can better understand you.</p>
                            <a href="/dashboard" className='flex items-center text-sm gap-1 underline'>
                                Take the assessment here
                                <FaArrowRight />
                            </a>
                        </div>

                    </div>
                    <div className='sm:w-[40%] w-full'>
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
                <div className='sm:flex sm:gap-4'>
                    <div className='sm:w-[50%] sm:block hidden w-full sm:h-[250px] h-[150px]'>
                        <h1 className='mb-4 font-bold sm:text-xl'>This Weeks Analysis</h1>
                        <DashMood />
                    </div>
                    <div className='sm:w-[50%] w-full'>
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
            {showModal && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
                    <form onSubmit={handleSubmit} className='bg-white p-4 rounded-md w-fit'>
                        <h2 className='text-lg font-bold mb-2'>How are you feeling today?</h2>
                        <div className='flex gap-2'>
                            <button value="very happy" onClick={handleMoodChange} className='flex items-center p-2 bg-green-300 rounded-md'>
                                <span role="img" aria-label="very happy" className='mr-2'>😄</span> Very Happy
                            </button>
                            <button value="happy" onClick={handleMoodChange} className='flex items-center p-2 bg-yellow-300 rounded-md'>
                                <span role="img" aria-label="happy" className='mr-2'>😊</span> Happy
                            </button>
                            <button value="neutral" onClick={handleMoodChange} className='flex items-center p-2 bg-gray-300 rounded-md'>
                                <span role="img" aria-label="neutral" className='mr-2'>😐</span> Neutral
                            </button>
                            <button value="sad" onClick={handleMoodChange} className='flex items-center p-2 bg-orange-300 rounded-md'>
                                <span role="img" aria-label="sad" className='mr-2'>😢</span> Sad
                            </button>
                            <button value="very sad" onClick={handleMoodChange} className='flex items-center p-2 bg-red-300 rounded-md'>
                                <span role="img" aria-label="very sad" className='mr-2'>😭</span> Very Sad
                            </button>
                        </div>
                        <div className='flex justify-center gap-2 mt-4'>
                            <button onClick={() => setShowModal(false)} className='p-2 bg-gray-200 rounded-md'>Cancel</button>
                            {/* <button onClick={handleSubmit} disabled={loading} className='p-2 bg-blue-500 text-white rounded-md'>
                                {loading ? 'Submitting...' : 'Submit'}
                            </button> */}
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
}

export default Dashboard