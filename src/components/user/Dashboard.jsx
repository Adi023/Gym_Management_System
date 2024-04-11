// Dashboard.js
import React, { useEffect} from 'react'
import SideBar from '../SideBar';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({role}) => {
  let dashboardContent;
  const navigate = useNavigate();

  const reduxRole = useSelector(state => state.role);

  console.log(role+" "+reduxRole);

  
  useEffect(() => {
    // Check if the role is 'default' and navigate to the home page
    if (reduxRole === 'default') {
      navigate('/');
    }
  }, [reduxRole, navigate]); 

  switch (role||reduxRole) {
    case 'admin':
      dashboardContent = (
        <div>
          {/* <h2>Welcome Admin!</h2> */}
          <SideBar/>
          {/* Admin-specific content */}
        </div>
      );
      break;
    case 'user':
      dashboardContent = (
        <div>
          <h2>Welcome User!</h2>
          <SideBar/>
        </div>
      );
      break;
      case 'manager':
        dashboardContent = (
            <div>
              <h2>Welcome Manager!</h2>
              <SideBar/>
            </div>
          );
          break;
          case 'employee':
            dashboardContent = (
                <div>
                  <h2>Welcome Employee!</h2>
                  <SideBar/>
                </div>
              );
              break;
              // case 'default' :
              //   navigate('/');
              // break;
    default:
      navigate('/');
     
      break;
  }

  return <div>{dashboardContent}</div>;
};

export default Dashboard;
