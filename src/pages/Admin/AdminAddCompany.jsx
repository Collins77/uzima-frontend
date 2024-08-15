import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { registerCompanyUser } from '../../redux/authSlice';

const AdminAddCompany = () => {
  const { company } = useSelector(state => state.auth);
    const [singleStaff, setSingleStaff] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });
    const dispatch = useDispatch();
    const { loading, error } = useSelector(state => state.auth);

    const handleSingleChange = (e) => {
        const { name, value } = e.target;
        setSingleStaff(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle single staff form submission
    const handleSingleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerCompanyUser(singleStaff))
            .then(() => {
                setSingleStaff({
                    firstName: '',
                    lastName: '',
                    email: ''
                });
            })
            .catch(err => {
                console.error('Error registering staff:', err);
            });
    };
  return (
    <div className='p-4'>
            <div className='mb-10 border-b pb-2'>
                <h1 className='font-bold text-2xl'>Onboard Corporate to the system</h1>
                <p className='text-sm text-gray-500'>The corporate will receive an email that they have been onboarded.</p>
            </div>
            <div className='flex justify-center gap-4'>
                <form onSubmit={handleSingleSubmit} action="" className='w-[50%]'>
                    <div className='mb-4'>
                        <h1 className='text-xl font-semibold'>Company Details</h1>
                        <p className='text-sm text-gray-500'>Create an account on behalf of a company</p>
                    </div>
                    <div className='grid grid-cols-2 gap-2'>
                        <div>
                            <label htmlFor="">Company Name*</label>
                            <input type="text" placeholder='Company Name' name='firstName' value={singleStaff.firstName}
                                onChange={handleSingleChange} className='border border-black outline-none rounded-md p-2 my-3 w-full' />
                        </div>
                        <div>
                            <label htmlFor="">Email Address*</label>
                            <input type="text" placeholder='name@company.com' name='lastName' value={singleStaff.lastName}
                                onChange={handleSingleChange} className='border border-black outline-none rounded-md p-2 my-3 w-full' />
                        </div>
                    </div>
                    <div className='flex-col'>
                        <label htmlFor="">Address*</label><br />
                        <input type="email" placeholder='Nairobi, Utalii Lane' name='email' value={singleStaff.email}
                            onChange={handleSingleChange} className='border border-black outline-none rounded-md p-2 my-3 w-full' />
                    </div>
                    {/* <input type="submit" className='w-full text-center bg-green-400 py-3 rounded-md text-white hover:bg-green-700 cursor-pointer' /> */}
                    <button
                        type="submit"
                        className='w-full text-center bg-green-400 py-3 rounded-md text-white hover:bg-green-700 cursor-pointer'
                        disabled={loading}
                    >
                        {loading ? 'Registering...' : 'Register Company'}
                    </button>
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                </form>
                
            </div>
        </div>
  )
}

export default AdminAddCompany