import React from 'react'

// import './Header.css'

export default function Member() {
  return (
    <div>

<ul className="nav nav-underline">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/MemberLogin">MemberLogin</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/AddMember">AddMember</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/UpdateMember">UpdateMember</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/ViewMember">ViewMember</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true" href='/'>Disabled</a>
        </li>
      </ul>
       
    </div>
  )
}
