import React, { useState, useEffect } from 'react';
import WeeklyAttendance from './WeeklyAttendance';

export default function AttendanceHome() {
    const [dateTime, setDateTime] = useState(new Date());
    const [attendanceData, setAttendanceData] = useState();

    // console.log(attendanceData)
    useEffect(() => {
        const dummyData = [
            { date: '2024-04-08', count: 14 },
            { date: '2024-04-09', count: 22 },
            { date: '2024-04-10', count: 15 },
            { date: '2024-04-11', count: 25 },
            { date: '2024-04-12', count: 18 },
            { date: '2024-04-13', count: 30 },
            { date: '2024-04-14', count: 22 }
        ];

        setAttendanceData(dummyData);

        const interval = setInterval(() => {
            setDateTime(new Date());
        }, 1000);
        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <div className='container'>
            <h1>Attendance</h1>

            <div className='container py-4 px-4' style={{
                display: 'flex', flexWrap: 'wrap',
                background: '#ffffff',
                boxShadow: ' 20px 20px 60px #d9d9d9,-20px -20px 60px #ffffff'
            }}>

                <div className="card" style={{ flex: '1', margin: '10px', minWidth: '150px' }}>
                    <div className="card-body">
                        <h1 align="center">Today</h1>
                        <h2 align="center"> {dateTime.toLocaleDateString()}</h2>
                    </div>
                </div>

                <div className="card" style={{ flex: '1', margin: '10px', minWidth: '150px' }}>
                    <div className="card-body">
                        <h1 align="center">Current Time</h1>
                        <h2 align="center"> {dateTime.toLocaleTimeString()}</h2>
                    </div>
                </div>
            </div>
            <br />
            <div className='container py-4 px-4' style={{
                display: 'flex', flexWrap: 'wrap',
                background: '#ffffff',
                boxShadow: ' 20px 20px 60px #d9d9d9,-20px -20px 60px #ffffff'
            }}>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Aditya</td>
                            <td>Present</td>
                            <td>{dateTime.toLocaleDateString()}</td>
                            <td>{dateTime.toLocaleTimeString()}</td>
                        </tr>
                    </tbody>
                </table>
            </div> <br />

            {attendanceData && attendanceData.length > 0 && (
                <div className='container py-4 px-4' style={{
                    display: 'flex', flexWrap: 'wrap',
                    background: '#ffffff',
                    boxShadow: ' 20px 20px 60px #d9d9d9,-20px -20px 60px #ffffff'
                }}>
                    {attendanceData && attendanceData.length > 0 && (
                <div className='container py-4 px-4'>
                    <WeeklyAttendance attendanceData={attendanceData} />
                </div>
            )}
                </div>
            )}
        </div>
    )
}
