import React from 'react'
import { useForm } from 'react-hook-form';
import UserServices from '../../services/UserServices'

export default function AddEmployee() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const sendData = (d) => {
      UserServices.addUser(d);
      console.log(d);
      alert("User Added Successfully")
      reset();
    }
  return (
    <div className="signup-container">
    <h2 style={{ marginLeft: '25%', position: 'relative' }}>Sign UP</h2>
      <form onSubmit={handleSubmit(sendData)}>
      <div className="form-row">

        <label htmlFor="empId">Employee Id</label>
        <input type="text"  {...register('empId', { required: 'Employee Id Is Required' })} placeholder={"Employee Id"} />
        {errors.empId && <p style={{ color: 'red' }}>{errors.empId.message}</p>}
        <br />
      
        <label htmlFor="userId">User Id</label>
        <input type="text"  {...register('userId', { required: 'User Id Is Required' })} placeholder={"User Id"} />
        {errors.userId && <p style={{ color: 'red' }}>{errors.userId.message}</p>}
        <br />
    
        <label htmlFor="designation">Designation</label>
        <input type="text"  {...register('designation', { required: 'designation Is Required' })} placeholder={"Designation"} />
        {errors.designation && <p style={{ color: 'red' }}>{errors.designation.message}</p>}
        <br />

        <label>Salary</label>
        <input type="number" {...register('salary', { required: 'salary Is Required' })} placeholder={"salary"} />
        {errors.salary && <p style={{ color: 'red' }}>{errors.salary.message}</p>}
        <br />

        <label>Spcialization</label>
        <input type="text" {...register('spcialization', { required: 'spcialization Is Required' })} placeholder={"spcialization"} />
        {errors.spcialization && <p style={{ color: 'red' }}>{errors.spcialization.message}</p>}
        <br />

        <label>Certifications</label>
        <input type="text" {...register('certifications', { required: 'certifications Is Required' })} placeholder={"certifications"} />
        {errors.certifications && <p style={{ color: 'red' }}>{errors.certifications.message}</p>}
        <br />

        <label>Expertise</label>
        <input type="text" {...register('expertise', { required: 'expertise Is Required' })} placeholder={"expertise"} />
        {errors.expertise && <p style={{ color: 'red' }}>{errors.expertise.message}</p>}
        <br />

        {/* <label>City</label>
        <select {...register('city_Id', { required: 'City Is Required' })}>
          <option value="">Select City</option>
          <option value="1">MUMBAI</option>
          <option value="2">NOIDA</option>
        </select>
        {errors.city_Id && <p style={{ color: 'red' }}>{errors.city_Id.message}</p>}
        <br /> */}

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
