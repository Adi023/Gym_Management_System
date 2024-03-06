import React from 'react'

// import './Header.css'

export default function Admin() {
  return (
    <div> 
  

      <ul className="nav nav-underline">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/AddAdmin">AddAdmin</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="UpdateAdmin">UpdateAdmin</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="ViewAdmin">ViewAdmin</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="AdminLogin">AdminLogin</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="AdminDashBoard">Admin Dashboard</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true" href='/'>Disabled</a>
        </li>
      </ul>
  </div>
  )
}
