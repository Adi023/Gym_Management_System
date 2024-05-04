import React, { useEffect, useState } from 'react'
import UserServices from '../../services/UserServices'

export default function ViewSingleUser() {

  const getService = () => {
    var userId = 1
    // var id = localStorage.getItem('userId');

    UserServices.getUserById(userId).then(
      (Response) => {
        // console.log(Response.data)
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

          Id: {data.userId ? data.userId : 'N/A'}<br /><br />
          Name: {data.name ? data.name : 'N/A'}<br />
          Password: {data.password ? data.password : 'N/A'}<br />

        </div>
        <div className="col-md-6  mb-4">
          Gender: {data.gender ? data.gender : 'N/A'}<br />
          Blood Group: {data.bloodGroup ? data.bloodGroup : 'N/A'}<br />
          DOB: {data.dob ? data.dob : 'N/A'}<br />

        </div>
      </div>
      <div className="row  mb-4">
        <div className="col-md-12">
          Email: {data.email ? data.email : 'N/A'}<br />
          Mobile: {data.mobile ? data.mobile : 'N/A'}<br />
          Address: {data.address ? data.address : 'N/A'}<br />
          {/* City Id: {data.cityId.cityId ? data.cityId.cityName:'N/A'}<br /> */}
          City: {data.cityId?.cityName?data.cityId?.cityName:'N/A'}<br />
          State: {data.cityId?.stateId?.stateName?data.cityId?.stateId?.stateName :'N/A'}<br />
          Country: {data.cityId?.countryId?.countryName}<br />
        </div>
      </div>
      <div className="row  mb-4">
        <div className="col-md-6">

          Date of Joining: {data.dateOfJoining ? data.dateOfJoining : 'N/A'}<br />
          Active: {data.active ? data.active : 'N/A'}<br />
          {/* Role Id: {data.roleId ? data.roleId :'N/A'}<br /> */}

        </div>
      </div>
    </div>
  )
}