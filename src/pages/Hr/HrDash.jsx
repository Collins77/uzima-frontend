import React, { useEffect, useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { FaArrowRight, FaUsersRectangle } from 'react-icons/fa6'
import { MdOutlinePayment } from 'react-icons/md'
import { IoTime } from "react-icons/io5";
import BarChart from '../../components/BarChart';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
// const BACKEND = "http://localhost:5000"
const BACKEND = "https://uzima-backe.vercel.app"

const data = {
    labels: ['Depression', 'Anxiety', 'Stress', 'PTSD', 'OCD'],
    values: [20, 15, 25, 10, 5], // Sample percentages
  };

const HrDash = () => {
    const navigate = useNavigate();
    const { company, token } = useSelector(state => state.auth);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (!token) {
            navigate('/hr-login');
        } else {
            // Fetch the users for the company
            axios.get(`${BACKEND}/api/company/${company._id}/users`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
        }
    }, [token, navigate, company._id]);
    return (
        <div className='p-4'>
            <div className='mb-4 border-b-2 pb-2'>
                <h1 className='font-bold text-3xl'>Dashboard</h1>
                <p className='text-sm text-gray-500'>Welcome back, {company?.name} 👋</p>
            </div>
            <div className='grid grid-cols-3 gap-4 mb-4'>
                <div className='bg-white shadow-md rounded-md border p-4'>
                    <div className='flex mb-3 justify-between items-center'>
                        <div>
                            <h1 className='text-2xl font-bold'>{users.length}</h1>
                            <p className='text-gray-500'>Total Registered Staff</p>
                        </div>
                        <div className='p-2 bg-blue-300 rounded-md'>
                            <FaUser color='blue' />
                        </div>
                    </div>
                    <div>
                        <a href="/" className='underline flex gap-1 items-center hover:text-blue-600'>
                            View Staff Reports
                            <FaArrowRight />
                        </a>
                    </div>
                </div>
                <div className='bg-white shadow-md rounded-md border p-4'>
                    <div className='flex mb-3 justify-between items-center'>
                        <div>
                            <h1 className='text-2xl font-bold'>3</h1>
                            <p className='text-gray-500'>Scheduled Events</p>
                        </div>
                        <div className='p-2 bg-green-300 rounded-md'>
                            <FaUsersRectangle color='green' />
                        </div>
                    </div>
                    <div>
                        <a href="/" className='underline flex gap-1 items-center hover:text-green-600'>
                            View Events
                            <FaArrowRight />
                        </a>
                    </div>
                </div>
                <div className='bg-white shadow-md rounded-md border p-4'>
                    <div className='flex mb-3 justify-between items-center'>
                        <div>
                            <h1 className='text-2xl font-bold text-green-500'>Active</h1>
                            <p className='text-gray-500'>Subscription Plan</p>
                        </div>
                        <div className='p-2 bg-orange-300 rounded-md'>
                            <MdOutlinePayment color='orange' />
                        </div>
                    </div>
                    <div>
                        <a href="/" className='underline flex gap-1 items-center hover:text-orange-600'>
                            View Subscription Details
                            <FaArrowRight />
                        </a>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <div className='w-[50%]'>
                    <div className='mb-4'>
                        <h1 className='font-bold text-xl border-b'>Scheduled Events</h1>
                    </div>
                    <div className='p-2 border rounded-md'>
                        <div className='flex items-center justify-between border-b mb-3 border-gray-300 gap-2'>
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
                        </div>
                    </div>
                </div>
                <div className='w-[45%] p-3'>
                    <div className='mb-4'>
                        <h1 className='font-bold text-xl border-b'>Sample Analytics</h1>
                    </div>
                    <BarChart data={data} />
                </div>
            </div>
        </div>
    )
}

export default HrDash