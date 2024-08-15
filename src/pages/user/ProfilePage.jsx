import React, { useState } from 'react'
import DetailsForm from '../../components/DetailsForm';
import { useSelector } from 'react-redux';

const ProfilePage = () => {
    const [activeTab, setActiveTab] = useState('details');
    const user = useSelector((state) => state.auth.user);
   

    const renderContent = () => {
        switch (activeTab) {
            case 'details':
                return <div className='w-full'><DetailsForm user={user} /></div>;
            case 'security':
                return <div>Security Content</div>;
            default:
                return null;
        }
    };

    return (
        <div className='p-[40px] w-full h-[100vh] flex justify-center'>
            <div className='w-full'>
                <h1 className='mb-4 text-xl font-bold'>My Account</h1>
                <div className='w-full'>
                    <div className='flex mb-4'>
                        <button
                            className={`mr-4 p-2 ${activeTab === 'details' ? 'font-bold border-b-2 border-green-500' : 'text-gray-500'}`}
                            onClick={() => setActiveTab('details')}
                        >
                            My Details
                        </button>
                        <button
                            className={`p-2 ${activeTab === 'security' ? 'font-bold border-b-2 border-green-500' : 'text-gray-500'}`}
                            onClick={() => setActiveTab('security')}
                        >
                            Security
                        </button>
                    </div>
                    <div className='w-full'>
                        {renderContent()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage