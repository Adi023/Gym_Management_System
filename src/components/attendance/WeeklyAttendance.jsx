import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as _Chart } from 'chart.js/auto';
import 'moment';
import 'chartjs-adapter-moment';
import ChartDataLabels from 'chartjs-plugin-datalabels';

const WeeklyAttendance = ({ attendanceData }) => {
    const dates = attendanceData.map(data => data[0]);
    const trueCounts = attendanceData.map(data => data[2]);
    const falseCounts = attendanceData.map(data => data[3]);

    if (!attendanceData || attendanceData.length === 0) {
        return <div>No attendance data available</div>;
    }

    const data = {
        labels: dates,
        datasets: [
            {
                label: 'Present',
                data: trueCounts,
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
            },
            {
                label: 'Absent',
                data: falseCounts,
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'day',
                    displayFormats: {
                        day: 'MMM DD' // Custom format for day labels
                    }
                },
                ticks: {
                    source: 'auto' // Automatic tick generation
                }
            },
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            datalabels: {
                display: true,
                color: 'black',
                formatter: (value, context) => {
                    return value; // Display the count value on the bars
                }
            }
        }
    };

    return (
        <div >
            <h1>Last 7 Days Attendance Data</h1>
            <Bar className="card border-dark  mb-3" data={data} options={options} plugins={[ChartDataLabels]} />
        </div>
    );
};

export default WeeklyAttendance;
