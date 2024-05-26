// src/PieChart.js
import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import UserServices from '../../services/UserServices'


export default function PieChart () {
  const [paidUsers, setPaidUsers] = useState();
  const [unPaidUser, setUnPaidUser] = useState();

  const fetchData = async () => {
    try {
      const paid = await UserServices.getPaidUsers(0, 5, "userId", "desc");
      const unPaid = await UserServices.getUnpaidUsers(0, 5, "userId", "desc");
       setPaidUsers(paid.data.totalElements);
       setUnPaidUser(unPaid.data.totalElements);
      // console.log("Paid Users:", paid.data.totalElements +" " +"unPaidUser : ",unPaid.data.totalElements);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(()=>{
    fetchData();

  },[])

  const data = {
    labels: ['Paid Users', 'Unpaid Users'],
    datasets: [
      {
        label: 'Number Of Users',
        data: [paidUsers, unPaidUser], // Adjust these values to represent your actual data
        backgroundColor: [
          'rgba(54, 162, 235, 0.6)', // Blue for Male
          'rgba(255, 99, 132, 0.6)', // Red for Female
          // 'rgba(153, 102, 255, 0.6)' // Purple for Others
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          // 'rgba(153, 102, 255, 1)'
          
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
        text: 'Payment Status',
      },
    },
  };

  return <div className="chart-container ">
    <Pie data={data} options={options} />
  </div>;
};


