import React, { useEffect, useState } from 'react';
import MembershipServices from '../../services/MembershipServices'
import { useSelector } from 'react-redux';
import TodaysDate from '../Helper/TodaysDate'


export default function ViewMembershipById() {

  const [searchTerm, setSearchTerm] = useState("")
  const [postContent, setPostContent] = useState([]);
  const userId = useSelector(state => state.userId);


  const fetchData = async () => {
    try {
      const responseData = await MembershipServices.getMembershipByUserId(userId);
      console.log(responseData);
      // toast.success("Succses")
      setPostContent(responseData.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
    // toast.success("Succses")
  }, []);

  return (
    <div className='container '>
      <br />
      <div className="row m-0 p-0 ">
        <h1>View Membership</h1>
      </div>
      <br />
      <div className="row m-0 p-0 divcardProfile">
        <div className="col  col-md-4 ms-auto m-0 p-0" style={{ width: '550px' }}>
          <label htmlFor="searchInput" className="col-auto">Search:</label>
          <input type="text" id="searchInput" className="col col-auto  py-0 pl-1"
            style={{ width: '280px', marginRight: '15px' }}
            placeholder="Attendance Date or Attendance Id" onChange={event => { setSearchTerm(event.target.value) }} />
        </div>
      </div>
      <br />
      <div className="table-responsive divcardProfile" >
        {/* className="table-responsive" */}
        <table className="table table-hover">
          <thead className="table-dark">
            <tr>
              <th >Id</th>
              <th >User Name</th>
              <th >Plan Name</th>
              <th >Start Date</th>
              <th >End Date</th>
              <th >Added Date</th>
              <th >Status</th>
            </tr>
          </thead>
          <tbody>
            {postContent.filter((d) => {
              if (searchTerm === "") {
                return d;
              }
              else if (String(d.membershipId).toLowerCase().includes(String(searchTerm).toLowerCase())) {
                return d;
              }
              else if (d.plan.planName.toLowerCase().includes(String(searchTerm).toLowerCase())) {
                return d;
              }
            }).map((d) => (
              <tr key={d.membershipId}>
                <td data-label="Id : ">{d.membershipId}</td>
                <td data-label="User Name  : ">{d.user?.name}</td>
                <td data-label="Plan Name :  ">{d.plan?.planName}</td>
                <td data-label="Start Date : ">{d.membershipStartDate}</td>
                <td data-label="End Date : ">{d.membershipEndDate}</td>
                <td data-label="Added Date : ">{new Date(d.ts).toLocaleDateString()}</td>
                <td data-label="Status : ">{(d.membershipEndDate < TodaysDate.getDate()) ?
                  <h6 style={{ color: "Red" }}>Expired</h6> : <h6 style={{ color: "green" }}>Active</h6>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br />

    </div>
  )
}

