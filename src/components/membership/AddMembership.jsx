import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import MembershipServices from '../../services/MembershipServices'
import PlanServices from '../../services/PlanServices'


export default function AddMembership() {
  const [minDate, setMinDate] = useState('');
  const [planData, setPlanData] = useState({
    content: [],
    totalPages: '',
    totalElements: '',
    pageSize: '',
    lastPage: false,
    pageNumber: 0
  });
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

    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const responseData = await PlanServices.viewAllPlan(0, 50, "planId", "asc");
      console.log(responseData);
      // toast.success("Succses")
      setPlanData(responseData.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const sendData = (d) => {
    MembershipServices.addMembership(d);
    console.log(d);
    alert("User Added Successfully")
    reset();
  }

  return (
    <div className="signup-container">
      <h2 style={{ marginLeft: '25%', position: 'relative' }}>Add New Membership</h2>
      <form onSubmit={handleSubmit(sendData)} autoComplete="nope">

        <div className="form-row">

          <label htmlFor="inputUserId">User Id</label>
          <input type="text"  {...register('userId', { required: 'User Id Is Required' })} placeholder={"User Id"} autoComplete="new-password" />
          {errors.userId && <p style={{ color: 'red' }}>{errors.userId.message}</p>}
          <br />

          <label>Plan</label>
          <select {...register('planId', { required: 'Plan Is Required' })}>
            <option value="">Select Plan</option>
            {planData.content.map(plan => (
              <option key={plan.planId} value={plan.planId}>{plan.planName}</option>
            ))}
          </select>
          {errors.planId && <p style={{ color: 'red' }}>{errors.planId.message}</p>}
          <br />

          <label>Start Date</label>
          <input type="date" {...register('membershipStartDate')}
            placeholder={"Start Date"}
            min={minDate}
          />
          {errors.membershipStartDate && <p style={{ color: 'red' }}>{errors.membershipStartDate.message}</p>}
          <br />

          <label>End Date</label>
          <input type="date" {...register('membershipEndDate')}
            placeholder={"End Date"}
            min={minDate}
          />
          {errors.membershipEndDate && <p style={{ color: 'red' }}>{errors.membershipEndDate.message}</p>}
          <br />

          <label></label>
          <input type="submit" value={"Register"} placeholder={"Register"} />
          <br />
          <label></label>
          <input type="reset" value={"Reset"} placeholder={"Reset"} />

        </div>
      </form>

    </div>
  )
}
