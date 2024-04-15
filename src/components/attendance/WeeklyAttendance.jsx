import React, { useRef, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

const WeeklyAttendance = ({ attendanceData }) => {
    const chartRef = useRef(null);
    console.log("Weekly "+attendanceData)
    useEffect(() => {
        if (!chartRef.current || !attendanceData || attendanceData.length === 0) return;

        console.log("Weekly "+attendanceData)

        const ctx = chartRef.current.chart.ctx;
        const chartInstance = new chartRef.current.constructor(ctx, {
            type: 'bar',
            data: {
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
            },
            options: {
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
            }
        });

        return () => {
            chartInstance.destroy();
        };
    }, [attendanceData]);

    if (!attendanceData || attendanceData.length === 0) {
        return <div>No attendance data available</div>;
    }

    return (
        <div>
            <h2>Last Seven Days Attendance</h2>
            <Bar ref={chartRef} />
        </div>
    );
};

export default WeeklyAttendance;
