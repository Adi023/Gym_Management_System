import React, { useEffect, useState } from 'react';
import UserServices from '../../services/UserServices';
import { Container, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
// import ErrorPage from '../ErrorPage';

export default function ViewAllUsers() {
  // const [data, setData] = useState([]);
  const [pageSize, setPageSize] = useState(5);
  const [sortBy, setSortBy] = useState('name'); // Initial value 'name'
  const [sortDir, setSortDir] = useState('asc'); // Initial value 'asc'
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

  return (
    <div className='container'>
      <div className="row mb-3">
        {/* <div className="col-md-6">
      <input type="text" placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
    </div> */}
        <div >
          {/* <input type="text" placeholder='Enter  Name or User Id or Email' onChange={event => { setSearchTerm(event.target.value) }} /> */}
        </div> <br />
        <div className="col-md-6">
          {/* add  page size */}
          <h2>Total Users {postContent.totalElements}</h2> 
          <input type="text" placeholder='Enter  Name or User Id or Email' onChange={event => { setSearchTerm(event.target.value) }} />
          <input type='number'
          value={pageSize}
          placeholder='Enter page size ' 
          onChange={(e) => {
            const pageSize = parseInt(e.target.value.trim());
            if ( pageSize > 0 && pageSize<=postContent.totalElements) {
              setPageSize(pageSize);
            } else{
              if(pageSize === ' ' ){
                setPageSize('');
              }else{
                setPageSize('');
                alert("Enter Valid Page Size")
              }
             
            }
          }} />

          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="userId">User Id</option>
            <option value="name">Name</option>
            <option value="email">Email</option>
            <option value="mobile">mobile</option>
            <option value="dob">dob</option>
            <option value="active">active</option>
            <option value="gender">gender</option>
            <option value="bloodGroup">BloodGroup</option>
            <option value="dateOfJoining">Date of Joining</option>
            {/* Add more options as needed */}
          </select>
          <select value={sortDir} onChange={(e) => setSortDir(e.target.value)}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
          <button className='btn btn-primary' onClick={() => handlePageChange()}>Apply</button>
        </div>
      </div>
  
      <div className="table-responsive" >
        {/* className="table-responsive" */}
        <table className="table table-hover">
          <thead className="table-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile</th>
              <th scope="col">Address</th>
              <th scope="col">City</th>
              <th scope="col">Date Of Joining</th>
              <th scope="col">Date Of Birth</th>
              <th scope="col">Status</th>
              <th scope="col">Gender</th>
              <th scope="col">BloodGroup</th>
              <th scope="col">Role</th>
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
                <td data-label="Address : ">{d.address}</td>
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
      </div>
      <Container className='mt-3'>
        <Pagination aria-label="Page navigation example" size="lg">
          <PaginationItem>
            <PaginationLink onClick={() => handlePageChange(0)} disabled={postContent.pageNumber === 0}>
              First
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink onClick={() => handlePageChange(postContent.pageNumber - 1)} previous disabled={postContent.pageNumber === 0}>
              Previous
            </PaginationLink>
          </PaginationItem>

          {[...Array(postContent.totalPages)].map((_, index) => (
            <PaginationItem key={index} active={index === postContent.pageNumber}>
              <PaginationLink onClick={() => handlePageChange(index)}>
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationLink onClick={() => handlePageChange(postContent.pageNumber + 1)} next disabled={postContent.pageNumber === postContent.totalPages - 1}>
              Next
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink onClick={() => handlePageChange(postContent.totalPages - 1)} disabled={postContent.pageNumber === postContent.totalPages - 1}>
              Last
            </PaginationLink>
          </PaginationItem>
        </Pagination>
      </Container>
      {/* </Col> */}
      {/* </Row> */}
    </div>
  );
}