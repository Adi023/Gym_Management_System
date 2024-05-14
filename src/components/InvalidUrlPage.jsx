import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function InvalidUrlPage() {
    const navigate = useNavigate();

    const reloadPage = () => {
        navigate("/");
        window.location.reload();
       
    };

    return (
        <div className="container text-center mt-5">
        {/* <h1>Error</h1> */}
        <i class="bi bi-exclamation-triangle-fill" style={{fontSize:"150px"}} ></i>
        <div>
          <h1>Invalid Url</h1>
          <p>This url is Invalid. Please <Link to="/" onClick={reloadPage}>go back</Link> to the home page.</p>
        </div>
        <p>Or</p>
        
        <button className="btn btn-primary" onClick={reloadPage}>
                Go To Home
        </button>
        
    </div>
        
    );
}
