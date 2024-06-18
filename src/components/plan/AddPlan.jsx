import React from 'react'
import { useForm } from 'react-hook-form';
import PlanServices from '../../services/PlanServices';
import { toast } from 'react-toastify';

export default function AddPlan() {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const sendData = async (d) => {
    try {
      // Assuming PlanServices.addPlan returns the ID of the newly added plan
      const data = await PlanServices.addPlan(d);
      
      // console.log(data.data.planId);
      // console.log("New plan ID:", data.data.planId);
      
      toast.success(`Plan Added Successfully, ID: ${data.data.planId}`, {
        autoClose: false,
       
      });
      
      reset(); // Assuming reset function is defined somewhere
    } catch (error) {
      console.error("Error adding plan:", error);
      toast.error("Failed to add plan");
    }
  }
  return (
    <div className="signup-container">
    <h2 style={{ marginLeft: '25%', position: 'relative' }}>Add New Plan</h2>
      <form onSubmit={handleSubmit(sendData)}>
      <div className="form-row">

        {/* <label htmlFor="planId">Plan Id</label>
        <input type="text"  {...register('planId', { required: 'Plan Id Is Required' })} placeholder={"Plan Id"} />
        {errors.planId && <p style={{ color: 'red' }}>{errors.planId.message}</p>}
        <br /> */}
      
        <label htmlFor="planName">Plan Name</label>
        <input type="text"  {...register('planName', { required: 'Plan Name Is Required' })} placeholder={"Plan Name"} />
        {errors.planName && <p style={{ color: 'red' }}>{errors.planName.message}</p>}
        <br />
    
        <label htmlFor="Plan Description">Plan Description</label>
        <input type="text"  {...register('planDescription', { required: 'Plan Description Is Required' })} placeholder={"Plan Description"} />
        {errors.planDescription && <p style={{ color: 'red' }}>{errors.planDescription.message}</p>}
        <br />
    
        <label htmlFor="planPrice">Plan Price</label>
        <input type="number"  {...register('planPrice', { required: 'Plan Price Is Required' })} placeholder={"Plan Price"} />
        {errors.planPrice && <p style={{ color: 'red' }}>{errors.planPrice.message}</p>}
        <br />

        <label>Billng Cycle</label>
        <input type="number" {...register('planBillngCycle', { required: 'Billng Cycle Is Required' })} placeholder={"Billng Cycle"} />
        {errors.planBillngCycle && <p style={{ color: 'red' }}>{errors.planBillngCycle.message}</p>}
        <br />

        <label>Plan Restrictions</label>
        <input type="text" {...register('planRestrictions', { required: 'Plan Restrictions Is Required' })} placeholder={"Plan Restrictions"} />
        {errors.planRestrictions && <p style={{ color: 'red' }}>{errors.planRestrictions.message}</p>}
        <br />

        <label>Plan Discount</label>
        <input type="text" {...register('planDiscount', { required: 'Plan Discount Is Required' })} placeholder={"Plan Discount"} />
        {errors.planDiscount && <p style={{ color: 'red' }}>{errors.planDiscount.message}</p>}
        <br />

        <label></label>
        <input type="submit" value={"Add Plan"}  />
        <br/>
        <label></label>
        <input type="reset" value={"Reset"}  />
        </div>
      </form>
    </div>
  )
}
