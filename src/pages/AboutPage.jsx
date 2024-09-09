import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const AboutPage = () => {
    // State to track which question is open
    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleQuestion = (index) => {
        // If clicked question is already open, close it. Otherwise, open the clicked one.
        setOpenQuestion(openQuestion === index ? null : index);
    };
  return (
    <div className='w-full'>
        <Navbar />
        <div className='p-[40px] flex justify-between'>
            <div className='w-[45%]'>
                {/* <h1 className='text-5xl font-bold mb-6'>About Uzima.</h1> */}
                <h1 className='text-6xl font-bold'>Too often, people don’t feel supported—because they aren’t</h1>
            </div>
            <div className='w-[50%]'>
                <h1 className='text-xl mb-6'>Uzima is a mental health app that offers effective, evidence-based tools to target stuck thinking – the underlying cause of anxiety, depression and many other mental health conditions. </h1>
                <p className='mb-10'>It’s funded and backed by Orygen, Australia’s leading not-for-profit youth mental health organisation, and philanthropic funders the Telstra Foundation and William Buckland Foundation. </p>
                <h1 className='text-xl font-bold mb-4'>The minds behind Uzima.</h1>
                <p className='mb-4'>Researchers and psychologists from Orygen’s technology division, Orygen Digital, have been working with young people to bring Mello to life since 2019. </p>
                <p className='mb-4'>Our psychologists identified a recurring problem - young people were getting stuck in negative thought spirals and needed extra help to break out of these spirals when they weren’t in clinical sessions.</p>
                <p className='mb-4'>We took this idea and worked with young people through focus groups, clinical trials, consultations and app testing to create what we now call Mello.</p>
            </div>
        </div>
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                        Explore Common Questions
                    </h2>
                </div>
                <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
                    {/* Question 1 */}
                    <div
                        className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
                        onClick={() => toggleQuestion(1)}
                    >
                        <button
                            type="button"
                            className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                        >
                            <span className="text-lg font-semibold text-black">How can I get started?</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className={`w-6 h-6 text-gray-400 transform ${openQuestion === 1 ? 'rotate-0' : 'rotate-180'}`}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                        <div className={`${openQuestion === 1 ? 'block' : 'hidden'} px-4 pb-5 sm:px-6 sm:pb-6`}>
                            <p>
                                Getting started is easy! Sign up for an account, and you'll have access to our
                                platform's features. No credit card required for the initial signup.
                            </p>
                        </div>
                    </div>

                    {/* Question 2 */}
                    <div
                        className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
                        onClick={() => toggleQuestion(2)}
                    >
                        <button
                            type="button"
                            className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                        >
                            <span className="text-lg font-semibold text-black">What is the pricing structure?</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className={`w-6 h-6 text-gray-400 transform ${openQuestion === 2 ? 'rotate-0' : 'rotate-180'}`}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                        <div className={`${openQuestion === 2 ? 'block' : 'hidden'} px-4 pb-5 sm:px-6 sm:pb-6`}>
                            <p>
                                Our pricing structure is flexible. We offer both free and paid plans. You can
                                choose the one that suits your needs and budget.
                            </p>
                        </div>
                    </div>

                    {/* Question 3 */}
                    <div
                        className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
                        onClick={() => toggleQuestion(3)}
                    >
                        <button
                            type="button"
                            className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                        >
                            <span className="text-lg font-semibold text-black">What kind of support do you provide?</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className={`w-6 h-6 text-gray-400 transform ${openQuestion === 3 ? 'rotate-0' : 'rotate-180'}`}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                        <div className={`${openQuestion === 3 ? 'block' : 'hidden'} px-4 pb-5 sm:px-6 sm:pb-6`}>
                            <p>
                                We offer comprehensive customer support. You can reach out to our support team
                                through various channels, including email, chat, and a knowledge base.
                            </p>
                        </div>
                    </div>

                    {/* Question 4 */}
                    <div
                        className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
                        onClick={() => toggleQuestion(4)}
                    >
                        <button
                            type="button"
                            className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                        >
                            <span className="text-lg font-semibold text-black">Can I cancel my subscription anytime?</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className={`w-6 h-6 text-gray-400 transform ${openQuestion === 4 ? 'rotate-0' : 'rotate-180'}`}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                        <div className={`${openQuestion === 4 ? 'block' : 'hidden'} px-4 pb-5 sm:px-6 sm:pb-6`}>
                            <p>
                                Yes, you can cancel your subscription at any time without any hidden fees. We
                                believe in providing a hassle-free experience for our users.
                            </p>
                        </div>
                    </div>
                </div>
                <p className="text-center text-gray-600 text-base mt-9">
                    Still have questions?
                    <span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:underline">Contact our support</span>
                </p>
            </div>
        </section>
    </div>
  )
}

export default AboutPage