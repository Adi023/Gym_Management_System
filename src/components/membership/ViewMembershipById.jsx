import React, { useEffect, useState } from 'react';
import MembershipServices from '../../services/MembershipServices'
import { useSelector } from 'react-redux';
import TodaysDate from '../Helper/TodaysDate';
import { formatDate } from '../../dateUtils';

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
  // let sorted='null';
  useEffect(() => {
    fetchData();
    // sorted = [...postContent].sort((a, b) => b.membershipId - a.membershipId);
    // console.log(sorted);
    // toast.success("Succses")
  }, []);

  return (
    <div className=' container'>
      <br />
      <div className="row m-0 p-0 ">
        <h1>View Membership</h1>
      </div>
      <br />
      <div className="row m-0 p-0 divcardProfile">
        <div className="col  col-md-5 ms-auto m-0 p-0" style={{ width: '550px' }}>
          <label htmlFor="searchInput" className="col-auto">Search:</label>
          <input type="text" id="searchInput" className="col col-auto  py-0 pl-1"
            style={{ width: '280px', marginRight: '15px' }}
            placeholder="Membership Id or Name" onChange={event => { setSearchTerm(event.target.value) }} />
        </div>
      </div>
      <br />
      <div className="container divcardProfile">
        <div className="row">
          {postContent
            .filter((d) => {
              // let sorted = [d].sort((a, b) => b.membershipId - a.membershipId);
              if (searchTerm === "") {
                // const sorted = [...d].sort((a, b) => a.membershipId - b.membershipId);
                return d;
              } else if (
                String(d.membershipId)
                  .toLowerCase()
                  .includes(String(searchTerm).toLowerCase())
              ) {
                // const sorted = [...d].sort((a, b) => a.membershipId - b.membershipId);
                return d;
              } else if (
                d.plan.planName
                  .toLowerCase()
                  .includes(String(searchTerm).toLowerCase())
              ) {
                // const sorted = [...d].sort((a, b) => a.membershipId - b.membershipId);
                return d;
              }
              return null;
            })
            .map((d) => {

              const isExpired = d.membershipEndDate < TodaysDate.getDate();
              return (
                <div className="col-lg-3 col-md-5 col-sm-6" key={d.membershipId}>
                  <div
                    className="membershipcard"
                    style={{
                      boxShadow: isExpired
                        ? "rgba(255, 0, 0, 0.4) 0px 15px 30px -5px"
                        : "rgba(0, 128, 0, 0.4) 0px 15px 30px -5px",
                      backgroundImage: isExpired
                        ? "linear-gradient(144deg, #FF4E50, #F9D423 50%, #FF4E50)"
                        : "linear-gradient(144deg,#40ff53, #92f342 50%,#00eba5)"
                    }}
                  >
                    <div className="card__content">
                      {/* <div className="info">
                  <h6 className="m-label">Id : </h6><br/>
                  <h6 >{d.membershipId}</h6>
                </div> */}
                      <div className="info hor-center text" >
                          <h6 style={{ fontSize: "45px" }}>{d.plan?.planName}</h6>
                      </div>

                      <div className="info">
                        <h6 className="m-label">Start Date :</h6>
                        <h6 className="hor-center">{formatDate(d.membershipStartDate)}</h6>
                      </div>
                      <div className="info">
                        <h6 className="m-label">End Date :</h6>
                        <h6 className="hor-center">{formatDate(d.membershipEndDate)}</h6>
                      </div>
                      <div className="info">
                        <h6 className="m-label">Added Date :</h6>
                        <h6 className="hor-center">{formatDate(d.ts)}</h6>
                      </div>
                      <div className="info">
                        <h6 className="m-label">Status :</h6>
                        <h6 className="m-label hor-center" style={{backgroundColor:'white'}}>
                          {isExpired ? (
                            <h6  style={{ color: "Red" }}>Expired</h6>
                          ) : (
                            <h6  style={{ color: "green" }}>Active</h6>
                          )}
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>


      <br />
    </div>
  )
}

