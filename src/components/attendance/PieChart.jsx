// src/PieChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = () => {
  const data = {
    labels: ['Male', 'Female', 'Others'],
    datasets: [
      {
        label: 'Gender Distribution',
        data: [55, 40, 5], // Adjust these values to represent your actual data
        backgroundColor: [
          'rgba(54, 162, 235, 0.6)', // Blue for Male
          'rgba(255, 99, 132, 0.6)', // Red for Female
          'rgba(153, 102, 255, 0.6)' // Purple for Others
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top', // Position the legend at the top of the chart
      },
      title: {
        display: true,
        text: 'Gender Distribution',
      },
    },
  };

  return <div className="chart-container divcard">
  <Pie data={data} options={options} />
</div>;
};

export default PieChart;
