import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <>
      <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='/AdminLogin'>Admin</a></li>
        <li><a href='MemberLogin'>Member</a>
          {/* <a href="javascript:void(0)" class="dropbtn">Dropdown</a>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div> */}
        </li>
      </ul>
    </>
  )
}
