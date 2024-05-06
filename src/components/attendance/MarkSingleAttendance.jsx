import React, { useEffect, useState } from 'react'
import UserServices from '../../services/UserServices';
import AttendanceServices from '../../services/AttendanceServices';
import { useForm } from 'react-hook-form';

export default function MarkSingleAttendance() {
  const [dataUser, setUserData] = useState([]);
  const [dataAttendance, setAttendanceData] = useState([]);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const today = new Date().toISOString().split('T')[0];

  const present = true;

  const sendData = (d) => {
    dataUser.forEach((user) => {
      console.log("User ID: " + user.userId);
      dataAttendance.forEach((attendance) => {
        console.log("User ID from Attendance Data: " + attendance.userId);
        // Perform operations using user and attendance data here

        if ((user.userId === attendance.userId) && (user.userId === d.userId)) {

          if (attendance.attendanceDate === d.today) {
            console.log(attendance.attendanceDate + d.today)
            alert("Attendance is Already Marked");
          }
          else {
            AttendanceServices.addAttendance(d);
            console.log(d);
            alert("Added Successfully");
          }

        } else {
          AttendanceServices.addAttendance(d);
          console.log(d);
          alert("Added Successfully");
        }
      });
    });
    console.log(d + dataUser.userId)

  }

  const fetchData = async () => {
    try {
      const userData = await UserServices.viewUsers();
      const attendanceData = await AttendanceServices.viewAttendanceData();
      setUserData(userData.data.content);
      console.log(userData.data.content)
      setAttendanceData(attendanceData.data.content);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (

    <>
      <div className='container mt-3 py-4 px-4 divcard'>
        <h2>Mark Attendance</h2>
      </div>
      <br />

      <div className="signup-container">
        <form onSubmit={handleSubmit(sendData)}>
          <div className="form-row">
            <label>Attendance ID</label>
            <input type='text' {...register('attendanceId', { required: 'Attendance Id Is Required' })} placeholder={"AttendanceId"} /> <br />
            <label>User Id</label>
            <input type='text' {...register(`userId`, { required: 'User Id Is Required' })} placeholder={"User Id"} /> <br />
            <label>Status</label>
            {/* <input type='text' {...register('present', { required: 'Status Is Required' })} placeholder={"Status"} defaultValue={present}/> <br /> */}
            <select {...register('present', { required: 'Status Is Required' })} placeholder={"Status"}>
              <option value="">Select Status</option>
              <option value="true">Present</option>
              <option value="false">Absent</option>
            </select><br />
            <label>Attendance Date</label>
            <input type='text'{...register('attendanceDate', { required: 'attendanceDate Is Required' })} placeholder={"Attendance Date"} defaultValue={today} readOnly/> <br />
            <label></label>
            <input type='submit'></input>
          </div>
        </form>
      </div>
    </>
  )
}