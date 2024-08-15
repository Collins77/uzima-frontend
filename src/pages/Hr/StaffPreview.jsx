import React, { useState } from 'react'
import avatar from '../../assets/user_icon.png'
import MoodLineChart from '../../components/MoodLineChart';
import MoodLineChartMonths from '../../components/MoodLineChartMonths';

// Sample data
const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    values: [0, 3, 2, 1, 3], // Numerical values representing moods: 0: Sad, 1: Depressed, 2: Anxious, 3: Happy
};

const monthlyData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    values: [3, 2, 1, 0, 2, 3, 1, 2, 0, 3, 2, 1], // Numerical values representing moods for each month
};

const StaffPreview = () => {
    const [activeTab, setActiveTab] = useState('profile');

    const renderContent = () => {
        switch (activeTab) {
            case 'daily':
                return <MoodLineChart data={data} />;
            case 'monthly':
                return <MoodLineChartMonths data={monthlyData} />;
            case 'yearly':
                return <MoodLineChart data={data} />;
            default:
                return <MoodLineChart data={data} />;
        }
    };
    return (
        <div className='p-4'>
            <div className='flex mb-4 justify-between w-full border-b pb-2'>
                <div className='flex gap-2'>
                    <div>
                        <img src={avatar} alt="" className='w-[80px] h-[80px] rounded-full' />
                    </div>
                    <div className=''>
                        <div className='bg-green-500 w-[70px] text-center text-white rounded-md'>
                            <span>Active</span>
                        </div>
                        <div>
                            <h1 className='text-3xl font-bold'>Collins Muema</h1>
                            <p>Email: <span className='text-gray-500'>collins@cotek.com</span></p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <h1>Current Mental Status:</h1>
                    <div className='w-[80px] h-[80px] bg-green-500 text-white flex items-center justify-center rounded-full'>
                        <span>Happy</span>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-between'>
                <div className='w-[50%]'> 
                    <div className="mb-4 border-b pb-2">
                        <button
                            className={`px-4 py-2 ${activeTab === 'daily' ? 'bg-gray-400' : 'bg-gray-200'} rounded`}
                            onClick={() => setActiveTab('daily')}
                        >
                            Daily Report
                        </button>
                        <button
                            className={`ml-2 px-4 py-2 ${activeTab === 'monthly' ? 'bg-gray-300' : 'bg-gray-200'} rounded`}
                            onClick={() => setActiveTab('monthly')}
                        >
                            Monthly Report
                        </button>
                        <button
                            className={`ml-2 px-4 py-2 ${activeTab === 'yearly' ? 'bg-gray-300' : 'bg-gray-200'} rounded`}
                            onClick={() => setActiveTab('yearly')}
                        >
                            Yearly Report
                        </button>
                    </div>
                    <div className='w-[100%] h-[300px]'>
                        {renderContent()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StaffPreview