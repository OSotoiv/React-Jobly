import React, { useContext } from "react";
import AuthContext from "./AuthContext";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, } from 'reactstrap'
import { Link } from "react-router-dom"

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <h1>{user.username}</h1>
            <Card
                style={{
                    width: '50rem'
                }}
            >
                <CardBody>
                    <CardTitle tag="h5">
                        {user.firstName} {user.lastName}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        {user.email}
                    </CardSubtitle>
                    <CardText>
                        Some quick example text about a user. Maybe a bio or other information.
                    </CardText>
                    <Link to="/">
                        edit
                    </Link>
                </CardBody>
            </Card>
            <CardTitle>Applications:</CardTitle>
            {user.applications.map(app => {
                return (
                    <Card style={{ width: '50rem', marginBottom: '5px' }}>
                        <CardBody>
                            <CardTitle>Title: {app.title}</CardTitle>
                            <CardSubtitle className="mb-2 text-muted">
                                <Link to={`/companies/${app.handle}`} className="mb-2 text-muted">
                                    Company: {app.handle}
                                </Link>
                            </CardSubtitle>
                            <CardSubtitle className="mb-2 text-muted">
                                <Link className="mb-2 text-muted">
                                    Status: {app.status}
                                </Link>
                            </CardSubtitle>
                        </CardBody>
                    </Card>
                )
            })}
        </div>
    )
}
export default Dashboard;
