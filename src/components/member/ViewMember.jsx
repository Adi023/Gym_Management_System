import React, { useEffect, useState } from 'react'

import MemberServices from '../../services/MemberServices';



export default function ViewMember() {
  const [data,setData]=useState([]);
 
  const viewMembers=()=>{
    MemberServices.viewMember().then(
      (Response)=>{
        console.log(Response.data);
        setData(Response.data);
      },(Error)=>{
        console.log(Error);
      }
      
    )
  }
  useEffect(()=>{
    viewMembers()
  },[]);
  
  return (
    <div>
      <h1>ViewMember</h1>
    <div>
    {data.map((d) =>
            (
                <div id='home' key={d.member_id}>
                    <h3>Name :  {d.member_name}</h3>
                    <h5>Address : {d.member_address}</h5>
                    <h5>Mobile No. :  {d.member_mob_no}</h5>
                    <h5>Email ID : {d.member_email}</h5>
                    <h5>Gender : {d.member_gender}</h5>
                    <h5>DOB : {d.member_DOB}</h5>
                    <h5>Date of Joining : {d.member_DOJoining}</h5>
                    <h5>Status : {d.member_status}</h5>
                    {/* <a href={'ViewDetails/'+d.id}> ViewDetails </a> */}
                </div>
    ))}    
    </div>
    </div>
  )
}
