import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import { useSelector } from 'react-redux';

// const SERVER = 'http://localhost:5000';
const SERVER = "https://uzima-backe.vercel.app";

// Mood Key with numbers
const moodKey = {
  0: 'very sad',
  1: 'sad',
  2: 'neutral',
  3: 'happy',
  4: 'very happy',
};

// Reverse mapping from mood strings to numbers
const moodMapping = {
  'very sad': 0,
  'sad': 1,
  'neutral': 2,
  'happy': 3,
  'very happy': 4,
};

const DashMood = () => {
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const [moodData, setMoodData] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${SERVER}/api/users/get-user/${user._id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const currentUser = res.data.user;
        const moods = currentUser.moods;
        const formattedData = formatMoodData(moods);
        setMoodData(formattedData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUser();
  }, [user._id, token]);

  const formatMoodData = (moods) => {
    // Format the data to match the requirements of the chart
    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const moodByDay = daysOfWeek.map(day => ({
      day,
      mood: 0, // Initialize with 0 or a default value
    }));

    moods.forEach(moodEntry => {
      const date = new Date(moodEntry.date);
      const dayOfWeek = daysOfWeek[date.getDay() - 1]; // Adjust for correct day
      const moodIndex = moodByDay.findIndex(day => day.day === dayOfWeek);
      if (moodIndex !== -1) {
        const moodNumber = moodMapping[moodEntry.mood] || 0; // Convert mood to number
        moodByDay[moodIndex].mood = moodNumber;
      }
    });

    return moodByDay;
  };



  return (
    <div className="py-4 px-2 w-full">
      <div className="flex flex-col justify-between w-full lg:flex-row">
        {/* Line Chart */}
        <div className="w-[100%]">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={moodData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis domain={[1, 4]} tickFormatter={(value) => moodKey[value] || 'Unknown'} />
              <Tooltip formatter={(value) => moodKey[value] || 'Unknown'} />
              <Line type="monotone" dataKey="mood" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        
        
      </div>
    </div>
  );
};

export default DashMood;
