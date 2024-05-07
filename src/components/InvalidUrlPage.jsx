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
            <h1>Error</h1>
            <p>Invalid Url..!!</p>
            <button className="btn btn-primary" onClick={reloadPage}>
                Go To Home
            </button>
        </div>
        
    );
}
