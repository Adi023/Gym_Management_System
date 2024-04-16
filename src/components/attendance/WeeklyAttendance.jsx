import React, { useRef, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import 'moment';
import 'chartjs-adapter-moment';


const WeeklyAttendance = ({ attendanceData }) => {
    // const chartRef = useRef();
    // console.log("Weekly vvvv "+ attendanceData)


    useEffect(() => {
        console.log("First useeffect")
    });
    
    // useEffect(() => {
    //     console.log("Weekly useeffect 1 "+attendanceData)
    //     if (!chartRef.current || !attendanceData || attendanceData.length === 0) return;

    //     console.log("Weekly useeffect 2 "+attendanceData)

    //     const ctx = chartRef.current.chart.ctx;
    //     const chartInstance = new chartRef.current.constructor(ctx, {
    //         type: 'bar',
    //         data: {
    //             labels: attendanceData.map(day => day.date),
    //             datasets: [{
    //                 label: 'Attendance Count',
    //                 backgroundColor: 'rgba(75,192,192,1)',
    //                 borderColor: 'rgba(0,0,0,1)',
    //                 borderWidth: 1,
    //                 hoverBackgroundColor: 'rgba(0,0,0,0.1)',
    //                 hoverBorderColor: 'rgba(0,0,0,1)',
    //                 data: attendanceData.map(day => day.count)
    //             }]
    //         },
    //         options: {
    //             scales: {
    //                 x: {
    //                     type: 'time',
    //                     time: {
    //                         unit: 'day',
    //                         displayFormats: {
    //                             day: 'MMM DD' // Custom format for day labels
    //                         }
    //                     },
    //                     ticks: {
    //                         source: 'auto' // Automatic tick generation
    //                     }
    //                 },
    //                 y: {
    //                     beginAtZero: true
    //                 }
    //             }
    //         }
    //     });
    //     console.log("Weekly aaaa "+ chartRef.data)
    //     return () => {
    //         chartInstance.destroy();
    //     };
    // }, [attendanceData]);



    if (!attendanceData || attendanceData.length === 0) {
        return <div>No attendance data available</div>;
    }

    return (
        <div>
            <h2>Last Seven Days Attendance</h2>
            {/* <Bar ref={chartRef} /> */}
            <Bar
    data={{
        labels: attendanceData.map(day => day.date),
        datasets: [{
            label: 'Attendance Count',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(0,0,0,0.1)',
            hoverBorderColor: 'rgba(0,0,0,1)',
            data: attendanceData.map(day => day.count)
        }]
    }}
    options={{
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
        }
    }}
/>
        </div>
    );
};

export default WeeklyAttendance;
