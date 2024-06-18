import React, { useEffect, useState } from 'react';
import ActivityServices from '../../services/ActivityServices';
import PaginationBar from '../PaginationBar';

export default function AllActivities() {
  const [pageSize, setPageSize] = useState(5);
  const [sortBy, setSortBy] = useState('activityName');
  const [sortDir, setSortDir] = useState('asc');
  const [searchTerm, setSearchTerm] = useState("");
  
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
      const responseData = await ActivityServices.addActivity(0, 5, "activityName", "asc");
      console.log(responseData);
      setPostContent(responseData.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePageChange = async (pageNumber = 0) => {
    try {
      const responseData = await ActivityServices.addActivity(pageNumber, pageSize, sortBy, sortDir);
      setPostContent(responseData.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSortChange = (e) => {
    setSortDir(e); 
    handlePageChange(); 
  }

  const handleSortBy = (e) => {
    setSortBy(e);
    handlePageChange();
  }

  return (
    <div className='container'>
    <div className="row m-0 p-0 ">
      <h1>Activities</h1>
    </div>
    <br />
    <div className="row m-0 p-0 divcardProfile">
      <div className="col  col-md-4 ms-auto m-0 p-0" style={{ width: '550px' }}>

        <label htmlFor="searchInput" className="col-auto">Search:</label>
        <input type="text" id="searchInput" className="col col-auto py-0 pl-1"
          style={{ width: '260px', marginRight: '15px' }}
          placeholder="Enter Name or Equipment Id" onChange={event => { setSearchTerm(event.target.value) }} />

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
            <th scope="col" onClick={() => handleSortBy('activityId')}>ID</th>
            <th scope="col" onClick={() => handleSortBy('activityName')}>Name</th>
            <th scope="col" onClick={() => handleSortBy('activityDetails')}>Details</th>
            <th scope="col" onClick={() => handleSortBy('activityCreatedBy')}>Created By</th>
           <th scope="col" onClick={() => handleSortBy('active')}>Status</th>
          </tr>
        </thead>
        <tbody>
          {postContent.content.filter((d) => {
            if (searchTerm === "") {
              return d
            }
            else if (String(d.activityId).toLowerCase().includes(String(searchTerm).toLowerCase())) {
              return d;
            }
            else if (d.activityName.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
              return d;
            }
            else {
              return d;
          }

          }).map((d) => (
            <tr key={d.activityId}>
              <td data-label="ID : ">{d.activityId}</td>
              <td data-label="Name : ">{d.activityName}</td>
              <td data-label="Details : ">{d.activityDetails}</td>
              <td data-label=" Created By : ">{d.activityCreatedBy}</td>
             <td data-label="Status : ">{d.isActive ? 'Active' : 'Inactive'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div><br/>
    {/* Pagination Bar Starts*/}
    <div className="row m-0 p-1 divcardProfile">
    <PaginationBar postContent={postContent} handlePageChange={handlePageChange} />
    </div>
    <br/>
  </div>
  )
}