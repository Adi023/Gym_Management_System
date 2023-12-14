import React, { useEffect, useState } from 'react'

import MemberServices from '../../services/MemberServices';
import Member from '../Member';



export default function ViewMember() {
  const [data, setData] = useState([]);

  const viewMembers = () => {
    MemberServices.viewMember().then(
      (Response) => {
        console.log(Response.data);
        setData(Response.data);
      }, (Error) => {
        console.log(Error);
      }
    )
  }
  useEffect(() => {
    viewMembers()
  }, []);

  return (
    <>
      <Member />
      <div>
        <h1>ViewMember</h1>
        <div>
          {data.map((d) =>
          (
            <div id='home' key={d.member_id}>
              <div className="tools">
                <div className="circle">
                  <span className="red box"></span>
                </div>
                <div className="circle">
                  <span className="yellow box"></span>
                </div>
                <div className="circle">
                  <span className="green box"></span>
                </div>
                <div >
                  <span>ID : {d.member_id}</span>
                </div>
              </div>
              <h4>Name :  {d.member_name}</h4>
              <h5>Address : {d.member_address}</h5>
              <h5>Mobile No. :  {d.member_mob_no}</h5>
              <h5>Email ID : {d.member_email}</h5>
              <h5>Gender : {d.member_gender}</h5>
              <h5>DOB : {d.member_DOB}</h5>
              <h5>Date of Joining : {d.member_DOJoining}</h5>
              <h5>Status : {d.member_status}</h5>
            </div>
          ))}
        </div>

      </div>
    </>
  )
}
