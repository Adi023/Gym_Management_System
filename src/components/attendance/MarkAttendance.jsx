import React, { useEffect, useState } from 'react';
import AttendanceServices from '../../services/AttendanceServices';
import { useForm } from 'react-hook-form';
import moment from 'moment';

export default function MarkAttendance() {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const [dataAttendance, setAttendanceData] = useState([]);

  const sendData = async ( d) => {
    console.log(d)
    try {
      if (!d.present) {
        alert("Attendance status needed Present to mark attendance for this user.");
      } else {
        // Update attendance for the user with the given userId
        await AttendanceServices.updateAttendance(d.userId, d);
        // alert("Attendance added successfully.");
        // Refresh attendance data
        fetchData();
      }
    } catch (error) {
      console.error('Error adding attendance:', error);
    }
  };

  const fetchData = async () => {
    try {
      const today = new Date().toISOString().split('T')[0];
      console.log(today);
      const attendanceData = await AttendanceServices.viewAttendaceByAttendanceDate(today);
      setAttendanceData(attendanceData.data.content);
      console.log(dataAttendance);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Function to set hidden input values
  const setFormData = (userId, present) => {
    setValue("userId", userId);
    setValue("present", present);
  };

  return (
    <>
      <div className='container mt-3 py-4 px-4 divcard'>
        <h2>Mark Attendance</h2>
      </div>
      <br />

      <div className='container py-4 px-4 divcard'>
        <form onSubmit={handleSubmit(sendData)} style={{ display: 'contents' }}>
          <table className="table table-hover text-center">
            <thead className="table-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Attendance Date</th>
                <th scope="col" >Attendance Time</th>
                <th scope="col">Status</th>
                <th scope="col"  >Mark</th>
              </tr>
            </thead>
            <tbody>
              {dataAttendance.map((d) => (
                <tr key={d.userId}>
                  <td>{d.userId}</td>
                  <td>{d.user_Id.name}</td>
                  <td>{d.attendanceDate}</td>
                  <td >
                  {d.present ? moment(d.updatedTimeStamp).format('h:mm:ss A') : "-"}</td>
                  <td>{d.present ? "Present" : "-"}</td>
                  <td >
                    {d.present ?  <i className="bi bi-check2-square text-success" style={{ fontSize: '24px' }}>Marked</i>:
                    <button
                      type="button"
                      className="btn btn-warning"
                      onClick={() => {
                        setFormData(d.userId, d.present=true);
                        sendData(d);
                      }}
                    >Mark</button>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Hidden input fields */}
          <input type="hidden" {...register("userId")} />
          <input type="hidden" {...register("present")} />
        </form>
      </div>
    </>
  );
}
