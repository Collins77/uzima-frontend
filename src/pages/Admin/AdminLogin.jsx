import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginAdmin } from '../../redux/authSlice';

const AdminLogin = () => {
    const dispatch = useDispatch();
    const { loading, error } = useSelector(state => state.auth);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginAdmin({ email, password }))
            .unwrap().then(() => {
                toast.success('Login successful!');
                navigate('/admin');
            })
            .catch(err => {
                toast.error(`Login failed: ${error}`);
            });
    };
    return (
        <div className='w-[100%] h-[100vh] flex items-center justify-center'>
            <form onSubmit={handleSubmit} className='border border-green-100 w-[450px] p-[30px] rounded-xl shadow-md'>
                <h1 className='text-center font-semibold text-xl mb-3'>Welcome Back Admin,</h1>
                <div className='flex flex-col justify-center items-center'>
                    {/* <button type='button' className='flex gap-2 items-center justify-center mb-3 px-4 py-2 bg-white w-full rounded-md'>
                        <FcGoogle />
                        Continue with Google
                    </button> */}
                    <p className='font-semibold mb-3'>
                        <img src="" alt="" />
                    </p>
                    <input
                        type="email"
                        className='w-full p-2 rounded-md border border-slate-100 outline-none mb-3'
                        placeholder='name@company.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        className='w-full p-2 rounded-md border border-slate-100 outline-none mb-3'
                        placeholder='*********'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type='submit' className='bg-green-400 text-white px-4 py-2 w-full rounded-md mb-3'>
                    {loading ? 'Loading...' : 'Login'}
                    </button>
                    {error && <p className='text-red-500'>{error}</p>}
                    <div className='mb-6 flex w-full justify-between items-center'>
                        <a href="/forgot" className='text-sm text-start underline text-blue-500'>Forgot Password?</a>
                        {/* <p className='text-sm text-gray-500'>Not yet registered? <a href='/register' className='underline text-green-500'>Register Here</a></p> */}
                    </div>
                    {/* <p className='text-sm text-gray-500'>By continuing, you agree to Uzima's <span className='underline'>Consumer terms</span> and <span className='underline'>usage policy</span>, and acknowledge our <span className='underline'>privacy policy.</span></p> */}
                </div>
            </form>
        </div>
    )
}

export default AdminLogin