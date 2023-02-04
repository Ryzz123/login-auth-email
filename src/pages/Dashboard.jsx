import { Box, Button, Card, CardBody, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/firebaseContext";

export default function Dashboard() {
    const { logout, currentUser } = useAuth();
    const navigate = useNavigate();

    const handleLogOut = async () => {
        await logout();
        navigate('/login')
    }

    return (
        <Box display="flex" position="relative" top="16" margin="auto" flexDirection="column" maxW={["90%", "75%", "45%"]}>
            <Card>
                <CardBody gap="4" display="flex" flexDirection="column">
                    <Box display="flex">
                        <Text fontFamily="Inter">Email : {currentUser.email}</Text>
                        <Spacer />
                        <Button onClick={handleLogOut}>LOGOUT</Button>
                    </Box>
                    <Button background="blue.400" color="white"><Link to="/edit-profile">EDIT PROFILE</Link></Button>
                </CardBody>
            </Card>
        </Box>
    )
}
