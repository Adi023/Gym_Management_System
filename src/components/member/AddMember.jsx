import React from 'react'
import { useForm } from 'react-hook-form'
import MemberServices from '../../services/MemberServices';

export default function AddMember() {
  const {register,handleSubmit}=useForm();

  const sendData=(d)=>{
    MemberServices.addMember(d);
    alert("Member Added Successfully")
  }
  return (
    <div>AddMember
      <form onSubmit={handleSubmit(sendData)}>
        <label>ID : </label>
        <input type='text' {...register('member_id')} placeholder={"Enter ID"} required/><br/>

        <label>Name : </label>
        <input type='text' {...register('member_name')} placeholder={"Enter Name"} required/><br/>

        <label>Password : </label>
        <input type='text' {...register('member_password')} placeholder={"Enter Password"} required/><br/>

        <label>Address : </label>
        <input type='text' {...register('member_address')} placeholder={"Enter Address"} required/><br/>

        <label>Mobile Number : </label>
        <input type='text' {...register('member_mob_no')} placeholder={"Enter Mobile Number"} required/><br/>

        <label>Email Id : </label>
        <input type='text' {...register('member_email')} placeholder={"Enter Emai-ID"} required/><br/>

        <label>Gender : </label>
        <input type='text' {...register('member_gender')} placeholder={"Enter Gender"} required/><br/>

        <label>Date of Birth : </label>
        <input type='text' {...register('member_DOB')} placeholder={"Enter DOB"} required/><br/>

        <label>Date Of Joining : </label>
        <input type='text' {...register('member_DOJoining')} placeholder={"Enter DOJ"} required/><br/>

        <label>Active Status : </label>
        <input type='text' {...register('member_status')} placeholder={"Enter Satus"} required/><br/>

        <label></label>
        <input type='submit' className='btn btn-success mx-2'/>
        {/* <button className='btn btn-primary mx-2'>Hi</button> */}

      </form>
    </div>
  )
}
