import React from 'react'
import Member from '../Member'

export default function MemberLogin() {
  return (
    <><Member/>
    <div id='fb'>
    <div style={{marginLeft:"15%" , position:'relative'}}>
    <h2 style={{marginLeft:"15%" , position:'relative'}}>Member Login</h2>
    <form style={{alignSelf:'center',position:'relative'}}>
      <label>ID :</label>
      <input type='text'  placeholder={"Enter ID"} required/><br/><br/>
      <label>Password :</label>
      <input type='password'  placeholder={"Enter password"} required/><br/><br/>
      <label></label>
      <input type='submit'/>
    </form>
    </div>
    </div>
    </>
  )
}
