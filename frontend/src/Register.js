import React, { useState, useContext } from "react";
import { Form, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';
import AuthContext from './AuthContext';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const navigate = useNavigate();
    const { submitRegistration } = useContext(AuthContext);
    const [inputState, setInputState] = useState({});
    function handleInputChange(e) {
        const { name, value } = e.target;
        setInputState({ ...inputState, [name]: value });
    }
    async function handleRegister(e) {
        e.preventDefault();
        submitRegistration(inputState);
        //if all goes well navigae to home page that renders the users dashboard
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