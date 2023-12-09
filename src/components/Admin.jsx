import React from 'react'

import './Header.css'

export default function Admin() {
  return (
    <div> 
  <ul>
    <li> <a href='/AddAdmin'>Add Admin</a></li>
    <li> <a href='/UpdateAdmin'>Update Admin</a></li>
    <li> <a href='/ViewAdmin'>View Admin</a></li>
    <li> <a href='/AdminLogin'>Admin Login</a></li>
  </ul>
  </div>
  )
}
