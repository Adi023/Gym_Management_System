import React,{useState,useEffect} from 'react'
import { useForm } from 'react-hook-form'
import MemberServices from '../../services/MemberServices';

export default function UpdateMember() {
  const {register,handleSubmit}=useForm();

  const sendData=(d)=>{
    MemberServices.addMember(d);
    alert("Member Added Successfully")
  }

  const [data, setData] = useState([]);

  const viewMembers = () => {
    MemberServices.viewMember().then(
      (Response) => {
        console.log(Response.data);
        setData(Response.data);
      }, (Error) => {
        console.log(Error);
      }

    )
  }
  useEffect(() => {
    viewMembers()
  }, []);

  return (
    <div id='fb'>
    <div style={{marginLeft:"15%" , position:'relative'}}>
    <h2 style={{marginLeft:"15%" , position:'relative'}}>Update Member</h2>
      <form onSubmit={handleSubmit(sendData)} style={{alignSelf:'center',position:'relative'}}>
        <label>ID : </label>
        <input type='text' {...register('member_id')} defaultValue={data.member_id}  placeholder={data.member_id} required/><br/>

        <label>Name : </label>
        <input type='text' {...register('member_name')} defaultValue={data.member_name}  placeholder={data.member_name} required/><br/>

        <label>Password : </label>
        <input type='text' {...register('member_password')} defaultValue={data.member_password}  placeholder={data.member_password} required/><br/>

        <label>Address : </label>
        <input type='text' {...register('member_address')} defaultValue={data.member_address}  placeholder={data.member_address} required/><br/>

        <label>Mobile Number : </label>
        <input type='text' {...register('member_mob_no')} defaultValue={data.member_mob_no}  placeholder={data.member_mob_no} required/><br/>

        <label>Email Id : </label>
        <input type='text' {...register('member_email')} defaultValue={data.member_email}  placeholder={data.member_email} required/><br/>

        <label>Gender : </label>
        <input type='text' {...register('member_gender')} defaultValue={data.member_gender}  placeholder={data.member_gender} required/><br/>

        <label>Date of Birth : </label>
        <input type='text' {...register('member_DOB')} defaultValue={data.member_DOB}  placeholder={data.member_DOB} required/><br/>

        <label>Date Of Joining : </label>
        <input type='text' {...register('member_DOJoining')} defaultValue={data.member_DOJoining}  placeholder={data.member_DOJoining} required/><br/>

        <label>Active Status : </label>
        <input type='text' {...register('member_status')} defaultValue={data.member_status}  placeholder={data.member_status} required/><br/>

        <label></label>
        <input type='submit' className='btn btn-success mx-2'/>
        {/* <button className='btn btn-primary mx-2'>Hi</button> */}

      </form>
      </div>
    </div>
  )
}
