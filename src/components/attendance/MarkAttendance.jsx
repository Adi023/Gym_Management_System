import React, { useEffect, useState } from 'react';
import AttendanceServices from '../../services/AttendanceServices';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import PaginationBar from '../PaginationBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch, faInfoCircle, faSpinner, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function MarkAttendance() {

  const [pageSize, setPageSize] = useState('5');
  const [sortBy, setSortBy] = useState('attendanceId');
  const [sortDir, setSortDir] = useState('desc');
  const { register, handleSubmit, setValue } = useForm();
  const [dataAttendance, setAttendanceData] = useState({
    content: [],
    totalPages: '',
    totalElements: '',
    pageSize: '',
    lastPage: false,
    pageNumber: 0
  });

  const [searchTerm, setSearchTerm] = useState("")
  const sendData = async (d) => {
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

  // Get current date in format YYYY-MM-DD
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
  const day = currentDate.getDate().toString().padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;
  console.log(formattedDate); // Output: 2024-04-27

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const attendanceData = await AttendanceServices.viewAttendaceByAttendanceDate(formattedDate, 0, 5, "attendanceId", "desc");
      console.log(attendanceData);
      setAttendanceData(attendanceData.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePageChange = async (pageNumber = 0) => {
    try {
      console.log(pageSize + " Pagesize")
      const responseData = await AttendanceServices.viewAttendaceByAttendanceDate(formattedDate, pageNumber, pageSize, sortBy, sortDir);
      console.log(responseData);
      setAttendanceData(responseData.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSortChange = (e) => {
    setSortDir(e); // Update the sorting direction
    handlePageChange();
  }

  const handleSortBy = (e) => {
    setSortBy(e);
    handlePageChange();
  }

  // Function to set hidden input values
  const setFormData = (userId, present) => {
    setValue("userId", userId);
    setValue("present", present);
  };

  return (
    <div className='container'>
      <br />
      <div className="row m-0 p-0 ">
        <h1>Mark Attendance</h1>
      </div>
      <br />
      {dataAttendance.totalPages !== 0 ? (
        // scope start 1
        <>
          <div className="row m-0 p-0 divcardProfile">

            <div className="col  col-md-4 ms-auto m-0 p-0" style={{ width: '550px' }}>
              <label htmlFor="searchInput" className="col-auto">Search:</label>
              <input type="text" id="searchInput" className="col col-auto  py-0 pl-1"
                style={{ width: '280px', marginRight: '15px' }}
                placeholder="Enter Id, User Id, or Attendance Date"
                onChange={event => { setSearchTerm(event.target.value) }} />

              <label htmlFor="pageSizeInput" className=' col-auto' >Page Size:</label>
              <input type="number" id="pageSizeInput" className=" col col-auto m-0  py-0 pl-1 "
                style={{ width: '100px' }} value={pageSize} placeholder="Enter page size"
                onChange={(e) => {
                  const pageSize = parseInt(e.target.value.trim());
                  if (pageSize > 0 && pageSize <= dataAttendance.totalElements) {
                    setPageSize(pageSize);
                  } else {
                    if (pageSize === ' ') {
                      setPageSize('5');
                    } else {
                      setPageSize('5');
                      alert("Enter Valid Page Size");
                    }
                  }
                }}
              />
            </div>

            <div className="col-auto m-0 p-0" >
              <button className="btn m-0 p-0" onClick={() => handleSortChange('asc')}>
                <i className="bi bi-sort-up fa-2x"></i>
              </button>
              <button className="btn m-0 p-0" onClick={() => handleSortChange('desc')}>
                <i className="bi bi-sort-down-alt fa-2x"></i>
              </button>
            </div>
          </div><br />

          <form onSubmit={handleSubmit(sendData)} style={{ display: 'contents' }}>
            <table className="table table-hover text-center divcardProfile">
              <thead className="table-dark">
                <tr>
                  <th scope="col" onClick={() => handleSortBy('userId')}>User Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Attendance Date</th>
                  <th scope="col" onClick={() => handleSortBy('updatedTimeStamp')}>Attendance Time</th>
                  <th scope="col">Status</th>
                  <th scope="col"  >Mark</th>
                </tr>
              </thead>

              <tbody>
                {dataAttendance.content.filter((d) => {
                  console.log(searchTerm + " serchterm")
                  if (searchTerm === "") {
                    return d
                  }
                  else if (String(d.userId).toLowerCase().includes(String(searchTerm).toLowerCase())) {
                    return d;
                  }
                }).map((d) => (

                  <tr key={d.userId} style={{ verticalAlign: "middle" }}>
                    <td>{d.userId}</td>
                    <td >{d.user_Id.name}</td>
                    <td>{d.attendanceDate}</td>
                    <td >
                      {d.present ? moment(d.updatedTimeStamp).format('h:mm:ss A') : "-"}</td>
                    <td>{d.present ? <h6 style={{ color: "green" }}>Present</h6> : <h6 style={{ color: "blue" }}>Unmarked</h6>}</td>
                    <td >
                      {d.present ? <h6><i className="bi bi-check2-square text-success" >Marked</i></h6> :
                        <button
                          type="button"
                          className="btn btn-warning"
                          onClick={() => {
                            setFormData(d.userId, d.present = true);
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
        </>//scope End 1
      ) : (
        <> {/* scope start 2 */}
          <table className="table table-hover text-center"></table>
          <div className="mx-auto custom-container p-4 text-center">
            <FontAwesomeIcon icon={faInfoCircle} size="4x" style={{ color: "#1693f3" }} />
            <p>No data available for today</p>
          </div>
          {/* scope End 2 */}
        </>
      )}

      {/* Pagination Bar Starts*/}
      {dataAttendance.totalPages === 0 ? (<></>) :
        (
          <div className="row m-0 p-0 divcardProfile">
            <PaginationBar postContent={dataAttendance} handlePageChange={handlePageChange} />
          </div>
        )}
    </div>

  );
}