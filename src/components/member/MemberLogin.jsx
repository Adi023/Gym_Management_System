import React  from 'react'
import { useForm } from 'react-hook-form';
import Member from '../Member'

export default function MemberLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  return (
    <><Member />
      <div id='fb' style={{ marginTop: "7%" }}>
        <div style={{ marginLeft: "15%", position: 'relative' }}>
          <h2 style={{ marginLeft: "15%", position: 'relative' }}>Member Login</h2>
          <form style={{ alignSelf: 'center', position: 'relative' }}>
            <label>ID :</label>
            <input type='text' {...register('member_id', { required: 'ID is required' })} placeholder='Enter ID' />
            {errors.member_id && <p style={{ color: 'red' }}>{errors.member_id.message}</p>}
            <br />
            <label>Password :</label>
            <input type='password' {...register('member_password', { required: 'Password is required' })} placeholder='Enter Password' />
            {errors.member_password && <p style={{ color: 'red' }}>{errors.member_password.message}</p>}
            <br />
            <label/>
            <input type='submit' className='btn btn-success mx-2' />
          </form>
        </div>
      </div>
    </>
  )
}
