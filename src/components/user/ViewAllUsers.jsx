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
    <div className='container'>
      <h1>ViewAllUsers</h1>
      <table className="table  table-hover" >
        <thead class="table-dark" >
          <tr >
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            {/* <th scope="col">Password</th> */}
            <th scope="col">Mobile</th>
            <th scope="col">Address</th>
            <th scope="col">City</th>
            <th scope="col">Date Of Joining</th>
            <th scope="col">Date Of Birth</th>
            <th scope="col">Status</th>
            <th scope="col">Gender</th>
            <th scope="col">BloodGroup</th>
            <th  scope="col">Role</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr key={d.userId}>
              <th scope="row">{d.name}</th>
              <td>{d.email}</td>
              {/* <td>{d.password}</td> */}
              <td>{d.mobile}</td>
              <td>{d.address}</td>
              <td>{d.cityId.cityName}</td>
              <td>{d.date_of_joining}</td>
              <td>{d.dob}</td>
              <td>{d.active ? 'Active' : 'Inactive'}</td>
              <td className="text-center ">{d.gender}</td>
              <td  className="text-center ">{d.bloodGroup}</td>
              <td>{d.roleId.roleName}</td>
            </tr>
          ))}
        </tbody>
      </table>


    </div>
  );
}
