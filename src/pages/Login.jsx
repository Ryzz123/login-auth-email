import { Box, Button, Card, CardBody, CardHeader, Heading, Input, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/firebaseContext";

export default function Login() {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const { login } = useAuth();
    const navigate = useNavigate();

    const onChangeHandler = (e) => {
        setUser((event) => ({ ...event, [e.target.name]: e.target.value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setError('');
            setLoading(true);
            await login(user.email, user.password);
            navigate('/');
        } catch (error) {
            setError("Gagal Login Akun");
        }
        setLoading(false)
    }

    return (
        <Box display="flex" position="relative" top="20" margin="auto" flexDirection="column" maxW={["90%", "75%", "25%"]}>
            <Card>
                <CardHeader textAlign="center">
                    <Heading>Sign In</Heading>
                </CardHeader>
                <CardBody>
                    <form onSubmit={handleSubmit}>
                        <Stack spacing="6">
                            <Box display="flex" flexDirection="column" gap="3">
                                <Text fontFamily="Inter" fontSize="lg" fontWeight="600">Email</Text>
                                <Input type="email" onChange={onChangeHandler} value={user.email} placeholder="Email" name="email" />
                            </Box>
                            <Box display="flex" flexDirection="column" gap="3">
                                <Text fontFamily="Inter" fontSize="lg" fontWeight="600">Password</Text>
                                <Input type="password" value={user.password} placeholder="Password" onChange={onChangeHandler} name="password" />
                            </Box>
                            <Button type="submit" color="white" background="blue.400">SIGN IN</Button>
                        </Stack>
                    </form>
                    <Box mt="4" fontFamily="Inter">
                        Belum Punya Akun ? <Link to="/sign" style={{ 
                            textDecoration: "underline",
                            color: "skyblue"
                         }}>Sign Up</Link>
                    </Box>
                </CardBody>
            </Card>
        </Box>
    )
}
