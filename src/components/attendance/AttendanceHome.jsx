import React, { useState, useEffect } from 'react';
import WeeklyAttendance from './WeeklyAttendance';
import AttendanceServices from '../../services/AttendanceServices'
import DigitalClock from '../Helper/DigitalClock';
import { useSelector } from 'react-redux';
import PieChart from './PieChart';

export default function AttendanceHome() {
    const [dateTime, setDateTime] = useState(new Date());
    const [attendanceData, setAttendanceData] = useState([]);
    const role = useSelector(state => state.role);

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
    // Find the maximum count among males, females, and others
    const malesCount = 10;
    const femalesCount = 15;
    const othersCount = 5;

    const maxCount = Math.max(malesCount, femalesCount, othersCount);

    // Calculate size ratios for each circle
    const maleRatio = malesCount / maxCount;
    const femaleRatio = femalesCount / maxCount;
    const othersRatio = othersCount / maxCount;
    return (
        <div className='container'>
            <br />
            <div className='container py-4 px-4 divcard' >

                <div className="card text-center d-flex flex-wrap justify-content-center align-items-center bg-dark text-white" style={{ flex: 1 }}>
                    <h5 className="card-title">Welcome {role}</h5>
                </div>

                <div style={{ flex: 1 }}>
                    <DigitalClock />
                </div>

            </div>
            <br />
            {/* <div className='container  divcard'>
                <div className=' container py-4 px-4 bg-dark d-flex justify-content-around' style={{ flex: 1 }}>
                        <div className="circle male" style={{ width: `${100 * maleRatio}px`, height: `${100 * maleRatio}px` }}>{malesCount}</div>
                         <div className="label text-white" style={{ width: `${100 * maleRatio}px`, height: `${100 * maleRatio}px` }}>Males</div>
                        <div className="circle female" style={{ width: `${80 * femaleRatio}px`, height: `${80 * femaleRatio}px` }}>{femalesCount}
                        <div className="label text-white" style={{ width: `${80 * femaleRatio}px`, height: `${80 * femaleRatio}px` }}>Females</div></div>
                        <div className="circle others" style={{ width: `${60 * othersRatio}px`, height: `${60 * othersRatio}px` }}>{othersCount}
                        <div className="label text-white" style={{ width: `${60 * othersRatio}px`, height: `${60 * othersRatio}px` }}>Others</div></div>
                </div>

                <div className="card text-center d-flex flex-wrap justify-content-center align-items-center bg-dark text-white" style={{ flex: 1 }}>
                    <h1>Testing</h1>
                </div>
            </div> */}
            <PieChart/>
            <br />

            <div className='container py-4 px-4 divcardProfile' style={{
                display: 'flex', flexWrap: 'wrap',

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
               
                    <div className='container py-4 px-4 '>
                        <WeeklyAttendance attendanceData={attendanceData} />
                    </div>
               
            ) : (<div className='divcardProfile'><h1 className='p-4'>No Chart Available</h1></div>)}
            <br />
        </div>
    )
}
