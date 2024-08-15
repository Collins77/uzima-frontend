import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'Monday', mood: 0 },   // Sad
  { day: 'Tuesday', mood: 0 },  // Slightly Sad
  { day: 'Wednesday', mood: 0 }, // Neutral
  { day: 'Thursday', mood: 0 },  // Happy
  { day: 'Friday', mood: 0 },   // Extremely Happy
  { day: 'Saturday', mood: 0 },  // Happy
  { day: 'Sunday', mood: 0 },   // Neutral
];

const MoodChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis domain={[1, 5]} tickFormatter={(value) => {
          switch(value) {
            case 1: return 'Sad';
            case 2: return 'Slightly Sad';
            case 3: return 'Neutral';
            case 4: return 'Happy';
            case 5: return 'Extremely Happy';
            default: return value;
          }
        }} />
        <Tooltip formatter={(value) => {
          switch(value) {
            case 1: return 'Sad';
            case 2: return 'Slightly Sad';
            case 3: return 'Neutral';
            case 4: return 'Happy';
            case 5: return 'Extremely Happy';
            default: return value;
          }
        }} />
        <Legend />
        <Bar dataKey="mood" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MoodChart;
