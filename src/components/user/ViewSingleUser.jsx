import React, { useEffect, useState } from 'react'
import UserServices from '../../services/UserServices'

export default function ViewSingleUser() {

  const getService = () => {
    var userId = 1
    // var id = localStorage.getItem('cr_id');

    UserServices.getUserById(userId).then(
      (Response) => {
        //console.log(Response.data)
        setData(Response.data)
      },
      (Error) => {
        console.log(Error);
      }
    );
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    getService();
  }, []);
  return (
    <div className='container py-4 px-4 divcardProfile'>
      <div className="profile-header">
        <u><h1 className="text-center mb-4">Profile</h1></u>
      </div>
      <div className="row">
        <div className="col-md-6  mb-4">

          Id: {data.userId}<br />
          Name: {data.name}<br />
          Password: {data.password}<br />

        </div>
        <div className="col-md-6  mb-4">
          Gender: {data.gender}<br />
          Blood Group: {data.bloodGroup}<br />
          DOB: {data.dob}<br />

        </div>
      </div>
      <div className="row  mb-4">
        <div className="col-md-12">
          Email: {data.email}<br />
          Mobile: {data.mobile}<br />
          Address: {data.address}<br />
          City Id: {data.cityId}<br />
        </div>
      </div>
      <div className="row  mb-4">
        <div className="col-md-6">

          Date of Joining: {data.date_of_joining}<br />
          Active: {data.active}<br />
          Role Id: {data.roleId}<br />

        </div>
      </div>


      {/* <div class="col-md-8">
              <div class="card mb-3">
                <div class="card-body">

                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">User ID :</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    {data.userId}
                    </div>
                  </div>
                  <hr/>

                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Name : </h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    {data.name}
                    </div>
                  </div>
                  <hr/>

                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0"> Password : </h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    {data.password}
                    </div>
                  </div>
                  <hr/>

                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0"> Gender : </h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    {data.gender}
                    </div>
                  </div>
                  <hr/>

                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Blood Group : </h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    {data.bloodGroup}
                    </div>
                  </div>
                  <hr/>

                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">DOB :</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                     {data.dob}
                    </div>
                  </div>
                  <hr/>

                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email: </h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    {data.email}
                    </div>
                  </div>
                  <hr/>

                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0"> Mobile: </h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                   {data.mobile}
                    </div>
                  </div>
                  <hr/>

                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0"> Address: </h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                   {data.address}
                    </div>
                  </div>
                  <hr/>

                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">City Id: </h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    {data.cityId}
                    </div>
                  </div>
                  <hr/>

                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0"> Date of Joining: </h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                   {data.date_of_joining}<br />
         
                    </div>
                  </div>
                  <hr/>

                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0"> Active: </h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                   {data.active}<br />
          
                    </div>
                  </div>
                  <hr/>

                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Role Id: </h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    {data.roleId}<br />
                    </div>
                  </div>
                  <hr/>
                 
                </div>
              </div>
      </div> */}

    </div>



  )
}