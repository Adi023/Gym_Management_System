import React, { useEffect, useState } from 'react';
import PlanServices from '../../services/PlanServices'
import PaginationBar from '../PaginationBar';
import { Link } from 'react-router-dom';
export default function ViewPlan() {

  const [pageSize, setPageSize] = useState(5);
  const [sortBy, setSortBy] = useState('planId');
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
    // toast.success("Succses")
  }, []);

  const fetchData = async () => {
    try {
      const responseData = await PlanServices.viewAllPlan(0, 5, "planId", "asc");
      console.log(responseData);
      // toast.success("Succses")
      setPostContent(responseData.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePageChange = async (pageNumber = 0) => {
    try {
      const responseData = await  PlanServices.viewAllPlan(pageNumber, pageSize, sortBy, sortDir);
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
        <h1>Plans</h1>
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
              <th scope="col" onClick={() => handleSortBy('planId')}>Id</th>
              <th scope="col" onClick={() => handleSortBy('planName')}>Name</th>
              <th scope="col" onClick={() => handleSortBy('planDescription')}>Description</th>
              <th scope="col" onClick={() => handleSortBy('planPrice')}>Price</th>
              <th scope="col" onClick={() => handleSortBy('planBillngCycle')}>Billng Cycle</th>
              <th scope="col" onClick={() => handleSortBy('planRestrictions')}>Restrictions</th>
              <th scope="col" onClick={() => handleSortBy('planDiscount')}>Discount</th>
              <th scope="col" onClick={() => handleSortBy('ts')}>Added Date</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {postContent.content.filter((d) => {
              if (searchTerm === "") {
                return d;
              }
              else if (String(d.planId).toLowerCase().includes(String(searchTerm).toLowerCase())) {
                return d;
              }
              else if (d.planName.toLowerCase().includes(String(searchTerm).toLowerCase())) {
                return d;
              }
            }).map((d) => (
              <tr key={d.planId}>
                <td data-label="Id : ">{d.planId}</td>
                <td data-label="Name  : ">{d. planName}</td>
                <td data-label="Description :  ">{d.planDescription}</td>
                <td data-label="Price :  ">{d.planPrice}</td>
                <td data-label="BillngCycle : ">{d.planBillngCycle}</td>
                <td data-label="Restrictions : ">{d.planRestrictions}</td>
                <td data-label="Discount : ">{d.planDiscount}</td>
                <td data-label="Added Date : ">{new Date(d.ts).toLocaleDateString()}</td>
                <td data-label="Update : "><a href={'updatePlan/'+d.planId}><i className="fas fa-edit"></i></a></td>      
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
