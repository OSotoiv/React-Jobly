import React, { useState, useContext } from "react";
import JoblyApi from './JoblyApi';
import { Form, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';
import userContext from './userContext';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();
    const { setUserToken } = useContext(userContext)
    const [inputState, setInputState] = useState({});
    function handleInputChange(e) {
        const { name, value } = e.target;
        setInputState({ ...inputState, [name]: value });
    }
    async function handleLogin(e) {
        e.preventDefault();
        const JWT = await JoblyApi.login(inputState);
        console.log(JWT)
        setUserToken(JWT);
        navigate('/');
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