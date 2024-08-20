import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../redux/authSlice';
import { toast } from 'react-toastify';
// import Navbar from '../../components/Navbar';

const Register = () => {
  const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser({ firstName, lastName, email, password }))
            .unwrap()
            .then(() => {
                toast.success('Registration successful. Kindly verify your email before login.');
                navigate('/registration-confirmation');
                // Optionally redirect to login or home page
            })
            .catch((err) => {
              
              if (err.response && err.response.data) {
                // toast.error(err.response.data.message);
              } else {
                // toast.error('An unexpected error occurred. Please try again.');
              }
            });
    };
  return (
    <div className='w-full'>
      {/* <Navbar /> */}
      <div> 
        <div className='flex flex-col sm:px-0 px-7 items-center justify-center w-full h-[90vh]'>
          <h1 className='font-bold sm:text-4xl text-2xl'>Welcome to Uzima</h1>
          <p className='text-gray-500 text-sm mb-4'>Sign up to get your mental health checked and improved.</p>
          <form onSubmit={handleSubmit} className='border border-green-100 sm:w-[450px] p-[30px] rounded-xl shadow-md'>
            <h1 className='text-center font-bold text-2xl mb-3'>UZIMA AI</h1>
            <div className='' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <div className='sm:grid sm:grid-cols-2 gap-2'>
                <input
                  type="text"
                  className='w-full p-2 rounded-md border border-gray-400 outline-none mb-3'
                  placeholder='First Name'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  className='w-full p-2 rounded-md border border-gray-400 outline-none mb-3'
                  placeholder='Last Name'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <input
                type="email"
                className='w-full p-2 rounded-md border border-gray-400 outline-none mb-3'
                placeholder='name@company.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                className='w-full p-2 rounded-md border border-gray-400 outline-none mb-3'
                placeholder='*********'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className='bg-green-400 text-white px-4 py-2 w-full rounded-md mb-3' type='submit' disabled={loading}>
                {loading ? 'Creating Account...' : 'Create Account'}
              </button>
              {error && <p className='text-red-500'>{error}</p>}
              <div className='mb-6 flex w-full justify-between items-center'>
                {/* <a href="/forgot" className='text-sm text-start underline text-blue-500'>Forgot Password?</a> */}
                <p className='text-sm text-gray-500'>Already have an account? <a href='/signin' className='underline text-green-500'>Login Here</a></p>
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

export default Register