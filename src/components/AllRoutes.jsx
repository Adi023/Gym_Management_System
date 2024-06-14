import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';



//Attendance imports
import AttendanceHome from './attendance/AttendanceHome';
import WeeklyAttendance from './attendance/WeeklyAttendance';
import MarkAttendance from './attendance/MarkAttendance';
import ViewAttendance from './attendance/ViewAttendance';

//user imports
import ViewSingleUser from './user/ViewSingleUser';
import UserLogin from './user/UserLogin';
import AddUser from './user/AddUser';
import ViewAllUsers from './user/ViewAllUsers';
import Login from './Login';

//Employee imports
import AddEmployee from './Employee/AddEmployee';
import ViewEmployee from './Employee/ViewEmployee';

//plan imports
import AddPlan from './plan/AddPlan';
import ViewPlan from './plan/ViewPlan';
import UpdatePlan from './plan/UpdatePlan';

//Memberships imports
import ViewMemberships from './membership/ViewMemberships';
import AddMembership from './membership/AddMembership';

//Equipments imports
import EquipmentsDetails from './equipments/EquipmentsDetails';
import AddEquipments from './equipments/AddEquipments';
import UpdateEquipmentsInfo from './equipments/UpdateEquipmentsInfo';

//Activity Imports
import AddActivity from './activities/AddActivity';
import AllActivities from './activities/AllActivities';
import ViewActivityById from './activities/ViewActivityById';
import UpdateActivity from './activities/UpdateActivity';

//DietPlans imports
import AddDiet from './diet/AddDiet';
import ViewDietPlans from './diet/ViewDietPlans';
import ViewDietById from './diet/ViewDietPlanBbyId';
import UpdateDiet from './diet/UpdateDiet'

//Other imports
import Header from './Header'
import Home from './Home'
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';
import Dashboard from './user/Dashboard';
import ImageUploader from './ImageUploder';
import RequireAuth from './RequireAuth';
import UnAuthenticatedUrl from './UnAuthenticatedUrl';
import ErrorPage from './ErrorPage';
import ErrorBoundary from '../ErrorBoundary'
import AttendanceByUserId from './attendance/AttendanceByUserId';
import ViewMembershipById from './membership/ViewMembershipById';


export default function AllRoutes() {

  const isAuthenticated = useSelector(state => state.role !== null && state.role !== 'default');
// console.log(isAuthenticated+"  isAuthenticated 1")

  return (
    <>
      <div>
        {/* <Router> */}
    
          <Routes>
            {/*Allowed to every one Routes*/}
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="Header" element={<Header></Header>}></Route>
            <Route path="ContactUs" element={<ContactUs></ContactUs>}></Route>
            <Route path="AboutUs" element={<AboutUs></AboutUs>}></Route>
            <Route path="/userlogin" element={<UserLogin></UserLogin>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>

            <Route path="/equpmentsDetails" element={<EquipmentsDetails/>}/>
            <Route path="/addEquipments" element={<AddEquipments/>}/>
            <Route path="/UpdateEquipmentsInfo" element={<UpdateEquipmentsInfo/>}/>
            
           

            {/* Error */}
            <Route path='/ErrorBoundary' element={<ErrorBoundary />}></Route>
            <Route path='/ErrorPage' element={<ErrorPage />}></Route>
            <Route path="/unauthorized" element={<div>Unauthorized Access!</div>} />

            {/* Only for AUthenticated and autherized users */}
            {isAuthenticated ? (
              <>
                {/*Admin Routes*/}
                <Route path="register" element={<RequireAuth component={AddUser}  /> }  />
                
                {/*User Routes*/}
                {/* <Route path='/register' element={<RequireAuth component={AddUser} requiredRoles={['admin']} />}  /> */}
                <Route path='/viewUsers' element={<RequireAuth component={ViewAllUsers} requiredRoles={['admin']} />}  />
                <Route path='/viewSingleUser' element={<RequireAuth component={ViewSingleUser} requiredRoles={['admin','user']} />}  />
                <Route path='/dashboard' element={<RequireAuth component={Dashboard} requiredRoles={['admin','user']} />}  />

                {/* Attendance Routes */}
                <Route path='attendance' element={<RequireAuth component={AttendanceHome} requiredRoles={['admin']} />}  />
                <Route path='weeklyAttendance' element={<RequireAuth component={WeeklyAttendance} requiredRoles={['admin']} />}  />
                <Route path='markAttendance' element={<RequireAuth component={MarkAttendance} requiredRoles={['admin']} />}  />
                <Route path='viewAttendance' element={<RequireAuth component={ViewAttendance} requiredRoles={['admin']} />}  />
                <Route path='attendanceByUserId' element={<RequireAuth component={AttendanceByUserId} requiredRoles={['admin','user']} />}  />

                {/* Employee Routes */}
                <Route path='addEmployee' element={<RequireAuth component={AddEmployee}  requiredRoles={['admin']} />}  />
                <Route path='viewEmployee' element={<RequireAuth component={ViewEmployee}  requiredRoles={['admin']} />}  />

                {/* Plan Routes */}
                <Route path='addPlan' element={<RequireAuth component={AddPlan} requiredRoles={['admin']} />}  />
                <Route path='viewPlan' element={<RequireAuth component={ViewPlan} requiredRoles={['admin']} />}  />
                <Route path='updatePlan' element={<RequireAuth component={UpdatePlan} requiredRoles={['admin']} />}  />
                
                {/* Memberships Routes */}
                <Route path='addMembership' element={<RequireAuth component={AddMembership} requiredRoles={['admin']} />}  />
                <Route path='viewMemberships' element={<RequireAuth component={ViewMemberships} requiredRoles={['admin']} />}  />
                <Route path='viewMembershipById' element={<RequireAuth component={ViewMembershipById} requiredRoles={['admin','user']} />}  />

              {/* Acivity Route */}
              <Route path="/addActivity" element={<RequireAuth component={AddActivity} requiredRoles={['admin']} />}/>
              <Route path="/viewActivities" element={<RequireAuth component={AllActivities} requiredRoles={['admin','user']} />}/>
              <Route path="/viewActivityById" element={<RequireAuth component={ViewActivityById} requiredRoles={['admin','user']} />}/>
              <Route path="/updateActivity" element={<RequireAuth component={UpdateActivity} requiredRoles={['admin']} />}/>
                
              {/* Diet Route */}
              <Route path="/addDiet" element={<RequireAuth component={AddDiet} requiredRoles={['admin']} />}/>
              <Route path="/viewDietPlans" element={<RequireAuth component={ViewDietPlans} requiredRoles={['admin']} />}/>
              <Route path="/viewDietById" element={<RequireAuth component={ViewDietById} requiredRoles={['admin','user']} />}/>
              <Route path="/updateDiet" element={<RequireAuth component={UpdateDiet} requiredRoles={['admin','user']} />}/>

              {/* Helper Routes */}
              <Route path='imageUploader' element={<RequireAuth component={ImageUploader} requiredRoles={['admin']} />}  />
                
              </>
            ) : (
              <Route path="*" element={<UnAuthenticatedUrl/>} />
            ) }

          </Routes>
        {/* </Router> */}
      </div>
    </>
  )
}