import React, { useEffect, useState } from 'react';
import EmployeeServices from '../../services/EmployeeServices'
import PaginationBar from '../PaginationBar';

export default function ViewEmployee() {

  const [pageSize, setPageSize] = useState(5);
  const [sortBy, setSortBy] = useState('empId');
  const [sortDir, setSortDir] = useState('desc');
  const [searchTerm, setSearchTerm] = useState("")
  const [postContent, setPostContent] = useState({
    content: [],
    totalPages: '',
    totalElements: '',
    pageSize: '',
    lastPage: false,
    pageNumber: 0
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const responseData = await EmployeeServices.viewAllEmployee(0, 5, "empId", "desc");
      console.log(responseData);
      setPostContent(responseData.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePageChange = async (pageNumber = 0) => {
    try {
      const responseData = await  EmployeeServices.viewAllEmployee(pageNumber, pageSize, sortBy, sortDir);
      console.log(responseData);
      setPostContent(responseData.data);
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

  return (
    <div className='container '>
      <br />
      <div className="row m-0 p-0 ">
        <h1>Staff</h1>
      </div>
      <br />

      <div className="row m-0 p-0 divcardProfile">
        <div className="col  col-md-4 ms-auto m-0 p-0" style={{ width: '550px' }}>

          <label htmlFor="searchInput" className="col-auto">Search:</label>
          <input type="text" id="searchInput" className="col col-auto  py-0 pl-1"
            style={{ width: '280px', marginRight: '15px' }}
            placeholder="Enter Id, User Id, or Attendance Date" onChange={event => { setSearchTerm(event.target.value) }} />

          <label htmlFor="pageSizeInput" className=' col-auto' >Page Size:</label>
          <input
            type="number"
            id="pageSizeInput"
            className=" col col-auto m-0  py-0 pl-1 "
            style={{ width: '100px' }}
            value={pageSize}
            placeholder="Enter page size"
            onChange={(e) => {
              const pageSize = parseInt(e.target.value.trim());
              if (pageSize > 0 && pageSize <= postContent.totalElements) {
                setPageSize(pageSize);
              } else {
                if (pageSize === ' ') {
                  setPageSize('');
                } else {
                  setPageSize('');
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

      <div className="table-responsive divcardProfile" >
        {/* className="table-responsive" */}
        <table className="table table-hover">
          <thead className="table-dark">
            <tr>
              <th scope="col" onClick={() => handleSortBy('empId')}>Id</th>
              <th scope="col" >Name</th>
              <th scope="col" onClick={() => handleSortBy('designation')}>Designation</th>
              <th scope="col" onClick={() => handleSortBy('salary')}>Salary</th>
              <th scope="col" onClick={() => handleSortBy('spcialization')}>Spcialization</th>
              <th scope="col" onClick={() => handleSortBy('certifications')}>Certifications</th>
              <th scope="col" onClick={() => handleSortBy('expertise')}>Expertise</th>
            </tr>
          </thead>
          <tbody>
            {postContent.content.filter((d) => {
              if (searchTerm === "") {
                return d;
              }
              else if (String(d.empId).toLowerCase().includes(String(searchTerm).toLowerCase())) {
                return d;
              }
              else if (d.user_Id?.name.toLowerCase().includes(String(searchTerm).toLowerCase())) {
                return d;
              }
              else if (String(d.salary).toLowerCase().includes(String(searchTerm).toLowerCase())) {
                return d;
              }
              
            }).map((d) => (
              <tr key={d.empId}>
                <td data-label="Id : ">{d.empId}</td>
                <td data-label="Name  : ">{d.user_Id.name}</td>
                <td data-label="Designation :  ">{d.designation}</td>
                <td data-label="Salary : ">{d.salary}</td>
                <td data-label="Spcialization : ">{d.spcialization}</td>
                <td data-label="Certifications : ">{d.certifications}</td>
                <td data-label="Expertise : ">{d.expertise}</td>      
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br/>
      {/* Pagination Bar Starts*/}
      <div className="row m-0 p-0 divcardProfile">
      <PaginationBar postContent={postContent} handlePageChange={handlePageChange} />
     </div>
    </div>
  )
}