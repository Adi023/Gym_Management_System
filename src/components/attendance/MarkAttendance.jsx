// import React, { useEffect, useState } from 'react'
// import UserServices from '../../services/UserServices';
// import AttendanceServices from '../../services/AttendanceServices';
// import { useForm } from 'react-hook-form';

// export default function MarkAttendance() {
//   const [dataUser, setUserData] = useState([]);
//   const [dataAttendance, setAttendanceData] = useState([]);
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const today = new Date().toISOString().split('T')[0];

//   const present=true;

//   const sendData = (d) => {
//     if((dataUser.userId===dataAttendance.userId)&&(dataUser.userId===d.userId)){

//       if(dataAttendance.attendanceDate===d.today){
//         alert("Attendance is Already Marked");
//       }
//       else{
//         AttendanceServices.addAttendance(d);
//         console.log(d);
//         alert("Added Successfully");
//       }

//     }else{
//       AttendanceServices.addAttendance(d);
//       console.log(d);
//       alert("Added Successfully");
//     }
//   }

//   const fetchData = async () => {
//     try {
//       const userData = await UserServices.viewUsers();
//       const attendanceData =await AttendanceServices.viewAttendanceData();
//       setUserData(userData.data.content);
//       setAttendanceData(attendanceData.data.content);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const onSubmit=()=>{handleSubmit(sendData)};

//   useEffect(() => {
//     fetchData();
//   });
  
//   return (

//     <>
//       <div className='container mt-3 py-4 px-4 divcard'>
//         <h2>Mark Attendance</h2>
//       </div>
//       <br />

//       <div className='container py-4 px-4 divcard'>
//         <input></input>
//         <button className="btn btn-success  m-3">M</button>
//         <form onSubmit={handleSubmit(sendData)}>
//         <table className="table table-hover">
//           <thead className="table-dark">
//             <tr>
//               <th scope="col">ID</th>
//               <th scope="col">Name</th>
//               <th scope="col">Date</th>
//               <th scope="col">Status</th>
//               <th scope="col">Mark</th>
//               {/* <th scope="col">Edit</th> */}
//             </tr>
//           </thead>
//           <tbody>
//             {dataUser.map((d) => (
//               <tr key={d.userId}>
//                 <td  {...register('d.userId', { required: 'User Id Is Required' })} >{d.userId} </td>
//                 <td>{d.name}</td>
//                 <td  {...register({today}, { required: 'Date Is Required' })}>{today}</td>
//                 <td  {...register({present}, { required: 'Status Is Required' })}></td>
//                 <td> <button className="btn btn-success" onClick={onSubmit}>Mark</button>
//                 </td>
//                 {/* <td><button className="btn btn-success">Edit</button></td> */}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         </form>
//       </div>
//     </>
//   )
// }

import React, { useEffect, useState } from 'react'
import UserServices from '../../services/UserServices';
import AttendanceServices from '../../services/AttendanceServices';
import { useForm } from 'react-hook-form';

export default function MarkAttendance() {
  const [dataUser, setUserData] = useState([]);
  // const { register, handleSubmit, formState: { errors } } = useForm();
  const today = new Date().toISOString().split('T')[0];
  const [dataAttendance, setAttendanceData] = useState([]);
  const present = true;

  const sendData = async (d) => {
    try {
      const existingAttendance = dataAttendance.find(item => item.userId === d.userId && item.attendanceDate === today);
      if (existingAttendance) {
        alert("Attendance is already marked for this user today.");
      } else {
        await AttendanceServices.addAttendance(d);
        console.log(d);
        alert("Attendance added successfully.");
      }
    } catch (error) {
      console.error('Error adding attendance:', error);
    }
  }

  const fetchData = async () => {
    try {
      const userData = await UserServices.viewUsers();
            const attendanceData =await AttendanceServices.viewAttendanceData();
            setUserData(userData.data.content);
            setAttendanceData(attendanceData.data.content);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onSubmit = (data) => {
    // Call sendData for each row of dataUser
    dataUser.forEach(d => sendData({ ...data, userId: d.userId }));
  };

  return (
    <>
      <div className='container mt-3 py-4 px-4 divcard'>
        <h2>Mark Attendance</h2>
      </div>
      <br />

      <div className='container py-4 px-4 divcard'>
        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
        <input></input>
         <button className="btn btn-success  m-3">M</button>
          <table className="table table-hover">
            <thead className="table-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
                <th scope="col">Mark</th>
              </tr>
            </thead>
            <tbody>
              {dataUser.map((d) => (
                <tr key={d.userId}>
                  <td>{d.userId}</td>
                  <td>{d.name}</td>
                  <td>{today}</td>
                  <td></td>
                  <td>
                    <button className="btn btn-success" onClick={() => onSubmit(d)}>Mark</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        {/* </form> */}
      </div>
    </>
  )
}
