import React, { useState, useEffect } from 'react';
import WeeklyAttendance from './WeeklyAttendance';
import AttendanceServices from '../../services/AttendanceServices'
import DigitalClock from '../Helper/DigitalClock';

export default function AttendanceHome() {
    const [dateTime, setDateTime] = useState(new Date());
    const [attendanceData, setAttendanceData] = useState([]);
    useEffect(() => {
        console.log('Setting up interval...');
        const fetchDataAndTimeInterval = async () => {
            console.log('Fetching data...');
            await fetchData();

            const intervalId = setInterval(() => {
                // console.log('Updating dateTime...');
                setDateTime(prevDateTime => new Date());
            }, 1000);

            // return () => {
            //     console.log('Clearing interval...');
            //     clearInterval(intervalId);
            // };
        };

        fetchDataAndTimeInterval();
    }, []); // Ensure effect runs only once on mount
    // Dependency array is empty to ensure the effect runs only once on mount


    const fetchData = async () => {
        try {
            const responseData = await AttendanceServices.weeklyAttendanceCount();
            setAttendanceData(responseData.data);
            console.log(responseData.data)
        } catch (error) {
            console.error('Error fetching data:', error);
            // Optionally, set an error state here to provide feedback to the user
        }
    };
    // console.log(attendanceData)
    // useEffect(() => {
    //     // const dummyData = [
    //     //     { date: '2024-04-08', count: 14 },
    //     //     { date: '2024-04-09', count: 22 },
    //     //     { date: '2024-04-10', count: 15 },
    //     //     { date: '2024-04-11', count: 25 },
    //     //     { date: '2024-04-12', count: 18 },
    //     //     { date: '2024-04-13', count: 30 },
    //     //     { date: '2024-04-14', count: 22 }
    //     // ];
    //     // setAttendanceData(dummyData);
    //     const interval = setInterval(() => {
    //         setDateTime(new Date());
    //     }, 1000);
    //     return () => clearInterval(interval); // Cleanup interval on component unmount
    // }, []);

    return (
        <div className='container'>
            <h1>Welcome Admin</h1>

            <div className='container py-4 px-4' style={{
                display: 'flex', flexWrap: 'wrap',
                background: '#ffffff',
                boxShadow: ' 20px 20px 60px #d9d9d9,-20px -20px 60px #ffffff'
            }}>

                <div style={{ flex: '1' }}>
                    <div className="card text-white bg-dark mb-3">
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h5 className="card-title">Dark card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>

                <div style={{ flex: '1' }}>
                    <DigitalClock />
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
            {attendanceData && attendanceData.length > 0 ? (
                <div className='container py-4 px-4' style={{
                    display: 'flex', flexWrap: 'wrap',
                    background: '#ffffff',
                    boxShadow: ' 20px 20px 60px #d9d9d9,-20px -20px 60px #ffffff'
                }}>
                    <div className='container py-4 px-4'>
                        <WeeklyAttendance attendanceData={attendanceData} />
                    </div>
                </div>
            ) : (<h1>No Chart Available</h1>)}
            <br />
        </div>
    )
}
