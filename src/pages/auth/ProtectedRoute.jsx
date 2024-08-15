import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import { logout } from '../../redux/authSlice';
// import { logout } from '../redux/authSlice';

const ProtectedRoute = () => {
    const { token } = useSelector((state) => state.auth); // Adjust based on your state structure
    const dispatch = useDispatch();

    const isTokenExpired = (token) => {
        if (!token) return true;

        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        return decodedToken.exp < currentTime;
    };

    useEffect(() => {
        if (token && isTokenExpired(token)) {
            dispatch(logout());
        }
    }, [token, dispatch]);

    return token ? <Outlet /> : <Navigate to="/signin" replace />;
};

export default ProtectedRoute;