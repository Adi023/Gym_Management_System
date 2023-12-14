import React from 'react'

import './Header.css'

export default function Admin() {
  return (
    <div> 
  {/* <ul>
    <li> <a href='/AddAdmin'>Add Admin</a></li>
    <li> <a href='/UpdateAdmin'>Update Admin</a></li>
    <li> <a href='/ViewAdmin'>View Admin</a></li>
    <li> <a href='/AdminLogin'>Admin Login</a></li>
  </ul> */}

      <ul className="nav nav-underline">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="AddAdmin">AddAdmin</a>
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
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
  </div>
  )
}
