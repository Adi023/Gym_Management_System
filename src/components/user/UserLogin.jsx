import React from 'react'

export default function UserLogin() {
  return (
    <div style={{padding:"70px"}}>
        <div id="login" >
        <form style={{alignSelf:'center',position:'relative'}}>
            <label>Login ID : </label>
            <input type="text" placeholder={"Enter Login Id"}/><br/>
            <label>Password : </label>
            <input type="text" placeholder={"Enter Password"}/><br/>
            <label></label>
            <input type="button" value={"LOGIN"}/>
        </form>
        </div>
    </div>
  )
}
