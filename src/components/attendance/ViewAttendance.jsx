import React, { useEffect, useState } from 'react';
import AttendanceServices from'../../services/AttendanceServices'
import { Container, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
export default function ViewAttendance() {const [pageSize, setPageSize] = useState(5);
  const [sortBy, setSortBy] = useState('attendanceId');
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
      const responseData = await AttendanceServices.viewAttendanceData(0, 5, "attendanceId", "asc");
      console.log(responseData);
      setPostContent(responseData.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePageChange = async (pageNumber = 0) => {
    try {
      const responseData = await AttendanceServices.viewAttendanceData(pageNumber, pageSize, sortBy, sortDir);
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
      <br /> */}

      <div className="row m-0 p-0">
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
      </div>

      <div className="table-responsive" >
        {/* className="table-responsive" */}
        <table className="table table-hover">
          <thead className="table-dark">
            <tr>
              <th scope="col" onClick={() => handleSortBy('attendanceId')}>ID</th>
              <th scope="col" onClick={() => handleSortBy('userId')}>User Id</th>
              <th scope="col" onClick={() => handleSortBy('user_Id.name')}>Name</th>
              <th scope="col" onClick={() => handleSortBy('present')}>Status</th>
              <th scope="col" onClick={() => handleSortBy('attendanceDate')}>Attendance Date</th>
              <th scope="col" onClick={() => handleSortBy('updatedTimeStamp')}>Time</th>
            </tr>
          </thead>
          <tbody>
            {postContent.content.filter((d) => {
              if (searchTerm === "") {
                return d
              }
              else if (String(d.attendanceId).toLowerCase().includes(String(searchTerm).toLowerCase())) {
                return d;
              }
              else if (String(d.userId).toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                return d;
              }
              else if (String(d.attendanceDate).toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                return d;
              }

            }).map((d) => (
              <tr key={d.attendanceId}>
                <td data-label="ID : ">{d.attendanceId}</td>
                <td data-label="User Id : ">{d.userId}</td>
                <td data-label="Name :  ">{d.user_Id.name}</td>
                <td data-label="Status : ">{d.present}</td>
                <td data-label="attendanceDate : ">{d.attendanceDate}</td>
                <td data-label="Time : ">{d.updatedTimeStamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='row'>
       <Container className='mt-3'>
        <Pagination aria-label="Page navigation example" className='col-md-4 ms-auto'  size="md">
          <PaginationItem > 
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
    </div>
    </div>
  );
}
