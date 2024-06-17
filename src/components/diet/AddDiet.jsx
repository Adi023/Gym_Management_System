import React from 'react';
import { useForm } from 'react-hook-form';
import DietServices from '../../services/DietServices';
import { toast } from 'react-toastify';


export default function AddDiet() {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const sendData = async (d) => {
    try {
      const data = await DietServices.addDiet(d);
      toast.success(`Diet Added Successfully, ID: ${data.data.dietId}`, {
        autoClose: false,
      });
      reset(); // Assuming reset function is defined somewhere
    } catch (error) {
      console.error("Error adding Diet:", error);
      toast.error("Failed to add Diet");
    }
  }

  return (
    <div className="signup-container">
    <h2 style={{ marginLeft: '25%', position: 'relative' }}>Add New Diet</h2>
      <form onSubmit={handleSubmit(sendData)}>
      <div className="form-row">

        <label htmlFor="dietId">Diet Id</label>
        <input type="text"  {...register('dietId', { required: 'Diet Id Is Required' })} placeholder={"Diet Id"} />
        {errors.dietId && <p style={{ color: 'red' }}>{errors.dietId.message}</p>}
        <br />
      
        <label htmlFor="dietName">Diet Name</label>
        <input type="text"  {...register('dietName', { required: 'Diet Name Is Required' })} placeholder={"Diet Name"} />
        {errors.dietName && <p style={{ color: 'red' }}>{errors.dietName.message}</p>}
        <br />
    
        <label htmlFor="Diet Description">Diet Description</label>
        <textarea type="text"  {...register('dietDescription', { required: 'Diet Description Is Required' })} placeholder={"Diet Description"} />
        {errors.dietDescription && <p style={{ color: 'red' }}>{errors.dietDescription.message}</p>}
        <br />
    
        <label htmlFor="Image Url">Diet Url</label>
        <input type="text"  {...register('dietImgUrl', { required: 'Image Url Is Required' })} placeholder={"Image Url"} />
        {errors.dietImgUrl && <p style={{ color: 'red' }}>{errors.dietImgUrl.message}</p>}
        <br />

        <label>Diet Created By</label>
        <input type="text" {...register('dietCreatedBy', { required: 'Created By Is Required' })} placeholder={"Diet Created By"} />
        {errors.dietCreatedBy && <p style={{ color: 'red' }}>{errors.dietCreatedBy.message}</p>}
        <br />

        <label>Diet isActive</label>
        <input type="text" {...register('isActive', { required: 'Diet Restrictions Is Required' })} placeholder={"Diet is Active"} />
        {errors.isActive && <p style={{ color: 'red' }}>{errors.isActive.message}</p>}
        <br />

        <label></label>
        <input type="submit" value={"Add Diet"}  />
        <br/>
        <label></label>
        <input type="reset" value={"Reset"}  />
        </div>
      </form>
    </div>
  )
}
