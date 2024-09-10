import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { FaCalendarAlt, FaClipboardList, FaArrowRight } from 'react-icons/fa';
import { HiOutlineEmojiHappy } from 'react-icons/hi';

// const SERVER = 'http://localhost:5000';
const SERVER = 'https://uzima-backe.vercel.app';

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);
  const [showModal, setShowModal] = useState(false);
  const [mood, setMood] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(false);
  const token = useSelector((state) => state.auth.token);
  const [showAppointmentsModal, setShowAppointmentsModal] = useState(false);
  const [showTipsModal, setShowTipsModal] = useState(false);
  const [showResourcesModal, setShowResourcesModal] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`${SERVER}/api/users/get-user/${user._id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      setCurrentUser(res.data.user);
    };

    fetchUser();
  }, [user._id, token]);

  useEffect(() => {
    const checkMoodForToday = () => {
      if (currentUser && currentUser.moods) {
        const today = new Date().toISOString().split('T')[0];
        const moodToday = currentUser.moods.find(
          (mood) => new Date(mood.date).toISOString().split('T')[0] === today
        );

        if (!moodToday) {
          setShowModal(true);
        }
      }
    };

    checkMoodForToday();
  }, [currentUser]);

  const handleMoodChange = (e) => {
    setMood(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${SERVER}/api/users/update-mood`, {
        userId: user._id,
        mood,
      });
      setShowModal(false);
    } catch (error) {
      console.error('Error submitting mood:', error);
    }
    setLoading(false);
  };

  return (
    <div className='p-4 w-full h-screen bg-gray-100'>
      {/* Header */}
      <div className='mb-6'>
        <h1 className='text-3xl font-bold text-blue-600'>Welcome, {currentUser?.firstName} 👋</h1>
        <p className='text-gray-600 text-sm'>Let's track your progress and boost your well-being!</p>
      </div>

      {/* Dashboard Main */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {/* Mood Tracking Section */}
        <div className='col-span-2 bg-white p-6 rounded-lg shadow-lg'>
          <h2 className='text-xl font-bold mb-4'>Today's Mood</h2>
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-4'>
              <HiOutlineEmojiHappy className='text-4xl text-yellow-500' />
              <p className='text-lg font-semibold text-gray-800'>How are you feeling today?</p>
            </div>
            <button 
              className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600' 
              onClick={() => setShowModal(true)}
            >
              Update Mood
            </button>
          </div>
        </div>

        {/* Quick Actions Section */}
        <div className='bg-white p-6 rounded-lg shadow-lg'>
          <h2 className='text-xl font-bold mb-4'>Quick Actions</h2>
          <div className='space-y-4'>
            <a href='/chat' className='flex items-center justify-between'>
              <div className='flex items-center space-x-3'>
                <FaClipboardList className='text-xl text-green-500' />
                <p className='text-gray-800'>Chat With Uzima</p>
              </div>
              <FaArrowRight className='text-gray-400' />
            </a>
            {/* <div className='flex items-center justify-between'>
              <div className='flex items-center space-x-3'>
                <FaCalendarAlt className='text-xl text-blue-500' />
                <p className='text-gray-800'>Upcoming Appointments</p>
              </div>
              <FaArrowRight className='text-gray-400' />
            </div> */}
            <div
              className='flex items-center justify-between cursor-pointer'
              onClick={() => setShowAppointmentsModal(true)}
            >
              <div className='flex items-center space-x-3'>
                <FaCalendarAlt className='text-xl text-blue-500' />
                <p className='text-gray-800'>Upcoming Appointments</p>
              </div>
              <FaArrowRight className='text-gray-400' />
            </div>
          </div>
        </div>
      </div>

      {/* Resources & Tips Section */}
      <div className='mt-6'>
        <div className='bg-white p-6 rounded-lg shadow-lg'>
          <h2 className='text-xl font-bold mb-4'>Resources & Tips</h2>
          <p className='text-gray-600'>
            Explore our resources to improve your well-being and stay motivated.
          </p>
          <div className='mt-4 flex space-x-4'>
            <button onClick={() => setShowResourcesModal(true)} className='px-4 py-2 bg-green-500 text-white rounded-md'>
              Explore Resources
            </button>
            <button onClick={() => setShowTipsModal(true)} className='px-4 py-2 bg-yellow-500 text-white rounded-md'>
              Daily Tips
            </button>
          </div>
        </div>
      </div>

      {/* Mood Modal */}
      {showModal && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <form onSubmit={handleSubmit} className='bg-white p-4 rounded-md w-fit'>
            <h2 className='text-lg font-bold mb-2'>How are you feeling today?</h2>
            <div className='grid grid-cols-3 gap-4'>
              <button value="very happy" onClick={handleMoodChange} className='flex items-center justify-center p-4 bg-green-300 rounded-md'>
                😄 Very Happy
              </button>
              <button value="happy" onClick={handleMoodChange} className='flex items-center justify-center p-4 bg-yellow-300 rounded-md'>
                😊 Happy
              </button>
              <button value="neutral" onClick={handleMoodChange} className='flex items-center justify-center p-4 bg-gray-300 rounded-md'>
                😐 Neutral
              </button>
              <button value="sad" onClick={handleMoodChange} className='flex items-center justify-center p-4 bg-orange-300 rounded-md'>
                😢 Sad
              </button>
              <button value="very sad" onClick={handleMoodChange} className='flex items-center justify-center p-4 bg-red-300 rounded-md'>
                😭 Very Sad
              </button>
            </div>
            <div className='flex justify-center gap-2 mt-4'>
              <button onClick={() => setShowModal(false)} className='px-4 py-2 bg-gray-200 rounded-md'>Cancel</button>
              <button type='submit' disabled={loading} className='px-4 py-2 bg-blue-500 text-white rounded-md'>
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      )}
      {showAppointmentsModal && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-4 rounded-md'>
            <h2 className='text-lg font-bold mb-2'>No Upcoming Appointments</h2>
            <button
              onClick={() => setShowAppointmentsModal(false)}
              className='px-4 py-2 bg-blue-500 text-white rounded-md'
            >
              Close
            </button>
          </div>
        </div>
      )}
      {showTipsModal && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-4 rounded-md'>
            <h2 className='text-lg font-bold mb-2'>This Feature will be available soon.</h2>
            <button
              onClick={() => setShowTipsModal(false)}
              className='px-4 py-2 bg-blue-500 text-white rounded-md'
            >
              Close
            </button>
          </div>
        </div>
      )}
      {showResourcesModal && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-4 rounded-md'>
            <h2 className='text-lg font-bold mb-2'>This Feature will be available soon.</h2>
            <button
              onClick={() => setShowResourcesModal(false)}
              className='px-4 py-2 bg-blue-500 text-white rounded-md'
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
