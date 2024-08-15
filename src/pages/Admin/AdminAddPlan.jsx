import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { registerCompanyUser } from '../../redux/authSlice';

const AdminAddPlan = () => {
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
                <h1 className='font-bold text-2xl'>Create Subscription Plan</h1>
                <p className='text-sm text-gray-500'>Provide details to create a subscription plan.</p>
            </div>
            <div className='flex justify-center gap-4'>
                <form onSubmit={handleSingleSubmit} action="" className='w-[50%]'>
                    <div className='mb-4'>
                        <h1 className='text-xl font-semibold'>Plan Details</h1>
                        <p className='text-sm text-gray-500'>Provide all required details</p>
                    </div>
                    <div className='grid grid-cols-2 gap-2'>
                        <div>
                            <label htmlFor="">Plan Name*</label>
                            <input type="text" placeholder='Student, Corporate etc' name='firstName' value={singleStaff.firstName}
                                onChange={handleSingleChange} className='border border-black outline-none rounded-md p-2 my-3 w-full' />
                        </div>
                        <div>
                            <label htmlFor="">Plan Amount*</label>
                            <input type="number" placeholder='Amount in KES' name='lastName' value={singleStaff.lastName}
                                onChange={handleSingleChange} className='border border-black outline-none rounded-md p-2 my-3 w-full' />
                        </div>
                        <div>
                            <label htmlFor="">Duration(days)*</label>
                            <input type="text" placeholder='1' name='lastName' value={singleStaff.lastName}
                                onChange={handleSingleChange} className='border border-black outline-none rounded-md p-2 my-3 w-full' />
                        </div>
                        <div>
                            <label htmlFor="">Plan Type*</label>
                            {/* <input type="text" placeholder='+2547********' name='lastName' value={singleStaff.lastName}
                                onChange={handleSingleChange} className='border border-black outline-none rounded-md p-2 my-3 w-full' /> */}
                            <select className='border border-black outline-none rounded-md p-2 my-3 w-full' name="" id="">
                              <option value="">User</option>
                              <option value="">Corporate</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex-col'>
                        <label htmlFor="">Plan Description*</label><br />
                        {/* <input type="email" placeholder='Nairobi, Utalii Lane' name='email' value={singleStaff.email}
                            onChange={handleSingleChange} className='border border-black outline-none rounded-md p-2 my-3 w-full' /> */}
                        <textarea name="about" id="" placeholder='Counsellor Bio' className='border border-black outline-none rounded-md p-2 my-3 w-full'></textarea>
                    </div>
                    {/* <input type="submit" className='w-full text-center bg-green-400 py-3 rounded-md text-white hover:bg-green-700 cursor-pointer' /> */}
                    <button
                        type="submit"
                        className='w-full text-center bg-green-400 py-3 rounded-md text-white hover:bg-green-700 cursor-pointer'
                        disabled={loading}
                    >
                        {loading ? 'Creating...' : 'Create Plan'}
                    </button>
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                </form>
                
            </div>
        </div>
  )
}

export default AdminAddPlan