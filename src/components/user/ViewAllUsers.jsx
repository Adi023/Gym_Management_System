import React, { useEffect, useState } from 'react';
import UserServices from '../../services/UserServices';
import PaginationBar from '../PaginationBar';


export default function ViewAllUsers() {
  const [pageSize, setPageSize] = useState(5);
  const [sortBy, setSortBy] = useState('name');
  const [sortDir, setSortDir] = useState('asc');
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
      const responseData = await UserServices.viewAllUsers(0, 5, "name", "asc");
      console.log(responseData);
      setPostContent(responseData.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePageChange = async (pageNumber = 0) => {
    try {
      const responseData = await UserServices.viewAllUsers(pageNumber, pageSize, sortBy, sortDir);
      setPostContent(responseData.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSortChange = (e) => {
    setSortDir(e); // Update the sorting direction
    handlePageChange(); // Call handlePageChange to update the page or perform sorting
  }

  const handleSortBy = (e) => {
    setSortBy(e);
    handlePageChange();
  }

  return (
    <div className='container'>
      {/* <label htmlFor="searchInput" className="col">Search:</label>
      <input type="text" id="searchInput" className="form-control"
        placeholder="Enter Name, User Id, or Email" onChange={event => { setSearchTerm(event.target.value) }} />
      <br /> */}<br />
      <div className="row m-0 p-0 ">
        <h1>View All Users</h1>
      </div>
      <br />
      <div className="row m-0 p-0 divcardProfile">
        <div className="col  col-md-4 ms-auto m-0 p-0" style={{ width: '550px' }}>

          <label htmlFor="searchInput" className="col-auto">Search:</label>
          <input type="text" id="searchInput" className="col col-auto py-0 pl-1"
            style={{ width: '260px', marginRight: '15px' }}
            placeholder="Enter Name, User Id, or Email" onChange={event => { setSearchTerm(event.target.value) }} />

          <label htmlFor="pageSizeInput" className=' col-auto' >Page Size:</label>
          <input
            type="number"
            id="pageSizeInput"
            className=" col col-auto m-0 py-0 pl-1"
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
              <th scope="col" onClick={() => handleSortBy('userId')}>ID</th>
              <th scope="col" onClick={() => handleSortBy('name')}>Name</th>
              <th scope="col" onClick={() => handleSortBy('email')}>Email</th>
              <th scope="col" onClick={() => handleSortBy('mobile')}>Mobile</th>
              {/* <th scope="col" onClick={() => handleSortBy('address')}>Address</th> */}
              <th scope="col" onClick={() => handleSortBy('cityId')}>City</th>
              <th scope="col" onClick={() => handleSortBy('dateOfJoining')}>Date Of Joining</th>
              <th scope="col" onClick={() => handleSortBy('dob')}>Date Of Birth</th>
              <th scope="col" onClick={() => handleSortBy('active')}>Status</th>
              <th scope="col" onClick={() => handleSortBy('gender')}>Gender</th>
              <th scope="col" onClick={() => handleSortBy('bloodGroup')}>Blood Group</th>
              <th scope="col" onClick={() => handleSortBy('roleId')}>Role</th>
            </tr>
          </thead>
          <tbody>
            {postContent.content.filter((d) => {
              if (searchTerm === "") {
                return d
              }
              else if (String(d.userId).toLowerCase().includes(String(searchTerm).toLowerCase())) {
                return d;
              }
              else if (d.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                return d;
              }
              else if (d.email.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                return d;
              }

            }).map((d) => (
              <tr key={d.userId}>
                <td data-label="ID : ">{d.userId}</td>
                <td data-label="Name : ">{d.name}</td>
                <td data-label="Email : ">{d.email}</td>
                <td data-label="Mobile : ">{d.mobile}</td>
                {/* <td data-label="Address : ">{d.address}</td> */}
                <td data-label="City : ">{d.cityId.cityName}</td>
                <td data-label="Date Of Joining : ">{d.dateOfJoining}</td>
                <td data-label="Date Of Birth : ">{d.dob}</td>
                <td data-label="Status : ">{d.active ? 'Active' : 'Inactive'}</td>
                <td data-label="Gender : ">{d.gender}</td>
                <td data-label="BloodGroup : ">{d.bloodGroup}</td>
                <td data-label="Role : ">{d.roleId.roleName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div><br/>
      {/* Pagination Bar Starts*/}
      <div className="row m-0 p-0 divcardProfile">
      <PaginationBar postContent={postContent} handlePageChange={handlePageChange} />
      </div>
      <br/>
    </div>
  );
}