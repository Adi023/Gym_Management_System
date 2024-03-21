import React, { useEffect, useState } from 'react';
import UserServices from '../../services/UserServices';

export default function ViewAllUsers() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchData();
    console.log('Data:', data);
  }, [currentPage]);

  const fetchData = async () => {
    try {
      const responseData = await UserServices.viewUsers();
      setData(responseData.data.content);
      setTotalPages(responseData.data.totalPages);
      console.log(responseData)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };


  return (
    <div>
      <h1>ViewAllUsers</h1>
      {data && data.length > 0 ? (
        <div>
          {data.map((d) => (
            <div id='home' key={d.userId} >
              <div>
                <span>ID : {d.userId}</span>
              </div>
              <h3>Name : {d.name}</h3>
              <h3>Email : {d.email}</h3>
              <h3>Password : {d.password}</h3>
              <h3>Mobile : {d.mobile}</h3>
              <h3>Address : {d.address}</h3>
              <h3>City : {d.cityId.cityName}</h3>
              <h3>Date Of Joining : {d.date_of_joining}</h3>
              <h3>Date Of Birth : {d.dob}</h3>
              <h3>{d.active ? (<h3>Status : Active</h3>) : (<h3>Status : Inactive</h3>)}</h3>
              <h3>Gender : {d.gender}</h3>
              <h3>BloodGroup : {d.bloodGroup}</h3>
              <h3>Role : {d.roleId.roleName}</h3>
              {/* Render other data fields */}
            </div>
          ))}
          <div>
            {Array.from({ length: totalPages || 0 }, (_, index) => index + 1).map(page => (
              <button key={page} onClick={() => goToPage(page)}>{page}</button>
            ))}
          </div>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}
