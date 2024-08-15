import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { registerCompanyUser } from '../../redux/authSlice';

const RegisterStaff = () => {
    const { company } = useSelector(state => state.auth);
    const [singleStaff, setSingleStaff] = useState({
        firstName: '',
        lastName: '',
        email: '',
        companyId: company._id

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
                <h1 className='font-bold text-2xl'>Add Staff Members to the system</h1>
                <p className='text-sm text-gray-500'>Each staff member will receive an email with their credentials</p>
            </div>
            <div className='flex justify-between gap-4'>
                <form onSubmit={handleSingleSubmit} action="" className='w-[50%]'>
                    <div className='mb-4'>
                        <h1 className='text-xl font-semibold'>Single Upload Staff</h1>
                        <p className='text-sm text-gray-500'>Add Staff one by one</p>
                    </div>
                    <div className='grid grid-cols-2 gap-2'>
                        <div>
                            <label htmlFor="">First Name*</label>
                            <input type="text" placeholder='First Name' name='firstName' value={singleStaff.firstName}
                                onChange={handleSingleChange} className='border border-black outline-none rounded-md p-2 my-3 w-full' />
                        </div>
                        <div>
                            <label htmlFor="">Last Name*</label>
                            <input type="text" placeholder='Last Name' name='lastName' value={singleStaff.lastName}
                                onChange={handleSingleChange} className='border border-black outline-none rounded-md p-2 my-3 w-full' />
                        </div>
                    </div>
                    <div className='flex-col'>
                        <label htmlFor="">Email Address*</label><br />
                        <input type="email" placeholder='name@company.com' name='email' value={singleStaff.email}
                            onChange={handleSingleChange} className='border border-black outline-none rounded-md p-2 my-3 w-full' />
                    </div>
                    {/* <input type="submit" className='w-full text-center bg-green-400 py-3 rounded-md text-white hover:bg-green-700 cursor-pointer' /> */}
                    <button
                        type="submit"
                        className='w-full text-center bg-green-400 py-3 rounded-md text-white hover:bg-green-700 cursor-pointer'
                        disabled={loading}
                    >
                        {loading ? 'Registering...' : 'Register Staff'}
                    </button>
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                </form>
                <div className='w-[50%] p-2'>
                    <div className='mb-4'>
                        <h1 className='text-xl font-semibold'>Bulk Upload Staff</h1>
                        <p className='text-sm text-gray-500'>Download our excel template to upload the staff</p>
                    </div>
                    <div className='flex-col'>
                        <button className='bg-blue-600 w-full py-2 text-center text-white mb-4 rounded-md'>Download Template</button>
                        <h1 className='font-semibold mb-2'>Upload the file</h1>
                        <input type="file" className='mb-3' />
                        <button className='bg-green-600 w-full py-2 text-center text-white mb-4 rounded-md'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterStaff