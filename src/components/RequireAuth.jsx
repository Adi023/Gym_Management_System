import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const RequireAuth = ({ component: WrappedComponent, requiredRoles }) => {
    const role = useSelector(state => state.role);
    const isAuthenticated = useSelector(state => state.isAuthenticated);

    const RequireAuthWrapper = useMemo(() => {
        return (props) => {
            if (!isAuthenticated || (requiredRoles && !requiredRoles.includes(role))) {
                // Redirect to login page or unauthorized page if user is not authenticated or doesn't have required role
                return <Navigate to={isAuthenticated ? "/unauthorized" : "/login"} />;
            }

            // Render the wrapped component if user is authenticated
            return <WrappedComponent {...props} />;
        };
    }, [isAuthenticated, role, requiredRoles, WrappedComponent]);

    return <RequireAuthWrapper />;
};

export default RequireAuth;
