import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    let location = useLocation()

    if (loading) {
        return <progress className="progress w-56 mx-auto" value="0" max="100"></progress>
    }

    if (user) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;