import React from 'react';
import { useForm } from 'react-hook-form';
import MemberServices from '../../services/MemberServices';
import Member from '../Member';

export default function AddMember() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const sendData = (data) => {
    MemberServices.addMember(data);
    alert('Member Added Successfully');
    reset();
  };

  return (
    <>
      <Member />
      <div id='fb'>
        <div style={{ marginLeft: '15%', position: 'relative' }}>
          <h2 style={{ marginLeft: '15%', position: 'relative' }}>Add Member</h2>
          <form onSubmit={handleSubmit(sendData)} style={{ alignSelf: 'center', position: 'relative' }}>
            <label>ID :</label>
            <input type='text' {...register('member_id', { required: 'ID is required' })} placeholder='Enter ID' />
            {errors.member_id && <p style={{ color: 'red' }}>{errors.member_id.message}</p>}
            <br/>

            <label>Name :</label>
            <input type='text' {...register('member_name', { required: 'Name is required' })} placeholder='Enter Name' />
            {errors.member_name && <p style={{ color: 'red' }}>{errors.member_name.message}</p>}
            <br />

            <label>Password :</label>
            <input type='password' {...register('member_password', { required: 'Password is required' })} placeholder='Enter Password' />
            {errors.member_password && <p style={{ color: 'red' }}>{errors.member_password.message}</p>}
            <br />

            <label>Address :</label>
            <input type='text' {...register('member_address', { required: 'Address is required' })} placeholder='Enter Address' />
            {errors.member_address && <p style={{ color: 'red' }}>{errors.member_address.message}</p>}
            <br />

            <label>Mobile Number :</label>
            <input
              type='tel'
              {...register('member_mob_no', {
                required: 'Mobile Number is required',
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: 'Please enter a valid 10-digit mobile number',
                },
              })}
              placeholder='Enter Mobile Number'
            />
            {errors.member_mob_no && <p style={{ color: 'red' }}>{errors.member_mob_no.message}</p>}
            <br />

            <label>Email Id :</label>
            <input type='email' {...register('member_email', { required: 'Email ID is required' })} placeholder='Enter Email-ID' />
            {errors.member_email && <p style={{ color: 'red' }}>{errors.member_email.message}</p>}
            <br />

            {/* Add validations for other fields as needed */}
            <label>Gender : </label>
            <input type='text' {...register('member_gender')} placeholder={"Enter Gender"} required /><br />

            <label>Date of Birth : </label>
            <input type='date' {...register('member_DOB')} min={'1950-01-01'} placeholder={"Enter DOB"} required /><br />

            <label>Date Of Joining : </label>
            <input type='date' {...register('member_DOJoining')} min={'2023-01-01'} placeholder={"Enter DOJoining"} required /><br />

            <label>Active Status : </label>
            <input type='text' {...register('member_status')} placeholder={"Enter Satus"} required /><br />

            <label></label>
            <input type='submit' className='btn btn-success mx-2' />
          </form>
        </div>
      </div>
    </>
  );
}
