import React from 'react'
import { useForm } from 'react-hook-form';

export default function AddUser() {
  const {register,handleSubmit, formState: { errors },reset}=useForm();
  return (
    <div>AddUser
      <form>
        <label>User Id</label>
        <input type="text" placeholder={"userId"} />
         {errors.userId && <p style={{ color: 'red' }}>{errors.userId.message}</p>}
        <br/>

        <label>Name</label>
        <input type="text" placeholder={"name"} />
         {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
        <br/>

        <label>Email</label>
        <input type="text" placeholder={"email"} />
         {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
        <br/>

        <label>Password</label>
        <input type="text" placeholder={"password"} />
         {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
        <br/>

        {/* <label></label>
        <input type="text" placeholder={"re-enter password"} />
         {errors. && <p style={{ color: 'red' }}>{errors..message}</p>}
        <br/> */}

        <label>Mobile</label>
        <input type="text" placeholder={"mobile"} />
         {errors.mobile && <p style={{ color: 'red' }}>{errors.mobile.message}</p>}
        <br/>

        <label>Address</label>
        <input type="text" placeholder={"address"} />
         {errors.address && <p style={{ color: 'red' }}>{errors.address.message}</p>}
        <br/>

        <label>City</label>
        <input type="text" placeholder={"city_Id"} />
         {errors.city_Id && <p style={{ color: 'red' }}>{errors.city_Id.message}</p>}
        <br/>

        <label>Date Of Joining</label>
        <input type="date" placeholder={"date_of_joining"} />
         {errors.date_of_joining && <p style={{ color: 'red' }}>{errors.date_of_joining.message}</p>}
        <br/>

        <label>Date Of Birth</label>
        <input type="date" placeholder={"dob"} />
         {errors.dob && <p style={{ color: 'red' }}>{errors.dob.message}</p>}
        <br/>

        <label>Active</label>
        <input type="text" placeholder={"active"} />
         {errors.active && <p style={{ color: 'red' }}>{errors.active.message}</p>}
        <br/>

        <label>Gender</label>
        <input type="text" placeholder={"gender"} />
         {errors.gender && <p style={{ color: 'red' }}>{errors.gender.message}</p>}
        <br/>

        <label>Blood Group</label>
        <input type="text" placeholder={"bloodGroup"} />
         {errors.bloodGroup && <p style={{ color: 'red' }}>{errors.bloodGroup.message}</p>}
        <br/>

        <label>Role</label>
        <input type="text" placeholder={"USER"}  defaultValue={10}/>
         {errors.role_Id && <p style={{ color: 'red' }}>{errors.role_Id.message}</p>}
        <br/>

        <label></label>
        <input type="button" value={"Register"} placeholder={"Register"} />
      </form>
    </div>
  )
}
