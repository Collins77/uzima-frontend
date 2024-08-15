import { jwtDecode } from 'jwt-decode';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { logout } from '../redux/authSlice';

const AdminProtectedRoute = ({ children }) => {
    const { token, admin } = useSelector((state) => state.auth); // Adjust based on your state structure
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

    if (!token || !admin) {
        return <Navigate to="/admin-login" replace />;
    }

    return token ? <Outlet /> : <Navigate to="/admin-login" replace />;
};

export default AdminProtectedRoute;
