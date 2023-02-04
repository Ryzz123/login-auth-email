import { Container } from "@chakra-ui/react";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/firebaseContext";

export default function PrivateRoute() {
    const { currentUser } = useAuth();
    return currentUser ? (
        <>
            <Container maxW="container.xl">
                <Outlet />
            </Container>
        </>
    ) : <Navigate to="/login" />
}
