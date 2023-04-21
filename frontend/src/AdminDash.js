import React, { useContext, useState } from "react";
import JoblyApi from "./JoblyApi";
import AuthContext from "./AuthContext";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Input, Label, Button, Form, FormGroup } from 'reactstrap'
import { Link } from "react-router-dom"

const AdminDash = () => {
    const { user } = useContext(AuthContext)
    const [searchedUser, setSearchedUser] = useState()
    const [inputState, setInputState] = useState({});

    function handleInputChange(e) {
        const { name, value } = e.target;
        setInputState({ ...inputState, [name]: value });
    }

    async function getUserApplications() {
        const userApplications = await JoblyApi.getUser(inputState.username, user.token);
        setSearchedUser(userApplications);
    }

    async function handleSearchSubmit(e) {
        e.preventDefault();
        getUserApplications()

    }
    async function updateApplication(e) {
        e.preventDefault()
        const jobStatus = e.target.elements.radio1.value;
        const jobId = e.target.id;
        if (jobStatus) {
            const { updated } = await JoblyApi.updateApplicationStatus(searchedUser.username, user.token, jobId, jobStatus);
            if (updated) {
                console.log(updated)
            }
        }
    }
    return (
        <>
            <Form className="mb-2" onSubmit={handleSearchSubmit}>
                <FormGroup>
                    <Label htmlFor='username'>Search for Users</Label>
                    <Input
                        value={inputState['username'] || ""}
                        onChange={handleInputChange}
                        type='text'
                        name="username"
                        id="username"
                        placeholder='username'
                        required />
                </FormGroup>
                <Button>Search</Button>
            </Form>
            {searchedUser
                ?
                <>
                    <Card
                        style={{
                            width: '50rem'
                        }}
                    >
                        <CardBody>
                            <CardTitle tag="h5">
                                {searchedUser.firstName} {searchedUser.lastName}
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                {searchedUser.email}
                            </CardSubtitle>
                            <CardText>
                                Some quick example text about a searchedUser. Maybe a bio or other information.
                            </CardText>
                            <Link to="/">
                                edit
                            </Link>
                        </CardBody>
                    </Card>
                    <CardTitle>Current Applications:</CardTitle>
                    {searchedUser.applications.map(app => {
                        return (
                            <Card key={app.id} style={{ width: '50rem', marginBottom: '5px' }}>
                                <CardBody>
                                    <CardTitle>Title: {app.title}</CardTitle>
                                    <CardSubtitle className="mb-2 text-muted">
                                        <Link to={`/companies/${app.handle}`} className="mb-2 text-muted">
                                            Company: {app.handle}
                                        </Link>
                                    </CardSubtitle>
                                    <CardSubtitle className="mb-2 text-muted">
                                        <Link className="mb-2 text-muted">
                                            {`Status: `}
                                            <span className={
                                                app.status === 'applied'
                                                    ? 'text-primary'
                                                    : app.status === 'accepted'
                                                        ? 'text-success'
                                                        : 'text-danger'
                                            }>
                                                {app.status}
                                            </span>
                                        </Link>
                                    </CardSubtitle>
                                    {app.status === 'applied'
                                        ?
                                        <Form id={app.id} onSubmit={updateApplication}>
                                            <FormGroup tag="fieldset">
                                                <FormGroup check>
                                                    <Input

                                                        name="radio1"
                                                        type="radio"
                                                        value='accepted'
                                                    />
                                                    {' '}
                                                    <Label check>
                                                        Approve Application
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup check>
                                                    <Input
                                                        name="radio1"
                                                        type="radio"
                                                        value='rejected'
                                                    />
                                                    {' '}
                                                    <Label check>
                                                        Denie Application
                                                    </Label>
                                                </FormGroup>
                                            </FormGroup>
                                            <Button className="btn-sm">update</Button>
                                        </Form>
                                        : null
                                    }
                                </CardBody>
                            </Card>
                        )
                    })}
                </>
                :
                null}
        </>
    )
}

export default AdminDash;