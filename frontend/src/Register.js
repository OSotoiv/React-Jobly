import React, { useState } from "react";
import JoblyApi from './JoblyApi';
import { Form, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';
// import AuthContext from './AuthContext';
import { useNavigate } from 'react-router-dom';


const Register = ({ setUser }) => {
    const navigate = useNavigate();
    const [inputState, setInputState] = useState({});
    function handleInputChange(e) {
        const { name, value } = e.target;
        setInputState({ ...inputState, [name]: value });
    }
    async function handleRegister(e) {
        e.preventDefault();
        const JWT = await JoblyApi.register(inputState);
        const user = await JoblyApi.getUser(inputState.username, JWT)
        setUser({ ...user, token: JWT });

        navigate('/');
    }
    return (
        <>
            <Form data-testid={'register-form'}
                onSubmit={handleRegister}>
                <Row>
                    <Col md={4}>
                        <FormGroup>
                            <Label htmlFor='username'>Username</Label>
                            <Input
                                value={inputState['username'] || ""}
                                onChange={handleInputChange}
                                type='text'
                                name="username"
                                id="username"
                                placeholder='username'
                                required />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <FormGroup>
                            <Label htmlFor='firstName'>First Name</Label>
                            <Input
                                value={inputState['firstName'] || ""}
                                onChange={handleInputChange}
                                type='text'
                                name="firstName"
                                id="firstName"
                                placeholder='firstName'
                                required />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <FormGroup>
                            <Label htmlFor='lastName'>Last Name</Label>
                            <Input
                                value={inputState['lastName'] || ""}
                                onChange={handleInputChange}
                                type='text'
                                name="lastName"
                                id="lastName"
                                placeholder='lastName'
                                required />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <FormGroup>
                            <Label htmlFor='email'>Email</Label>
                            <Input
                                value={inputState['email'] || ""}
                                onChange={handleInputChange}
                                type='text'
                                name="email"
                                id="email"
                                placeholder='email'
                                required />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <FormGroup>
                            <Label htmlFor='password'>Password</Label>
                            <Input
                                value={inputState['password'] || ""}
                                onChange={handleInputChange}
                                type='text'
                                name="password"
                                id="password"
                                placeholder='password'
                                required />
                        </FormGroup>
                    </Col>
                </Row>
                <Button color="primary">submit</Button>
            </Form>
        </>
    )
}
export default Register;