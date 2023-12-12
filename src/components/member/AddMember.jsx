import React from 'react'
import { useForm } from 'react-hook-form'
import MemberServices from '../../services/MemberServices';
import Member from '../Member';

export default function AddMember() {
  const {register,handleSubmit}=useForm();

  const sendData=(d)=>{
    MemberServices.addMember(d);
    alert("Member Added Successfully")
  }
  
  return (
    <>
      <Member />
    <div id='fb'>
    <div style={{marginLeft:"15%" , position:'relative'}}>
    <h2 style={{marginLeft:"15%" , position:'relative'}}>Add Member</h2>
      <form onSubmit={handleSubmit(sendData)} style={{alignSelf:'center',position:'relative'}}>
        <label>ID : </label>
        <input type='text' {...register('member_id')} placeholder={"Enter ID"} required/><br/>

        <label>Name : </label>
        <input type='text' {...register('member_name')} placeholder={"Enter Name"} required/><br/>

        <label>Password : </label>
        <input type='password' {...register('member_password')} placeholder={"Enter Password"} required/><br/>

        <label>Address : </label>
        <input type='text' {...register('member_address')} placeholder={"Enter Address"} required/><br/>

        <label>Mobile Number : </label>
        <input type='number' {...register('member_mob_no')} min={10} max={10} placeholder={"Enter Mobile Number"} required/><br/>

        <label>Email Id : </label>
        <input type='email' {...register('member_email')} placeholder={"Enter Emai-ID"} required/><br/>

        <label>Gender : </label>
        <input type='text' {...register('member_gender')} placeholder={"Enter Gender"} required/><br/>

        <label>Date of Birth : </label>
        <input type='date' {...register('member_DOB')} min={'1950-01-01'} placeholder={"Enter DOB"} required/><br/>

        <label>Date Of Joining : </label>
        <input type='date' {...register('member_DOJoining')} min={'2023-01-01'} placeholder={"Enter DOJoining"} required/><br/>

        <label>Active Status : </label>
        <input type='text' {...register('member_status')} placeholder={"Enter Satus"} required/><br/>

        <label></label>
        <input type='submit' className='btn btn-success mx-2'/>
        {/* <button className='btn btn-primary mx-2'>Hi</button> */}

      </form>
      </div>
    </div>
    </>
  )
}
