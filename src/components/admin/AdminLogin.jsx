import React from 'react'
import Admin from '../Admin'

export default function AdminLogin() {
  return (
    <><Admin/>
    <div id='fb' style={{marginTop:"7%"}}>
    <div style={{marginLeft:"15%" , position:'relative'}}>
    <h2 style={{marginLeft:"15%" , position:'relative'}}>Admin Login</h2>
    <form style={{alignSelf:'center',position:'relative'}}>
      <label>ID :</label>
      <input type='text'  placeholder={"Enter ID"} required/><br/>
      <label>Password :</label>
      <input type='password'  placeholder={"Enter Password"} required/><br/>
      <label></label>
      <input type='submit' className='btn btn-success mx-2'/>
    </form>
    </div>
    </div>
    </>
  )
}
