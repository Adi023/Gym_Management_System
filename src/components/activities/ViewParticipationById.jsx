  import React, { useEffect, useState } from 'react';
  import ActivityMapperServices from '../../services/ActivityMapperServices'
  import PaginationBar from '../PaginationBar';
import { useSelector } from 'react-redux';
  
  export default function ViewParticipationById() {
   
    const [pageSize, setPageSize] = useState(5);
    const [sortBy, setSortBy] = useState('id');
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
    const userId = useSelector(state => state.userId);
    console.log(userId+" = userId");
    const fetchData = async () => {
      try {
        const responseData = await ActivityMapperServices.viewActivityMapperByUserId(0, 5, "id", "asc",userId);
        console.log(responseData);
        setPostContent(responseData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    const handlePageChange = async (pageNumber = 0) => {
      try {
        const responseData = await ActivityMapperServices.viewActivityMapperByUserId(pageNumber, pageSize, sortBy, sortDir,userId);
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
         <br />
      <div className="row m-0 p-0 ">
        <h1>Participations In Activities</h1>
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
              <th scope="col" onClick={() => handleSortBy('id')}>ID</th>
              <th scope="col" onClick={() => handleSortBy('participant')}>Participant</th>
              <th scope="col" >Activity</th>
              <th scope="col" >Scheduled Date</th>
              <th scope="col" onClick={() => handleSortBy('registerDate')}>Registered Date</th>
              <th scope="col" onClick={() => handleSortBy('attended')}>Attended</th>
            </tr>
          </thead>
          <tbody>
            {postContent.content.filter((d) => {
              if (searchTerm === "") {
                return d
              }
              else if (String(d.id).toLowerCase().includes(String(searchTerm).toLowerCase())) {
                return d;
              }
              else if (d.activityName.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                return d;
              }
              else {
                return d;
            }
  
            }).map((d) => (
              <tr key={d.id}>
                <td data-label="ID : ">{d.id}</td>
                <td data-label="Name : ">{d.participant.name}</td>
                <td data-label=" Activity : ">{d.shedule.activity.activityName}</td>
                <td data-label=" Scheduled Date : ">{d.shedule.organizedDate}</td>
                <td data-label=" Register Date : ">{d.registerDate}</td>
               <td data-label="Attended : ">{d.active ? 'Attended' : 'Not Attended'}</td>
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
  