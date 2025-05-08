import React, { useContext } from 'react';
import AuthContext from '../Context/AuthContext/AuthCOntext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading) return <p className='text-3xl text-center'>Loading...........</p>
    if(user) return children


    return <Navigate to='/login' state={location?.pathname}></Navigate>
   
    
};

export default PrivateRoute;