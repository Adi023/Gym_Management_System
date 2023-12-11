import React from 'react'
import { useForm } from 'react-hook-form'
import AdminServices from'../../services/AdminServices';
import Admin from '../Admin';

export default function AddAdmin() {
  const {register,handleSubmit}=useForm();

  const sendData=(d)=>{
    AdminServices.addADmin (d);
    alert("Admin Added Successfully")
  }

  return (
    <><Admin/>
    <div id='fb'>
    <div style={{marginLeft:"15%" , position:'relative'}}>
    <h2 style={{marginLeft:"15%" , position:'relative'}}>Add Admin</h2>
      <form onSubmit={handleSubmit(sendData)} style={{alignSelf:'center',position:'relative'}}>
        <label>ID : </label>
        <input type='text' {...register('admin_id')} placeholder={"Enter ID"} required/><br/>

        <label>Name : </label>
        <input type='text' {...register('admin_name')} placeholder={"Enter Name"} required/><br/>

        <label>Password : </label>
        <input type='text' {...register('admin_password')} placeholder={"Enter Password"} required/><br/>

       
        <label></label>
        <input type='submit' className='btn btn-success mx-2'/>
        {/* <button className='btn btn-primary mx-2'>Hi</button> */}

      </form>
      </div>
    </div>
    </>
  )
}
