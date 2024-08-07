import React from 'react';
import { useForm } from 'react-hook-form';
import ActivityScheduleServices from '../../services/ActivityScheduleServices';
import { toast } from 'react-toastify';

export default function ScheduleActivity() {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const sendData = async (d) => {
    try {
      const data = await ActivityScheduleServices.scheduleActivity(d);
      toast.success(`Activity Scheduled Successfully, ID: ${data.data.id}`);
      reset(); // Assuming reset function is defined somewhere
    } catch (error) {
      console.error("Error Scheduling Activity:", error);
      toast.error("Failed to Schedule Activity");
    }
  }

  return (
    <div className="signup-container">
    <h2 style={{ marginLeft: '25%', position: 'relative' }}>Schedule Activity</h2>
      <form onSubmit={handleSubmit(sendData)}>
      <div className="form-row">

        <label htmlFor="scheduleId">Schedule Id</label>
        <input type="text"  {...register('id', { required: 'Schedule Id Is Required' })} placeholder={"Schedule Schedule Id"} />
        {errors.id && <p style={{ color: 'red' }}>{errors.id.message}</p>}
        <br />
      
        <label htmlFor="activityName">Activity Name</label>
        <input type="number"  {...register('activityId', { required: 'Activity Name Is Required' })} placeholder={"Activity Name"} />
        {errors.activity && <p style={{ color: 'red' }}>{errors.activityId.message}</p>}
        <br />
    
        <label htmlFor="Activity trainer">Trainer</label>
        <input type="text"  {...register('userId', { required: 'Activity trainer Is Required' })} placeholder={"Activity trainer"} />
        {errors.trainer && <p style={{ color: 'red' }}>{errors.userId.message}</p>}
        <br />

        <label>Details</label>
        <textarea type="text" {...register('details', { required: 'details Is Required' })} placeholder={"Activity details"} />
        {errors.details && <p style={{ color: 'red' }}>{errors.details.message}</p>}
        <br />

        <label>Organized Date</label>
        <input type="date" {...register('organizedDate', { required: 'Organized Date Is Required' })} placeholder={"Activity organized Date"} />
        {errors.organizedDate && <p style={{ color: 'red' }}>{errors.organizedDate.message}</p>}
        <br />

        <label>Activity duration</label>
        <input type="number" {...register('durationMinutes', { required: 'duration Is Required' })} placeholder={"Activity duration"} />
        {errors.durationMinutes && <p style={{ color: 'red' }}>{errors.durationMinutes.message}</p>}
        <br />

        {/* <label>Activity isActive</label> */}
        <input type="hidden" {...register('isActive', { required: 'Activity Restrictions Is Required' })} placeholder={"Activity is Active"}  defaultValue={true}/>
        {errors.isActive && <p style={{ color: 'red' }}>{errors.isActive.message}</p>}

        <label></label>
        <input type="submit" value={"Schedule Activity"}  />
        <br/>
        <label></label>
        <input type="reset" value={"Reset"}  />
        </div>
      </form>
    </div>
  )
}
