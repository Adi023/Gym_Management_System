import React from 'react'
import { useForm } from 'react-hook-form';
import EquipmentServices from '../../services/EquipmentsServices';
import { toast } from 'react-toastify';

export default function AddEquipments() {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const sendData = async (d) => {
    try {
      const data = await EquipmentServices.addEquipements(d);
      toast.success(`Equipment Added Successfully, ID: ${data.data.eqpId}`, {
        autoClose: false,
      });
      reset(); // Assuming reset function is defined somewhere
    } catch (error) {
      console.error("Error adding Equipment:", error);
      toast.error("Failed to add Equipment");
    }
  }

  return (
    <div className="signup-container">
    <h2 style={{ marginLeft: '25%', position: 'relative' }}>Add New Equipment</h2>
      <form onSubmit={handleSubmit(sendData)}>
      <div className="form-row">

        <label htmlFor="eqpId">Id</label>
        <input type="text"  {...register('eqpId', { required: 'Equipment Id Is Required' })} placeholder={"Equipment Id"} />
        {errors.eqpId && <p style={{ color: 'red' }}>{errors.eqpId.message}</p>}
        <br />
      
        <label htmlFor="eqpName">Name</label>
        <input type="text"  {...register('eqpName', { required: 'Equipment Name Is Required' })} placeholder={"Equipment Name"} />
        {errors.eqpName && <p style={{ color: 'red' }}>{errors.eqpName.message}</p>}
        <br />
    
        <label htmlFor="Equipment dateOfPurchase">Purchase Date</label>
        <input type="date"  {...register('dateOfPurchase', { required: 'Date Of Purchase Is Required' })} placeholder={"Equipment date Of Purchase"} />
        {errors.dateOfPurchase && <p style={{ color: 'red' }}>{errors.dateOfPurchase.message}</p>}
        <br />
    
        <label htmlFor="Category">Category</label>
        <input type="text"  {...register('eqpCategory', { required: 'Category Is Required' })} placeholder={"Category"} />
        {errors.eqpCategory && <p style={{ color: 'red' }}>{errors.eqpCategory.message}</p>}
        <br />

        <label>Image URL</label>
        <input type="text" {...register('eqpImgUrl', { required: 'URL Is Required' })} placeholder={"Equipment Image URL"} />
        {errors.eqpImgUrl && <p style={{ color: 'red' }}>{errors.eqpImgUrl.message}</p>}
        <br />

        {/* <label>Is Active</label> */}
        <input type="hidden" {...register('isActive', { required: 'Equipment Restrictions Is Required' })} placeholder={"Equipment is Active"}  defaultValue={true}/>
        {errors.isActive && <p style={{ color: 'red' }}>{errors.isActive.message}</p>}

        <label></label>
        <input type="submit" value={"Add Equipment"}  />
        <br/>
        <label></label>
        <input type="reset" value={"Reset"}  />
        </div>
      </form>
    </div>
  )
}
