import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { registerCompanyUser, registerCounsellor } from '../../redux/authSlice';

const AdminAddCounsellor = () => {
    const { company } = useSelector(state => state.auth);
    const [singleCounsellor, setSingleCounsellor] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        bio: '',
        specialty: ''
    });
    const dispatch = useDispatch();
    const { loading, error } = useSelector(state => state.auth);

    const handleSingleChange = (e) => {
        const { name, value } = e.target;
        setSingleCounsellor(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle single staff form submission
    const handleSingleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerCounsellor(singleCounsellor))
            .then(() => {
                setSingleCounsellor({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: '',
                    bio: '',
                    specialty: ''
                });
            })
            .catch(err => {
                console.error('Error registering counsellor:', err);
            });
    };
    return (
        <div className='p-4'>
            <div className='mb-10 border-b pb-2'>
                <h1 className='font-bold text-2xl'>Onboard Counsellors to the system</h1>
                <p className='text-sm text-gray-500'>The Counsellors will not receive any credentials, instead their details will be shared with users.</p>
            </div>
            <div className='flex justify-center gap-4'>
                <form onSubmit={handleSingleSubmit} action="" className='w-[50%]'>
                    <div className='mb-4'>
                        <h1 className='text-xl font-semibold'>Counsellor Details</h1>
                        <p className='text-sm text-gray-500'>Credentials and Details</p>
                    </div>
                    <div className='grid grid-cols-2 gap-2'>
                        <div>
                            <label htmlFor="">First Name*</label>
                            <input type="text" placeholder='First Name' name='firstName' value={singleCounsellor.firstName}
                                onChange={handleSingleChange} className='border border-black outline-none rounded-md p-2 my-3 w-full' />
                        </div>
                        <div>
                            <label htmlFor="">Last Name*</label>
                            <input type="text" placeholder='Last Name' name='lastName' value={singleCounsellor.lastName}
                                onChange={handleSingleChange} className='border border-black outline-none rounded-md p-2 my-3 w-full' />
                        </div>
                        <div>
                            <label htmlFor="">Email Address*</label>
                            <input type="email" placeholder='name@company.com' name='email' value={singleCounsellor.email}
                                onChange={handleSingleChange} className='border border-black outline-none rounded-md p-2 my-3 w-full' />
                        </div>
                        <div>
                            <label htmlFor="">Phone Number*</label>
                            <input type="text" placeholder='+2547********' name='phoneNumber' value={singleCounsellor.phoneNumber}
                                onChange={handleSingleChange} className='border border-black outline-none rounded-md p-2 my-3 w-full' />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Specialization*</label>
                        <input type="text" onChange={handleSingleChange} name='specialty' value={singleCounsellor.specialty} placeholder='Addictions' className='border border-black outline-none rounded-md p-2 my-3 w-full' />
                    </div>
                    <div className='flex-col'>
                        <label htmlFor="">About*</label><br />
                        {/* <input type="email" placeholder='Nairobi, Utalii Lane' name='email' value={singleStaff.email}
                            onChange={handleSingleChange} className='border border-black outline-none rounded-md p-2 my-3 w-full' /> */}
                        <textarea onChange={handleSingleChange} name="bio" value={singleCounsellor.bio} id="" placeholder='Counsellor Bio' className='border border-black outline-none rounded-md p-2 my-3 w-full'></textarea>
                    </div>
                    {/* <input type="submit" className='w-full text-center bg-green-400 py-3 rounded-md text-white hover:bg-green-700 cursor-pointer' /> */}
                    <button
                        type="submit"
                        className='w-full text-center bg-green-400 py-3 rounded-md text-white hover:bg-green-700 cursor-pointer'
                        disabled={loading}
                    >
                        {loading ? 'Registering...' : 'Onboard Counsellor'}
                    </button>
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                </form>

            </div>
        </div>
    )
}

export default AdminAddCounsellor