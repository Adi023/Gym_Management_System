import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import PlanServices from '../../services/PlanServices';
import { toast } from 'react-toastify';
import { useParams, useNavigate } from 'react-router';


export default function UpdatePlan(props) {

  const { register, handleSubmit, formState: { errors } , setValue } = useForm();
  const { planId } = useParams();
  const navigate = useNavigate(); // Get navigate function for navigation
  const sendData = async (d) => {
    try {
      const data = await PlanServices.updatePlan(d); 
      toast.success(`Plan Updated Successfully for ID : ${data.data.planId}`);

      navigate(`/viewPlan`);
    } catch (error) {
      console.error("Error Updating plan:", error);
      toast.error("Failed to Update plan");
    }
  }

  console.log(planId)
  const getPlan = async (planId) => {
    try {
      const response = await PlanServices.getPlanById(planId);
      // Set form values using setValue
      setValue('planId', response.data.planId);
      setValue('planName', response.data.planName);
      setValue('planDescription', response.data.planDescription);
      setValue('planPrice', response.data.planPrice);
      setValue('planBillngCycle', response.data.planBillngCycle);
      setValue('planRestrictions', response.data.planRestrictions);
      setValue('planDiscount', response.data.planDiscount);
    } catch (error) {
      console.error("Error fetching plan:", error);
    }
  };

  useEffect(() => {
   getPlan(planId);
  },[]);
 
  return (
    <div className="signup-container">
    <h2 style={{ marginLeft: '25%', position: 'relative' }}>Add New Plan</h2>
      <form onSubmit={handleSubmit(sendData)}>
      <div className="form-row">

        <label htmlFor="planId">Plan Id</label>
        <input type="text"  {...register('planId', { required: 'Plan Id Is Required' })}
        placeholder={"Plan Id"} />
        {errors.planId && <p style={{ color: 'red' }}>{errors.planId.message}</p>}
        <br />
      
        <label htmlFor="planName">Plan Name</label>
        <input type="text"  {...register('planName', { required: 'Plan Name Is Required' })}
        placeholder={"Plan Name"} />
        {errors.planName && <p style={{ color: 'red' }}>{errors.planName.message}</p>}
        <br />
    
        <label htmlFor="Plan Description">Plan Description</label>
        <input type="text"  {...register('planDescription', { required: 'Plan Description Is Required' })}
        placeholder={"Plan Description"} />
        {errors.planDescription && <p style={{ color: 'red' }}>{errors.planDescription.message}</p>}
        <br />
    
        <label htmlFor="planPrice">Plan Price</label>
        <input type="number"  {...register('planPrice', { required: 'Plan Price Is Required' })}
        placeholder={"Plan Price"} />
        {errors.planPrice && <p style={{ color: 'red' }}>{errors.planPrice.message}</p>}
        <br />

        <label>Billng Cycle</label>
        <input type="number" {...register('planBillngCycle', { required: 'Billng Cycle Is Required' })}
        placeholder={"Billng Cycle"} />
        {errors.planBillngCycle && <p style={{ color: 'red' }}>{errors.planBillngCycle.message}</p>}
        <br />

        <label>Plan Restrictions</label>
        <input type="text" {...register('planRestrictions', { required: 'Plan Restrictions Is Required' })}
        placeholder={"Plan Restrictions"} />
        {errors.planRestrictions && <p style={{ color: 'red' }}>{errors.planRestrictions.message}</p>}
        <br />

        <label>Plan Discount</label>
        <input type="text" {...register('planDiscount', { required: 'Plan Discount Is Required' })}
        placeholder={"Plan Discount"} />
        {errors.planDiscount && <p style={{ color: 'red' }}>{errors.planDiscount.message}</p>}
        <br />

        <label></label>
        <input type="submit" value={"Update Plan"}  />
        <br/>

        </div>
      </form>
    </div>
  )
}
