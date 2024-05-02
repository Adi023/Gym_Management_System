import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function InvalidUrlPage() {
    const navigate = useNavigate();

    const reloadPage = () => {
        navigate("/");
        window.location.reload();
       
    };const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        // <div className="container text-center mt-5">
        //     <h1>Error</h1>
        //     <p>Invalid Url..!!</p>
        //     <button className="btn btn-primary" onClick={reloadPage}>
        //         Go To Home
        //     </button>
        // </div>
        <>
         <div>
            {/* Link to toggle dropdown */}
            <Link to="/" onClick={toggleSidebar}>Toggle Dropdown</Link>
            
            {/* Dropdown menu */}
            <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
                <li><Link to="/">Option 1</Link></li>
                <li><Link to="/">Option 2</Link></li>
            </ul>
        </div>
        </>
    );
}
