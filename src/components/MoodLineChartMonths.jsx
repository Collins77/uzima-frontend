import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const MoodLineChartMonths = ({ data }) => {
  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Months',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Mood',
        },
        ticks: {
          callback: function (value) {
            const moods = ['Sad', 'Depressed', 'Anxious', 'Happy'];
            return moods[value];
          },
          stepSize: 1,
          min: 0,
          max: 3,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Monthly Mood Tracker',
      },
    },
  };

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Mood',
        data: data.values,
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 1)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.1,
      },
    ],
  };

  return <Line options={options} data={chartData} />;
};

export default MoodLineChartMonths;
