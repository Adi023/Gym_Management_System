import React from 'react'

import './Header.css'

export default function Member() {
  return (
    <div>

<ul class="nav nav-underline">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="MemberLogin">MemberLogin</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="AddMember">AddMember</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="UpdateMember">UpdateMember</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="ViewMember">ViewMember</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      {/* <ul>
        <li> <a href='/AddMember'>Add Member</a></li>
        <li> <a href='/UpdateMember'>Update Member</a></li>
        <li> <a href='/ViewMember'>View Member</a></li>
        <li> <a href='/MemberLogin'>Member Login</a></li>
      </ul> */}
       
    </div>
  )
}
