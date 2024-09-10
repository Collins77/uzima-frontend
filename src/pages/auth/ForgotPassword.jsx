import React, { useState } from 'react'
import logo from '../../assets/uzima-logo.png'
// import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';

// const SERVER = "http://localhost:5000"
const SERVER = "https://uzima-backe.vercel.app"

const ForgotPassword = () => {
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const { loading, error, } = useSelector((state) => state.auth);
    const [email, setEmail] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Make a request to your forgot password endpoint
            const response = await axios.post(`${SERVER}/api/users/forgot-password`, { email });
            setSuccessMessage(response.data.message); // Display success message
            setEmail('');
            toast.success(successMessage) // Clear email input field
        } catch (error) {
            console.error('Error submitting forgot password request:', error);
            // Optionally, you can dispatch an action to update the error in the global state
            dispatch({ type: 'SET_ERROR', payload: error.response ? error.response.data.message : 'Server error' });
        }
    };

    return (
        <div className='w-full'>
            {/* <Navbar /> */}
            <div>
                <div className='flex sm:px-0 px-7 flex-col items-center justify-center w-full h-[90vh]'>
                    <h1 className='font-bold sm:text-4xl text-2xl'>Reset Your Password!</h1>
                    <p className='text-gray-500  text-sm mb-4'>Submit your email address to get the reset link.</p>
                    <form onSubmit={handleSubmit} className='border border-green-100 sm:w-[450px] p-[30px] rounded-xl shadow-md'>
                        {/* <h1 className='text-center font-bold text-2xl mb-3'>UZIMA AI</h1> */}
                        <div className='w-full flex items-center justify-center mb-4'>
                            <img src={logo} className='text-center w-[40px] h-[40px] flex items-center justify-center' alt="" />
                        </div>
                        <div className='' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <input
                                type="email"
                                className='w-full p-2 rounded-md border border-gray-400 outline-none mb-3'
                                placeholder='name@company.com'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button className='bg-green-400 text-white px-4 py-2 w-full rounded-md mb-3' type='submit' disabled={loading}>
                                {loading ? 'Loading...' : 'Submit Email'}
                            </button>
                            {error && <p className='text-red-500'>{error}</p>}
                            <div className='mb-6 sm:flex block w-full justify-between items-center'>
                                <a href="/signup" className='text-sm sm:text-start text-center underline text-gray-500'>Sign Up</a>
                                <p className='text-sm text-gray-500'>Remembered your password? <a href='/signin' className='underline text-green-500'>Sign In</a></p>
                            </div>
                            <p className='text-sm text-gray-500'>By continuing, you agree to Uzima's <span className='underline'>Consumer terms</span> and <span className='underline'>usage policy</span>, and acknowledge our <span className='underline'>privacy policy.</span></p>
                        </div>
                    </form>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default ForgotPassword