import React from 'react'
import Navbar from '../components/Navbar'
// import logo1 from '../assets/CIC.png'
// import logo2 from '../assets/jub.png'
// import logo3 from '../assets/mad.png'
// import logo4 from '../assets/logo21.png'
// import logo5 from '../assets/logo22.png'
// import logo6 from '../assets/logo23.png'
// import logo7 from '../assets/logo24.png'
import free from '../assets/1710414.png'

const CompanyPricing = () => {
  return (
    <div>
        <Navbar />
        <div className='px-[40px] relative bg-white flex flex-col items-center justify-center w-full h-[80vh]'>
          <div className='flex flex-col items-center justify-center w-[60%] text-center mb-4'>
            <h1 className='text-black font-bold text-5xl mb-3'>Scale your outbound with our flexible, risk-free pricing</h1>
            <p className='text-lg text-gray-600'>Access 50+ data providers, web scraping, and AI message drafting in one place with Clay credits - no subscriptions needed.</p>
          </div>
          <div className='flex flex-col items-center justify-center gap-[10px]'>
            {/* <h1 className='font-extrabold'>TRUSTED BY 20+ LEADING TEAMS INCLUDING:</h1> */}
            {/* <div className='flex items-center justify-center gap-10 flex-wrap w-[70%]'>
                <div>
                    <img src={logo1} alt="" className='w-12 h-12' />
                </div>
                <div>
                    <img src={logo2} alt="" className='w-12 h-12' />
                </div>
                <div>
                    <img src={logo3} alt="" className='w-12 h-12' />
                </div>
                <div>
                    <img src={logo4} alt="" className='w-12 h-12' />
                </div>
                <div>
                    <img src={logo5} alt="" className='w-12 h-12' />
                </div>
                <div>
                    <img src={logo6} alt="" className='w-12 h-12' />
                </div>
                <div>
                    <img src={logo7} alt="" className='w-12 h-12' />
                </div> 
            </div> */}
          </div>
        </div>
        <div className='w-full bg-white px-[40px] mb-5'>
            <div className='border border-gray-400 w-full'>
                <div className='border-b p-2 border-gray-400'>
                    <p className='text-gray-500'>Our Pricing Plans</p>
                </div>
                <div className='flex'>
                    <div className='flex flex-col items-center border border-gray-400'>
                        <div className='flex flex-col h-[200px] gap-[10px] items-center border-b border-gray-400 p-[20px] bg-red-100'>
                            <img src={free} alt="" className='w-10 h-10' />
                            <h1 className='font-bold text-xl'>Free</h1>
                            <p className='font-semibold text-gray-500 text-center'>Explore the product and integrations available</p>
                        </div>
                        <div className='flex flex-col h-[400px] items-center w-full mt-4 border-b border-gray-400'>
                            <h1 className='font-bold text-3xl mb-2'>KES 0</h1>
                            <p className='text-gray-400 mb-2'>/month (billed monthly)</p>
                            <button className='bg-black text-white px-2 py-1 rounded-sm'>Start 7-day trial</button>
                            <div className='mt-4 flex flex-col mb-4 p-[20px]'>
                                <p className='text-gray-600'>✔️ Limited Access to Uzima</p>
                                <p className='text-gray-600'>✔️ Limited access to counseling content</p>
                            </div>
                        </div>
                        <div className='text-center p-[20px]'>
                            <p className='text-gray-500'>Good for people trying out Uzima for the first time. </p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center border border-gray-400'>
                        <div className='flex flex-col h-[200px] gap-[10px] items-center border-b border-gray-400 p-[20px] bg-yellow-100'>
                            <img src={free} alt="" className='w-10 h-10' />
                            <h1 className='font-bold text-xl'>Daily Wellness</h1>
                            <p className='font-semibold text-gray-500 text-center'>Explore the product and integrations available</p>
                        </div>
                        <div className='flex flex-col h-[400px] items-center w-full mt-4 border-b border-gray-400'>
                            <h1 className='font-bold text-3xl mb-2'>KES 250</h1>
                            <p className='text-gray-400 mb-2'>/month (billed monthly)</p>
                            <button className='bg-black text-white px-2 py-1 rounded-sm'>Start 7-day trial</button>
                            <div className='mt-4 flex flex-col mb-4 p-[20px]'>
                                <p className='text-gray-600'>✔️ Full Access to Uzima for 24 hours</p>
                                <p className='text-gray-600'>✔️ Full access to counseling 24 hours</p>
                            </div>
                        </div>
                        <div className='text-center p-[20px]'>
                            {/* <p className='text-gray-500'>Good for people trying out Uzima for the first time. </p> */}
                        </div>
                    </div>
                    <div className='flex flex-col items-center border border-gray-400'>
                        <div className='flex flex-col gap-[10px] h-[200px] items-center border-b border-gray-400 p-[20px] bg-green-100'>
                            <img src={free} alt="" className='w-10 h-10' />
                            <h1 className='font-bold text-xl'>Monthly Wellness</h1>
                            <p className='font-semibold text-gray-500 text-center'>Explore the product and integrations available</p>
                        </div>
                        <div className='flex flex-col h-[400px] items-center w-full mt-4 border-b border-gray-400'>
                            <h1 className='font-bold text-3xl mb-2'>KES 3,000</h1>
                            <p className='text-gray-400 mb-2'>/month (billed monthly)</p>
                            <button className='bg-black text-white px-2 py-1 rounded-sm'>Start 7-day trial</button>
                            <div className='mt-4 flex flex-col mb-4 p-[20px]'>
                                <p className='text-gray-600'>✔️ Full access to Uzima AI</p>
                                <p className='text-gray-600'>✔️ Access to mental health resources (e.g., articles)</p>
                            </div>
                        </div>
                        <div className='text-center p-[20px]'>
                            {/* <p className='text-gray-500'>Good for people trying out Uzima for the first time. </p> */}
                        </div>
                    </div>
                    <div className='flex flex-col items-center border border-gray-400'>
                        <div className='flex flex-col gap-[10px] h-[200px] items-center border-b border-gray-400 p-[20px] bg-orange-100'>
                            <img src={free} alt="" className='w-10 h-10' />
                            <h1 className='font-bold text-xl'>Annual Wellness</h1>
                            <p className='font-semibold text-gray-500 text-center'>Explore the product and integrations available</p>
                        </div>
                        <div className='flex flex-col h-[400px] items-center w-full mt-4 border-b border-gray-400'>
                            <h1 className='font-bold text-3xl mb-2'>KES 48,000</h1>
                            <p className='text-gray-400 mb-2'>/year per employee </p>
                            <button className='bg-black text-white px-2 py-1 rounded-sm'>Start 7-day trial</button>
                            <div className='mt-4 flex flex-col mb-4 p-[20px]'>
                                <p className='text-gray-600'>✔️ Full access to Uzima AI</p>
                                <p className='text-gray-600'>✔️ Exclusive access to annual mental health workshops or webinars</p>
                                <p className='text-gray-600'>✔️ Option to gift a subscription to a friend or family member</p>
                            </div>
                        </div>
                        <div className='text-center p-[20px]'>
                            {/* <p className='text-gray-500'>Good for people trying out Uzima for the first time. </p> */}
                        </div>
                    </div>
                    <div className='flex flex-col items-center border border-gray-400'>
                        <div className='flex flex-col gap-[10px] items-center border-b h-[200px] border-gray-400 p-[20px] bg-blue-100'>
                            <img src={free} alt="" className='w-10 h-10' />
                            <h1 className='font-bold text-xl'>Corporate Wellness</h1>
                            <p className='font-semibold text-gray-500 text-center'>Explore the product and integrations available</p>
                        </div>
                        <div className='flex flex-col h-[400px] items-center w-full mt-4 border-b border-gray-400'>
                            <h1 className='font-bold text-3xl mb-2'>KES 5,000</h1>
                            <p className='text-gray-400 mb-2'>/employee (billed monthly)</p>
                            <button className='bg-black text-white px-2 py-1 rounded-sm'>Start 7-day trial</button>
                            <div className='mt-1 flex flex-col mb-4 p-[20px]'>
                                <p className='text-gray-600 text-sm'>✔️ Full Access to AI features for all employees </p>
                                <p className='text-gray-600 text-sm'>✔️ Dedicated account manager & priority support for the company.</p>
                                <p className='text-gray-600 text-sm'>✔️ Quarterly mental health workshops and webinars.</p>
                                <p className='text-gray-600 text-sm'>✔️ Customizable mental health programs and resources</p>
                                <p className='text-gray-600 text-sm'>✔️ Detailed usage reports and analytics.</p>
                                <p className='text-gray-600 text-sm'>✔️ ERP integration.</p>
                            </div>
                        </div>
                        <div className='text-center p-[20px]'>
                            {/* <p className='text-gray-500'>Good for people trying out Uzima for the first time. </p> */}
                        </div>
                    </div>     
                </div>
            </div>
        </div>
        <div className='border border-t p-[20px] text-center'>
            <p>Copyright Uzima AI</p>
        </div>
    </div>
  )
}

export default CompanyPricing