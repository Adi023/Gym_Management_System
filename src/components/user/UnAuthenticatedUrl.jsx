import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function UnAuthenticatedUrl() {
    const navigate = useNavigate();
    const reloadPage = () => {
        navigate("/login");
        window.location.reload();
       
    };


  return (
    <div className="container text-center mt-5">
    {/* <h1>Error</h1> */}
    <i className="bi bi-shield-lock-fill" style={{fontSize:"150px"}} ></i>
    <div>
      <h1>This is Unauthenticated Page</h1>
      <p>You are not authenticated. Please <Link to="/">go back</Link> to the home page.</p>
    </div>
    <p>Or</p>
    <button className="btn btn-primary" onClick={reloadPage}>
       Please Login First
    </button>
    
</div>
  )
}
