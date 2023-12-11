import React from 'react'

import './Header.css'

export default function Member() {
  return (
    <div>
      <ul>
        <li> <a href='/AddMember'>Add Member</a></li>
        <li> <a href='/UpdateMember'>Update Member</a></li>
        <li> <a href='/ViewMember'>View Member</a></li>
        {/* <li> <a href='/ViewMemberById'>View Member By Id</a></li> */}
        <li> <a href='/MemberLogin'>Member Login</a></li>
      </ul>
       
    </div>
  )
}
