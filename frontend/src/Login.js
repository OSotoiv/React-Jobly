import React, { useState, useContext } from "react";
import { Form, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import AuthContext from './AuthContext';

const Login = () => {
    const navigate = useNavigate();
    const { submitLogin } = useContext(AuthContext)
    const [inputState, setInputState] = useState({});
    function handleInputChange(e) {
        const { name, value } = e.target;
        setInputState({ ...inputState, [name]: value });
    }
    async function handleLogin(e) {
        e.preventDefault();
        submitLogin(inputState)
        //if all goes well navigae to home page that renders the users dashboard
        navigate('/')
    }
    return (
        <>
            <Form data-testid={'login-form'}
                onSubmit={handleLogin}>
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
export default Login;