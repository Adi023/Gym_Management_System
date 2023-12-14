import React from 'react'
import { useForm } from 'react-hook-form'
import AdminServices from'../../services/AdminServices';
import Admin from '../Admin';

export default function AddAdmin() {
  const {register,handleSubmit, formState: { errors },reset}=useForm();

  const sendData=(d)=>{
    AdminServices.addADmin (d);
    alert("Admin Added Successfully")
    reset();
  }

  return (
    <><Admin/>
    <div id='fb'>
    <div style={{marginLeft:"15%" , position:'relative'}}>
    <h2 style={{marginLeft:"15%" , position:'relative'}}>Add Admin</h2>
      <form onSubmit={handleSubmit(sendData)} style={{alignSelf:'center',position:'relative'}}>
        <label>ID : </label>
        <input type='text' {...register('admin_id', { required: 'ID is required' })} placeholder={"Enter ID"} />
        {errors.admin_id && <p style={{ color: 'red' }}>{errors.admin_id.message}</p>}
            <br/>

        <label>Name : </label>
        <input type='text' {...register('admin_name', { required: 'Name is required' })} placeholder={"Enter Name"} />
        {errors.admin_name && <p style={{ color: 'red' }}>{errors.admin_name.message}</p>}<br/>

        <label>Password : </label>
        <input type='password' {...register('admin_password', { required: 'password is required' })} placeholder={"Enter Password"} />
        {errors.admin_password && <p style={{ color: 'red' }}>{errors.admin_password.message}</p>}<br/>

       
        <label></label>
        <input type='submit' className='btn btn-success mx-2'/>
        {/* <button className='btn btn-primary mx-2'>Hi</button> */}

      </form>
      </div>
    </div>
    </>
  )
}
