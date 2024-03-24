import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import UserServices from '../../services/UserServices'

export default function AddUser() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const sendData = (d) => {
    UserServices.addUser(d);
    console.log(d);
    alert("User Added Successfully")
    reset();
  }

  const [minDate, setMinDate] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    setIsValidEmail(validateEmail(value));
  };

  const validateEmail = (email) => {
    // Regular expression for validating email addresses
    // const regex = /^[a-z][-a-z._]+@([-a-z]+\\.)+[a-z]{2,5}$/;
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;

    return regex.test(email);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordsMatch(e.target.value === password);
  };

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    // Add leading zeros if month or day is less than 10
    if (month < 10) {
      month = '0' + month;
    }
    if (day < 10) {
      day = '0' + day;
    }

    const formattedDate = `${year}-${month}-${day}`;
    setMinDate(formattedDate);
  }, []);

  return (
    <div  style={{ marginLeft: '25%', position: 'relative' }}>
    <h2 style={{ marginLeft: '25%', position: 'relative' }}>Sign UP</h2>
      <form onSubmit={handleSubmit(sendData)}>

      <div className="form-row">
     
      {/* <div className="form-group col-md-6"> */}
        <label for="exampleInputEmail1">User Id</label>
        <input type="text"  {...register('userId', { required: 'User Id Is Required' })} placeholder={"User Id"} />
        {errors.userId && <p style={{ color: 'red' }}>{errors.userId.message}</p>}
        <br />
      {/* </div> */}

      {/* <div className="form-group col-md-6"> */}
        <label for="inputPassword4">Name</label>
        <input type="text" {...register('name', { required: 'Name Is Required' })} placeholder={"Name"} />
        {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
        <br />
      {/* </div> */}
        <label>Email</label>
        <input type="email" {...register('email', { required: 'Email Is Required' })}
        // value={email}
        onChange={handleEmailChange}
        placeholder={"Email"} />
        {!isValidEmail && <p style={{ color: 'red' }}>Please enter a valid email address</p>}
        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
        <br />

        <label>Password</label>
        <input type="password" {...register('password', { required: 'Password Is Required' })} placeholder={"Password"} 
        onChange={handlePasswordChange}
        /><br />
        <label>Confirm Password</label>
        <input type="password" 
        // value={confirmPassword} 
        required  placeholder={"Confirm Password"} 
        onChange={handleConfirmPasswordChange}
        />
        {!passwordsMatch && <p style={{ color: 'red' }}>Passwords do not match</p>}
        {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
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

        <label>City</label>
        <select {...register('city_Id', { required: 'City Is Required' })}>
          <option value="">Select City</option>
          <option value="1">MUMBAI</option>
          <option value="2">NOIDA</option>
        </select>
        {errors.city_Id && <p style={{ color: 'red' }}>{errors.city_Id.message}</p>}
        <br />

        <label>Date Of Joining</label>
        <input type="date" {...register('date_of_joining', { required: 'date_of_joining is required' })}
         placeholder={"Date Of Joining"} 
         min={minDate}
         />
        {errors.date_of_joining && <p style={{ color: 'red' }}>{errors.date_of_joining.message}</p>}
        <br />

        <label>Date Of Birth</label>
        <input type="date" {...register('dob', { required: 'DATE OF BIRTH is required' })} placeholder={"Date Of Birth"} />
        {errors.dob && <p style={{ color: 'red' }}>{errors.dob.message}</p>}
        <br />

        {/* <label>Active</label> */}
        <input type="hidden" {...register('active', { required: 'active is required' })} placeholder={"Active"} defaultValue={true}/>
        {errors.active && <p style={{ color: 'red' }}>{errors.active.message}</p>}
        <br />

        <label>Gender</label>
        <input type="radio" value="Male"
          style={{ width: 'auto',marginTop:"8px",marginBottom:"8px" }}
          {...register('gender', { required: 'Gender is required' })} />
        <label >Male</label>

        <input type="radio" value="Female"
          style={{ width: 'auto',marginTop:"8px",marginBottom:"8px" }}
          {...register('gender', { required: 'Gender is required' })} />
        <label >Female</label>

        <input type="radio" value="Other"
          style={{ width: 'auto',marginTop:"8px"}}
          {...register('gender', { required: 'Gender is required' })} />
        <label>Other</label>
        {errors.gender && <p style={{ color: 'red' }}>{errors.gender.message}</p>}
        <br /><br/>
        
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

        {/* <label>Role</label> */}
        <input type="hidden" {...register('role_Id', { required: 'Role Id is required' })} placeholder={"USER"} defaultValue={10} />
        {errors.role_Id && <p style={{ color: 'red' }}>{errors.role_Id.message}</p>}
        <br />

        <label></label>
        <input type="submit" value={"Register"} placeholder={"Register"} /><br/>
        <label></label>
        <input type="reset" value={"Reset"} placeholder={"Reset"} />

        </div>
      </form>

    </div>
  )
}
