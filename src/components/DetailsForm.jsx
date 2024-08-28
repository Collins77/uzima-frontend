import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { logout } from '../redux/authSlice';
const SERVER = 'http://localhost:5000'

const DetailsForm = ({user}) => {
    const [firstName, setFirstName] = useState(user?.firstName || '');
    const [lastName, setLastName] = useState(user?.lastName || '');
    const [email, setEmail] = useState(user?.email || '');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch(); // Initialize dispatch
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            await axios.put(`${SERVER}/api/users/update/${user._id}`, {
                firstName,
                lastName,
                email
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            
            toast.success('User details updated. Redirecting to Sign in...');
            // Wait 3 seconds before logging out
            setTimeout(() => {
                // Log out the user after update
                dispatch(logout()); // Call the logout action
                
                // Redirect to login page
                navigate('/signin');
            }, 3000); 
        } catch (err) {
            // Handle error response
            setError(err.response?.data?.message || 'An error occurred while updating the details.');
            toast.error(err.response?.data?.message)
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='sm:w-[500px] p-2'>
            <form onSubmit={handleSubmit} className='w-full'>
                <div className='sm:flex items-center gap-2 justify-between mb-4 w-full'>
                    <div className='flex flex-col w-full'>
                        <label htmlFor="">First Name</label>
                        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className='border px-2 py-1 rounded-sm w-full' />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label htmlFor="">Last Name</label>
                        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className='border px-2 py-1 rounded-sm w-full' />
                    </div>
                </div>
                <div className='flex flex-col mb-4'>
                    <label htmlFor="">Email Address</label>
                    <input type="email"onChange={(e) => setEmail(e.target.value)} className='border px-2 py-1 rounded-sm' value={email} />
                </div>
                <input
                    type="submit"
                    className='bg-blue-500 text-white px-2 py-1 rounded-md'
                    value={loading ? 'Saving...' : 'Update'}
                    disabled={loading}
                />
                <p className='text-gray-500 text-sm mt-5'>You will be required to sign in again after updates</p>
                {error && <p className='text-red-500 mt-2'>{error}</p>}
            </form>
        </div>
    )
}

export default DetailsForm