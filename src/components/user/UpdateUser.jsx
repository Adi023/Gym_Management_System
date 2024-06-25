import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import UserServices from '../../services/UserServices';
import { toast } from 'react-toastify';
import { useParams, useNavigate } from 'react-router';

export default function UpdateUser() {

  const { register, handleSubmit, formState: { errors } , setValue } = useForm();
  const { userId } = useParams();
  const navigate = useNavigate(); // Get navigate function for navigation
  const sendData = async (d) => {
    try {
      const data = await UserServices.updateUser(d); 
      toast.success(`User Updated Successfully for ID : ${data.data.userId}`);

      navigate(`/viewUsers`);
    } catch (error) {
      console.error("Error Updating User:", error);
      toast.error("Failed to Update User");
    }
  }

  console.log(userId)
  const getUser = async (userId) => {
    try {
      const response = await UserServices.getUserById(userId);
      // Set form values using setValue
      setValue('userId', response.data.userId);
      setValue('name', response.data.name);
      setValue('email', response.data.email);
      setValue('password', response.data.password);
      setValue('mobile', response.data.mobile);
      setValue('address', response.data.address);
      setValue('city_Id', response.data.city_Id);
      setValue('dateOfJoining', response.data.dateOfJoining);
      setValue('dob', response.data.dob);
      setValue('active', response.data.active);
      setValue('gender', response.data.gender);
      setValue('bloodGroup', response.data.bloodGroup);
      setValue('role_Id', response.data.role_Id);
    } catch (error) {
      console.error("Error fetching User:", error);
    }
  };

  useEffect(() => {
   getUser(userId);
  },[]);

  return (
    <div className="signup-container ">
    <h2 style={{ marginLeft: '25%', position: 'relative' }}>Add New User</h2>
      <form onSubmit={handleSubmit(sendData)} autoComplete="nope">

      <div className="form-row">

        <label htmlFor="inputPassword4">Name</label>
        <input type="text" {...register('name', { required: 'Name Is Required' })} placeholder={"Name"} />
        {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
        <br />
    
        <label>Password</label>
        <input type="password" {...register('password', { required: 'Password Is Required' })} 
        placeholder={"Password"} 
        autoComplete="new-password"
        />
        <br />

        <label>Mobile</label>
        <input type="text" {...register('mobile', { required: 'Mobile Number Is Required',
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: 'Please enter a valid 10-digit mobile number',
                },
                minLength :{
                  value: 10,
                  message: 'Mobile number must not less than 10 digits',
                },
                maxLength: {
                    value: 10,
                    message: 'Mobile number must not exceed 10 digits',
                }
                })} placeholder={"Mobile"} />
        {errors.mobile && <p style={{ color: 'red' }}>{errors.mobile.message}</p>}
        <br />

        <label>Address</label>
        <input type="text" {...register('address', { required: 'Address Is Required' })} placeholder={"Address"} />
        {errors.address && <p style={{ color: 'red' }}>{errors.address.message}</p>}
        <br />

        <label>Date Of Birth</label>
        <input type="date" {...register('dob', { required: 'DATE OF BIRTH is required' })} placeholder={"Date Of Birth"} />
        {errors.dob && <p style={{ color: 'red' }}>{errors.dob.message}</p>}
        <br />

        {/* <label>Active</label> */}
        <input type="hidden" {...register('active', { required: 'active is required' })} placeholder={"Active"} />
        {errors.active && <p style={{ color: 'red' }}>{errors.active.message}</p>}
        {/* <br /> */}

        <label>Blood Group</label>
        <select {...register('bloodGroup', { required: 'Blood Group is required' })}>
          <option value="">Select Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>
        {errors.bloodGroup && <p style={{ color: 'red' }}>{errors.bloodGroup.message}</p>}
        <br />

        <label></label>
        <input type="submit" value={"Register"} placeholder={"Register"} />
        <br/>
        <label></label>
        <input type="reset" value={"Reset"} placeholder={"Reset"} />

        </div>
      </form>

    </div>
  )
}