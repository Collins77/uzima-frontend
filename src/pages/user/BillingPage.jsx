import React, { useState } from 'react'
import free from '../../assets/1710414.png'
import { RxCross2 } from 'react-icons/rx';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const BillingPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const user = useSelector((state) => state.auth.user);
    const [currentPlanIndex, setCurrentPlanIndex] = useState(0);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    const plans = [
        {
            title: "Corporate Plan",
            price: "KES 4,000",
            img: free,
            id:12345,
            features: [
                "✔️ Limited Access to Uzima",
                "✔️ Limited access to counseling content"
            ]
        },
        {
            title: "Corporate Plan",
            price: "KES 6,000",
            img: free,
            id:12345,
            features: [
                "✔️ Limited Access to Uzima",
                "✔️ Limited access to counseling content"
            ]
        },
        {
            title: "Corporate Plan",
            price: "KES 8,000",
            img: free,
            id:12345,
            features: [
                "✔️ Limited Access to Uzima",
                "✔️ Limited access to counseling content"
            ]
        }
    ];

    const nextPlan = () => {
        setCurrentPlanIndex((prevIndex) => (prevIndex + 1) % plans.length);
    };

    const prevPlan = () => {
        setCurrentPlanIndex((prevIndex) => (prevIndex - 1 + plans.length) % plans.length);
    };

    return (
        <div className='p-[40px] w-full h-[100vh] flex justify-center'>
            <div className='w-full'>
                <h1 className='mb-4 text-xl font-bold'>Plans & Billing</h1>
                <div className='border p-4 mb-10 border-gray-100 rounded-md shadow-md w-full'>
                    <div className='w-full flex border-b mb-3 pb-3 items-center justify-between'>
                        <h1>Free Trial</h1>
                        <button onClick={toggleModal} className=' bg-blue-500 text-white rounded-sm px-2 py-1'>Change Plan</button>
                    </div>
                    <div className='w-full mb-2 bg-black rounded-md h-[10px]'>
                        <span></span>
                    </div>
                    <div className=''>
                        <p className='text-[12px] text-gray-500'>Limited to 5 prompts per day</p>
                    </div>
                </div>
                <div className='mb-10'>
                    <p className='text-gray-700'>The next payment of <span className='font-bold'>KES 0</span> will be charged on <span className='font-bold'>Aug 23, 2024</span></p>
                    <p className='text-gray-700'>The billing email is {user.email}</p>
                </div>
                <div className='w-full'>
                    <h1 className='text-sm text-gray-500'>INVOICES & RECEIPTS</h1>
                    <table className='w-full'>
                        <tr className='border-b border-gray-100'>
                            <th className='px-4 py-2 text-gray-500 text-sm'>DATE</th>
                            <th className='px-4 py-2 text-gray-500 text-sm'>AMOUNT</th>
                            <th className='px-4 py-2 text-gray-500 text-sm'>STATUS</th>
                        </tr>
                        <tr className='border-b border-gray-100'>
                            <p className='py-2 text-gray-400 text-sm'>No invoices or receipts found...</p>
                        </tr>
                    </table>
                </div>
            </div>
            {isModalOpen && (
                <div className='fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center'>
                    <div className='bg-white p-6 rounded-md shadow-lg w-[90%] md:w-[50%] relative'>
                        <h2 className='text-xl font-bold mb-4'>Change Your Plan</h2>
                        <div className='mb-4 flex items-center justify-between'>
                            <button onClick={prevPlan} className='text-gray-500 px-2 py-1'>&lt;</button>
                            <div className='flex flex-col items-center'>
                                <img src={plans[currentPlanIndex].img} alt="" className='w-10 h-10' />
                                <h1 className='font-bold text-xl'>{plans[currentPlanIndex].title}</h1>
                                <p className='font-semibold text-gray-500 text-center'>{plans[currentPlanIndex].features.join(' • ')}</p>
                                <h1 className='font-bold text-3xl mt-4'>{plans[currentPlanIndex].price}</h1>
                                <p className='text-gray-400 mb-2'>/employee (billed monthly)</p>
                                {/* <Link to={`/chosenplan`} className='bg-black text-white px-2 py-1 rounded-sm'>Subscribe</Link> */}
                                <Link
                                    to={{
                                        pathname: `/chosenplan`,
                                    }}
                                    state={{ plan: plans[currentPlanIndex] }}
                                    className='bg-black text-white px-2 py-1 rounded-sm'
                                >Subscribe</Link>
                            </div>
                            <button onClick={nextPlan} className='text-gray-500 px-2 py-1'>&gt;</button>
                        </div>
                        <div onClick={toggleModal} className='absolute top-5 right-5 cursor-pointer'>
                            <RxCross2 />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default BillingPage