import React from 'react';
import { useForm } from 'react-hook-form';
import ActivityMapperServices from '../../services/ActivityMapperServices';
import { toast } from 'react-toastify';

export default function Participation() {
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const sendData = async (d) => {
    try {
      const data = await ActivityMapperServices.addMapperActivity(d);
      toast.success(`Activity Participation Successfully, ID: ${data.data.id}`);
      reset(); // Assuming reset function is defined somewhere
    } catch (error) {
      console.error("Error Participation Activity:", error);
      toast.error("Failed to Participation in Activity");
    }
  }

  return (
    <div className="signup-container">
    <h2 style={{ marginLeft: '25%', position: 'relative' }}>Schedule Activity</h2>
      <form onSubmit={handleSubmit(sendData)}>
      <div className="form-row">

        {/* <label htmlFor="activityId">Participation Id</label>
        <input type="text"  {...register('id', { required: 'Participation Id Is Required' })} placeholder={"Participation Id"} />
        {errors.id && <p style={{ color: 'red' }}>{errors.id.message}</p>}
        <br /> */}
      
        <label htmlFor="userId">User Id</label>
        <input type="text"  {...register('userId', { required: 'User Id Is Required' })} placeholder={"User Id"} />
        {errors.user && <p style={{ color: 'red' }}>{errors.user.message}</p>}
        <br />
    
        <label htmlFor="Activity ScheduleId">Schedule</label>
        <input type="text"  {...register('sheduleId', { required: 'Activity Schedule Id Is Required' })} placeholder={"Activity Schedule Id"} />
        {errors.scheduleId && <p style={{ color: 'red' }}>{errors.sheduleId.message}</p>}
        <br />

        <label htmlFor="Activity register Date">Register Date</label>
        <input type="date"  {...register('registerDate', { required: 'Activity register Date Is Required' })} placeholder={"Activity register Date"} />
        {errors.registerDate && <p style={{ color: 'red' }}>{errors.registerDate.message}</p>}
        <br />

        {/* <label>Activity isActive</label> */}
        <input type="hidden" defaultValue={false} {...register('attended', { required: 'Activity Restrictions Is Required' })} placeholder={"Activity is Active"}  />
        {errors.attended && <p style={{ color: 'red' }}>{errors.attended.message}</p>}

        <label></label>
        <input type="submit" value={"Participate in Activity"}  />
        <br/>
        <label></label>
        <input type="reset" value={"Reset"}  />
        </div>
      </form>
    </div>
  )
}
