import React, { useEffect, useState } from 'react'
import UserServices from '../../services/UserServices';
import AttendanceServices from '../../services/AttendanceServices';
import { useForm } from 'react-hook-form';

export default function MarkAttendance() {
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

  // const onSubmit=()=>{handleSubmit(sendData)};

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

// import React, { useEffect, useState } from 'react'
// import UserServices from '../../services/UserServices';
// import AttendanceServices from '../../services/AttendanceServices';
// import { useForm } from 'react-hook-form';

// export default function MarkAttendance() {
//   const [dataUser, setUserData] = useState([]);
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const today = new Date().toISOString().split('T')[0];
//   const [dataAttendance, setAttendanceData] = useState([]);
//   const present = "Present";

//   const sendData = async (d) => {
//     console.log(d)
//     try {
//       const existingAttendance = dataAttendance.find(item => item.userId === d.userId && item.attendanceDate === today);
//       if (existingAttendance) {
//         alert("Attendance is already marked for this user today.");
//       } else {
//         await AttendanceServices.addAttendance(d);
//         console.log(d);
//         alert("Attendance added successfully.");
//       }
//     } catch (error) {
//       console.error('Error adding attendance:', error);
//     }
//   }

//   const fetchData = async () => {
//     try {
//       const userData = await UserServices.viewUsers();
//             const attendanceData =await AttendanceServices.viewAttendanceData();
//             setUserData(userData.data.content);
//             setAttendanceData(attendanceData.data.content);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const onSubmit = (data) => {
//     // Call sendData for each row of dataUser
//     dataUser.forEach(d => sendData({ ...data, userId: d.userId }));
//   };

//   return (
//     <>
//       <div className='container mt-3 py-4 px-4 divcard'>
//         <h2>Mark Attendance</h2>
//       </div>
//       <br />

//       <div className='container py-4 px-4 divcard'>
//         <form onSubmit={handleSubmit(onSubmit)}>
//         <input></input>
//          <button className="btn btn-success  m-3">M</button>
//           <table className="table table-hover">
//             <thead className="table-dark">
//               <tr>
//                 <th scope="col">ID</th>
//                 <th scope="col">Name</th>
//                 <th scope="col">Date</th>
//                 <th scope="col">Status</th>
//                 <th scope="col">Mark</th>
//               </tr>
//             </thead>
//             <tbody>
//               {dataUser.map((d) => (
//                 <tr key={d.userId}>
//                   <td>{d.userId}</td>
//                   <td>{d.name}</td>
//                   <td>{today}</td>
//                   <td>{present}</td>
//                   <td>
//                     <button className="btn btn-success" onClick={() => onSubmit(d)}>Mark</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </form>
//       </div>
//     </>
//   )
// }