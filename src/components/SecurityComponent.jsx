import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { logout } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

// const SERVER = 'http://localhost:5000'
const SERVER = "https://uzima-backe.vercel.app"

const SecurityComponent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate(); 
    const token = useSelector((state) => state.auth.token);
    const [showOldPassword, setShowOldPassword] = useState(false); // New state for old password visibility
    const [showNewPassword, setShowNewPassword] = useState(false);

    const dispatch = useDispatch(); // Initialize dispatch

    const handleResetPassword = async () => {
        setLoading(true);
        setError('');
        try {
            // Replace with your API endpoint
            await axios.post(`${SERVER}/api/users/change-password/${user._id}`, {
                oldPassword,
                newPassword
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            toast.success('Password reset successfully.');
            setIsModalOpen(false);
            setTimeout(() => {
                // Log out the user after update
                dispatch(logout()); // Call the logout action
                
                // Redirect to login page
                navigate('/signin');
            }, 3000); 
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred while resetting the password.');
            toast.error(err.response?.data?.message || 'An error occurred while resetting the password.');
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className='w-full border border-gray-300 p-4'>
            <div className='flex justify-between items-center mb-4'>
                <div className='w-[60%]'>
                    <h1 className='font-bold'>Enable Multi-Factor Authentication.</h1>
                    <p className='text-gray-500 text-sm'>Require an extra security challenge when logging in. If you are unable to pass this challenge, you will have the option to recover your account via email.</p>
                </div>
                <div>
                    <button className='bg-green-500 hover:bg-green-900 px-2 py-1 rounded-md text-white'>Enable</button>
                </div>
            </div>
            <hr />
            <div className='flex justify-between items-center mb-4'>
                <div className='w-[60%]'>
                    <h1 className='font-bold'>Reset your password.</h1>
                    <p className='text-gray-500 text-sm'>Click on the button to reset your password. You will be logged out once you reset it.</p>
                </div>
                <div>
                    <button onClick={() => setIsModalOpen(true)} className='border hover:bg-green-500 hover:text-white border-green-500 px-2 py-1 rounded-md'>Reset</button>
                </div>
            </div>
            {isModalOpen && (
                <div className='fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50'>
                    <div className='bg-white p-6 rounded-lg w-[400px]'>
                        <h2 className='text-lg font-bold mb-4'>Reset Password</h2>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            handleResetPassword();
                        }}>
                            <div className='mb-4 relative'>
                                <label className='block text-sm font-medium mb-1'>Old Password</label>
                                <input
                                    type={showOldPassword ? 'text' : 'password'}
                                    value={oldPassword}
                                    onChange={(e) => setOldPassword(e.target.value)}
                                    className='border px-2 py-1 rounded-sm w-full'
                                    required
                                />
                                <button
                                    type='button'
                                    onClick={() => setShowOldPassword(!showOldPassword)}
                                    className='absolute right-2 top-8 text-sm'
                                >
                                    {showOldPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                                </button>
                            </div>
                            <div className='mb-4 relative'>
                                <label className='block text-sm font-medium mb-1'>New Password</label>
                                <input
                                    type={showNewPassword ? 'text' : 'password'}
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    className='border px-2 py-1 rounded-sm w-full'
                                    required
                                />
                                <button
                                    type='button'
                                    onClick={() => setShowNewPassword(!showNewPassword)}
                                    className='absolute right-2 top-8 text-sm'
                                >
                                    {showNewPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                                </button>
                            </div>
                            {error && <p className='text-red-500 mb-4'>{error}</p>}
                            <div className='flex justify-between'>
                                <button
                                    type='button'
                                    className='bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded-md'
                                    onClick={() => setIsModalOpen(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    type='submit'
                                    className='bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md'
                                    disabled={loading}
                                >
                                    {loading ? 'Saving...' : 'Reset Password'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

export default SecurityComponent