import React, { useEffect, useState } from 'react';
import UserServices from '../../services/UserServices';
import { Col, Container, Pagination, PaginationItem, PaginationLink, Row } from 'reactstrap';
import ErrorPage from '../ErrorPage';

export default function ViewAllUsers() {
  const [data, setData] = useState([]);
  const [postContent, setPostContent] = useState({
    content: [],
    totalPages: '',
    totalElement: '',
    pageSize: '',
    lastPage: false,
    pageNumber: 0
  });

  useEffect(() => {
    fetchData();
    
  });

  const fetchData = async () => {
    try {
      const responseData = await UserServices.viewUsers(postContent.pageNumber).then(() => {
        console.log(responseData);
        alert("User Fetched Successfully");
      })
      .catch(error => {
        console.error("Error Fetching user:", error);
        // Render ErrorPage or handle error in another way
        // alert('Error happened');
        return <ErrorPage />;
      });
      setData(responseData.data.content);
      setPostContent(responseData.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePageChange = async (page) => {
    try {
      const responseData = await UserServices.viewUsers(page);
      setData(responseData.data.content);
      setPostContent(responseData.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='container'>
      <Row>
        <Col md={{ size: 10, offset: 1 }}>
          <h1>ViewAllUsers ({postContent.totalElement})</h1>
          <table className="table table-hover">
          <thead className="table-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile</th>
                <th scope="col">Address</th>
                <th scope="col">City</th>
                <th scope="col">Date Of Joining</th>
                <th scope="col">Date Of Birth</th>
                <th scope="col">Status</th>
                <th scope="col">Gender</th>
                <th scope="col">BloodGroup</th>
                <th scope="col">Role</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d) => (
                <tr key={d.userId}>
                  <td>{d.userId}</td>
                  <td>{d.name}</td>
                  <td>{d.email}</td>
                  <td>{d.mobile}</td>
                  <td>{d.address}</td>
                  <td>{d.cityId.cityName}</td>
                  <td>{d.date_of_joining}</td>
                  <td>{d.dob}</td>
                  <td>{d.active ? 'Active' : 'Inactive'}</td>
                  <td>{d.gender}</td>
                  <td>{d.bloodGroup}</td>
                  <td>{d.roleId.roleName}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Container className='mt-3'>
            <Pagination aria-label="Page navigation example" size="lg">
              <PaginationItem>
                <PaginationLink onClick={() => handlePageChange(0)} disabled={postContent.pageNumber === 0}>
                  First
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink onClick={() => handlePageChange(postContent.pageNumber - 1)} previous disabled={postContent.pageNumber === 0}>
                  Previous
                </PaginationLink>
              </PaginationItem>
              {[...Array(postContent.totalPages)].map((_, index) => (
                <PaginationItem key={index} active={index === postContent.pageNumber}>
                  <PaginationLink onClick={() => handlePageChange(index)}>
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationLink onClick={() => handlePageChange(postContent.pageNumber + 1)} next disabled={postContent.pageNumber === postContent.totalPages - 1}>
                  Next
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink onClick={() => handlePageChange(postContent.totalPages - 1)} disabled={postContent.pageNumber === postContent.totalPages - 1}>
                  Last
                </PaginationLink>
              </PaginationItem>
            </Pagination>
          </Container>
        </Col>
      </Row>
    </div>
  );
}
