import React, { useEffect, useState } from 'react';
import UserServices from '../../services/UserServices';
import { Col, Container, Pagination, PaginationItem, PaginationLink, Row } from 'reactstrap'

export default function ViewAllUsers() {
  const [data, setData] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(0);

  const [postContent, setPostContent] = useState({
    content: [],
    totalPages: '',
    totalElement: '',
    pageSize: '',
    lastPage: false,
    pageNumber:''
  })

  useEffect(() => {
    fetchData();
    console.log('Data:', data);
  }, []);
  // currentPage

  const fetchData = async () => {
    try {
      const responseData = await UserServices.viewUsers();
      setData(responseData.data.content);
      setPostContent(data);
      // setTotalPages(responseData.data.totalPages);
      console.log(responseData)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // const goToPage = (page) => {
  //   setCurrentPage(page);
  // };


  return (
    <div className='container'>
      
      <Row><Col md={
        {
          size:15,
          offset:0
        }
      }>
        <h1>ViewAllUsers({postContent?.totalElement})</h1>
      <table className="table  table-hover" >
        <thead className="table-dark" >
          <tr >
            <th scope="col">ID</th>
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
            <th scope="col">Role</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr key={d.userId}>
              <th scope="row">{d.userId}</th>
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
              <td className="text-center ">{d.bloodGroup}</td>
              <td>{d.roleId.roleName}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Container className='mt-5'>
        <Pagination aria-label="Page navigation example" size="lg">
          {/* <PaginationItem>
            <PaginationLink first href="1">
              First
            </PaginationLink>
          </PaginationItem> */}

          <PaginationItem disabled={postContent.pageNumber=0}>
            <PaginationLink href="#" previous >
              Previous
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationLink href="#">

              {
                [...Array(postContent.totalPages)].map((item,index)=>(
                  <PaginationItem active={index===postContent.pageNumber} key={index}>
                    <PaginationLink>
                      {index+1}
                    </PaginationLink>
                  </PaginationItem>
                ))
              }

            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationLink href="#" next>
              Next
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationLink href='2' last>
              Last
            </PaginationLink>
          </PaginationItem>

        </Pagination>

      </Container>
      </Col></Row>
    </div>
  );
}
