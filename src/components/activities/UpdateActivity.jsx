import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import ActivityServices from '../../services/ActivityServices';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

export default function UpdateActivity() {
  const { register, handleSubmit, formState: { errors } , setValue } = useForm();
  const { activityId } = useParams();
  const navigate = useNavigate();

  const updateData = async (d)=>{
    try{
      const data= await ActivityServices.updateActivityDetails(d);
      console.log("Activity Update Data : "+data)
      toast.success("Activity updated succesfully");
      navigate('/viewActivities')
    }catch(error){
      console.error("Error updating activity : "+error);
      toast.error("Failed to Update Activity");
    }
  }

  const cancleUpdate = async()=>{
    navigate('/viewActivities');
    toast.info("Activity updation canceled")
  }

  const getActivity = async (activityId)=>{
   try{
    const response = await ActivityServices.viewActivityById(activityId);
    setValue('activityId',response.data.activityId);
    setValue('activityName',response.data.activityName);
    setValue('activityDetails',response.data.activityDetails);
    setValue('active',response.data.active);
    setValue('activityCreatedBy',response.data.activityCreatedBy);
   }
   catch(error){
    console.error("Error fetching activity : "+error)
   }
  }

  const role = useSelector((state) => state.role);

  useEffect(() => {
    getActivity(activityId);
   },[]);
  return (
    <div className="signup-container">
    <h2 style={{ marginLeft: '25%', position: 'relative' }}>Update Activity</h2>
      <form onSubmit={handleSubmit(updateData)}>
      <div className="form-row">
      
        <label htmlFor="activityName">Activity Name</label>
        <input type="text"  {...register('activityName', { required: 'Activity Name Is Required' })} placeholder={"activityName"} />
        {errors.activityName && <p style={{ color: 'red' }}>{errors.activityName.message}</p>}
        <br />
    
        <label htmlFor="Activity Description">Activity Description</label>
        <input type="text"  {...register('activityDetails', { required: 'Activity Description Is Required' })} placeholder={"activityDetails"} />
        {errors.activityDetails && <p style={{ color: 'red' }}>{errors.activityDetails.message}</p>}
        <br />

        <label>Activity Created By</label>
        <input type="text" {...register('activityCreatedBy', { required: 'Created By Is Required' })} placeholder={"activityCreatedBy"} />
        {errors.activityCreatedBy && <p style={{ color: 'red' }}>{errors.activityCreatedBy.message}</p>}
        <br />

        {role === 'admin' && (
            <>
        <label>Activity Status</label>
        <select {...register('active', { required: 'Activity Status Is Required' })} placeholder={"active"} >
          <option value="">Select Status</option>
          <option value='true'>Active</option>
          <option value='false'>Inactive</option>
          </select>
          {errors.active && <p style={{ color: 'red' }}>{errors.active.message}</p>}
          <br />
          </>
          )}

        <label></label>
        <input type="submit" value={"Update Activity"}  class="btn btn-success"/>
        <br/>
        <label></label>
        <input type="button" value={"Cancle Update"} class="btn btn-danger" onClick={cancleUpdate}/>
        </div>
      </form>
    </div>
  )
}
