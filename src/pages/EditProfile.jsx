import { Box, Button, Card, CardBody, CardHeader, Heading, Input, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/firebaseContext";

export default function EditProfile() {
    const [user, setUser] = useState({
        email: "",
        password: "",
        confpassword: ""
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const {currentUser, updateEmail, updatePassword} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        setUser({
            email: currentUser.email
        })
    }, [currentUser])

    const onChangeHandler = (e) => {
        setUser((event) => ({ ...event, [e.target.name]: e.target.value }));
    }

    const handleSubmit = (e)  => {
        e.preventDefault();
        if(user.password !== user.confpassword) {
            return setError("Password Tidak Sama!")
        }

        const promises = [];
        setLoading(true);
        setError("");
        if(user.email !== currentUser.email) {
            promises.push(updateEmail(user.email));
        }

        if(user.password) {
            promises.push(updatePassword(user.password));
        }

        Promise.all(promises).then(() => {
            navigate('/');
        }).catch(() => {
            setError("Gagal Update Profile")
        }).finally(() => {
            setLoading(false);
        })
    }

    return (
        <Box display="flex" position="relative" top="16" margin="auto" flexDirection="column" maxW={["90%", "75%", "25%"]}>
            <Card>
                <CardHeader textAlign="center">
                    <Heading>Sign Up</Heading>
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
                            <Box display="flex" flexDirection="column" gap="3">
                                <Text fontFamily="Inter" fontSize="lg" fontWeight="600">Confirm Password</Text>
                                <Input type="password" onChange={onChangeHandler} value={user.confpassword} placeholder="Confirm Your Password" name="confpassword" />
                            </Box>
                            <Button type="submit" color="white" background="blue.400">UPDATE</Button>
                        </Stack>
                    </form>
                    <Box mt="4" fontFamily="Inter">
                        <Link to="/" style={{ 
                            textDecoration: "underline",
                            color: "skyblue"
                         }}>Cancel</Link>
                    </Box>
                </CardBody>
            </Card>
        </Box>
    )
}
