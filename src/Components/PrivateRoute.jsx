import React from 'react';
import {Navigate, Route} from "react-router-dom";
import {useAuth} from "../Context/AuthContext";

function PrivateRoute({ children }) {
    const {currentUser } = useAuth();

    return currentUser ? children : <Navigate to="/login" />;
}

export default PrivateRoute;