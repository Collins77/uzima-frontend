import React, { useState } from 'react';
import MoodTracker from '../../components/MoodTracker';

const AnalyticsPage = () => {
  const [activeTab, setActiveTab] = useState('mood'); // Default active tab is "Mood Tracker"

  return (
    <div className='p-[40px] w-full h-[100vh]'>
      <div className='border-b border-gray-500 pb-4'>
        <h1 className='text-2xl font-bold'>Analytics</h1>
        <p className='text-gray-500 text-sm'>Check your progress towards a healthy mental state.</p>
      </div>

      {/* Tab Navigation (Navbar Style) */}
      <div className='flex space-x-8 mt-4 border-b border-gray-300'>
        <div
          className={`cursor-pointer pb-2 ${
            activeTab === 'mood' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('mood')}
        >
          Mood Tracker
        </div>
        <div
          className={`cursor-pointer pb-2 ${
            activeTab === 'behavior' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('behavior')}
        >
          Behavior
        </div>
        <div
          className={`cursor-pointer pb-2 ${
            activeTab === 'personality' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('personality')}
        >
          Personality
        </div>
      </div>

      {/* Tab Content */}
      <div className='mt-6'>
        {activeTab === 'mood' && (
          <div>
            {/* Content for Mood Tracker Tab */}
            <h2 className='text-xl font-semibold'>Mood Tracker</h2>
            <p className='text-gray-500 text-sm'>Track your daily moods and identify patterns over time.</p>
            <MoodTracker />
            {/* Include your Mood Tracker component or content here */}
          </div>
        )}
        {activeTab === 'behavior' && (
          <div>
            {/* Content for Behavior Tab */}
            <h2 className='text-xl font-semibold'>Behavior</h2>
            <p className='text-gray-500 text-sm'>Monitor your behavior patterns and how they affect your mood.</p>
            {/* Include your Behavior component or content here */}
          </div>
        )}
        {activeTab === 'personality' && (
          <div>
            {/* Content for Personality Tab */}
            <h2 className='text-xl font-semibold'>Personality</h2>
            <p className='text-gray-500 text-sm'>Understand your personality traits and how they influence your mental health.</p>
            {/* Include your Personality component or content here */}
          </div>
        )}
      </div>
    </div>
  );
}

export default AnalyticsPage;
