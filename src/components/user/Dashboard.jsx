// Dashboard.js
import React from 'react';

const Dashboard = ({ role }) => {
  let dashboardContent;

  switch (role) {
    case 'admin':
      dashboardContent = (
        <div>
          <h2>Welcome Admin!</h2>
          {/* Admin-specific content */}
        </div>
      );
      break;
    case 'user':
      dashboardContent = (
        <div>
          <h2>Welcome User!</h2>
          {/* User-specific content */}
        </div>
      );
      break;
      case 'manager':
        dashboardContent = (
            <div>
              <h2>Welcome Manager!</h2>
              {/* User-specific content */}
            </div>
          );
          break;
          case 'employee':
            dashboardContent = (
                <div>
                  <h2>Welcome Employee!</h2>
                  {/* User-specific content */}
                </div>
              );
              break;
    default:
      dashboardContent = (
        <div>
          <h2>Unknown role</h2>
        </div>
      );
  }

  return <div>{dashboardContent}</div>;
};

export default Dashboard;
