import React from 'react';
import { useForm } from 'react-hook-form';
import ActivityServices from '../../services/ActivityServices';
import { toast } from 'react-toastify';

export default function AddActivity() {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const sendData = async (d) => {
    try {
      const data = await ActivityServices.addActivity(d);
      toast.success(`Activity Added Successfully, ID: ${data.data.activityId}`, {
        autoClose: false,
      });
      reset(); // Assuming reset function is defined somewhere
    } catch (error) {
      console.error("Error adding Activity:", error);
      toast.error("Failed to add Activity");
    }
  }

  return (
    <div className="signup-container">
    <h2 style={{ marginLeft: '25%', position: 'relative' }}>Add New Activity</h2>
      <form onSubmit={handleSubmit(sendData)}>
      <div className="form-row">

        <label htmlFor="activityId">Activity Id</label>
        <input type="text"  {...register('activityId', { required: 'Activity Id Is Required' })} placeholder={"Activity Id"} />
        {errors.activityId && <p style={{ color: 'red' }}>{errors.activityId.message}</p>}
        <br />
      
        <label htmlFor="activityName">Activity Name</label>
        <input type="text"  {...register('activityName', { required: 'Activity Name Is Required' })} placeholder={"Activity Name"} />
        {errors.activityName && <p style={{ color: 'red' }}>{errors.activityName.message}</p>}
        <br />
    
        <label htmlFor="Activity Description">Activity Description</label>
        <input type="text"  {...register('activityDetails', { required: 'Activity Description Is Required' })} placeholder={"Activity Description"} />
        {errors.activityDetails && <p style={{ color: 'red' }}>{errors.activityDetails.message}</p>}
        <br />

        <label>Activity Created By</label>
        <input type="text" {...register('activityCreatedBy', { required: 'Created By Is Required' })} placeholder={"Activity Created By"} />
        {errors.activityCreatedBy && <p style={{ color: 'red' }}>{errors.activityCreatedBy.message}</p>}
        <br />

        <label>Activity isActive</label>
        <input type="text" {...register('isActive', { required: 'Activity Restrictions Is Required' })} placeholder={"Activity is Active"} />
        {errors.isActive && <p style={{ color: 'red' }}>{errors.isActive.message}</p>}
        <br />

        <label></label>
        <input type="submit" value={"Add Activity"}  />
        <br/>
        <label></label>
        <input type="reset" value={"Reset"}  />
        </div>
      </form>
    </div>
  )
}
