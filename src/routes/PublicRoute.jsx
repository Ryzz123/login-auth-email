import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/firebaseContext";

export default function PublicRoute() {
    const {currentUser} = useAuth();
    return currentUser ? <Navigate to="/" /> : <Outlet />
}
