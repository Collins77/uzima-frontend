import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { decrementOtpCountdown, loginUser } from '../../redux/authSlice';
import { toast } from 'react-toastify';
// import Navbar from '../../components/Navbar';

const Login = () => {
  const dispatch = useDispatch();
    const navigate = useNavigate();
    const { otpRequired, loading, error, otpStatus } = useSelector((state) => state.auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const {otp} = useState('');
    const [otpModalVisible, setOtpModalVisible] = useState(false);

    useEffect(() => {
        if (otpStatus === 'verified') {
            toast.success('OTP verification complete, login successful');
            // Redirect to home page
            navigate('/dashboard');
        }
    }, [otpStatus, navigate]);

    useEffect(() => {
        if (otpRequired) {
            setOtpModalVisible(true);
        }
    }, [otpRequired]);

    useEffect(() => {
        if (otpModalVisible) {
            const timer = setInterval(() => {
                dispatch(decrementOtpCountdown());
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [otpModalVisible, dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser({ email, password }));
        // toast.success('Login successful');
        navigate('/dashboard'); // Redirect to home page
    };

    // const handleOtpSubmit = () => {
    //     dispatch(verifyOtp({ email, otp }));
    // };

    // const handleRegenerateOtp = () => {
    //     // Call your API to regenerate OTP if needed
    //     dispatch(resetOtpCountdown());
    // };

    useEffect(() => {
        // Redirect if login is successful without OTP
        if (!otpRequired && !loading && !error) {
            const token = localStorage.getItem('token'); // or any other method you're using to store the token
            if (token) {
                toast.success('Login successful');
                navigate('/dashboard'); // Redirect to home page
            }
        }
    }, [otpRequired, loading, error, navigate]);
  return (
    <div className='w-full'>
      {/* <Navbar /> */}
      <div> 
        <div className='flex sm:px-0 px-7 flex-col items-center justify-center w-full h-[90vh]'>
          <h1 className='font-bold sm:text-4xl text-2xl'>Welcome Back!</h1>
          <p className='text-gray-500  text-sm mb-4'>Sign in to get your mental health checked and improved.</p>
          <form onSubmit={handleSubmit} className='border border-green-100 sm:w-[450px] p-[30px] rounded-xl shadow-md'>
            <h1 className='text-center font-bold text-2xl mb-3'>UZIMA AI</h1>
            <div className='' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
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
                {loading ? 'Loading...' : 'Login'}
              </button>
              {error && <p className='text-red-500'>{error}</p>}
              <div className='mb-6 sm:flex block w-full justify-between items-center'>
                <a href="/" className='text-sm sm:text-start text-center underline text-blue-500'>Home</a>
                <p className='text-sm text-gray-500'>Don't have an account? <a href='/signup' className='underline text-green-500'>Sign Up</a></p>
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

export default Login