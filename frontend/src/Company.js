import React, { useState, useEffect, useContext } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Col, Row, CardText, Button } from 'reactstrap';
import JoblyApi from './JoblyApi';
import { useParams } from 'react-router-dom';
import AuthContext from './AuthContext';

const Company = () => {
    const [company, setcompany] = useState();
    const { token, user, setUser } = useContext(AuthContext)

    const { handle } = useParams();
    useEffect(() => {
        async function getCompany() {
            const companyFromApi = await JoblyApi.getCompany(handle);
            setcompany(companyFromApi)
        }
        getCompany()
    }, []);
    const apply = async (jobId) => {
        const id = await JoblyApi.apply(user.username, jobId, token);
        setUser(oldCreds => {
            oldCreds.applications.push(id)
            return { ...oldCreds };
        })
    }
    return (<Row>
        {company ?
            <>
                <Col key={company.handle} sm="8">
                    <Card>
                        <CardBody>
                            <CardTitle>{company.name}</CardTitle>
                            {/* <CardSubtitle>{company.handle}</CardSubtitle> */}
                            <p>Description: {company.description}</p>
                            <p>#Employees: {company.numEmployees}</p>
                        </CardBody>
                    </Card>
                </Col>
                {company.jobs.map(j => {
                    return (
                        <>
                            <Col key={j.id} sm="8">
                                <Card>
                                    <CardBody>
                                        <CardTitle>
                                            {j.title}
                                        </CardTitle>
                                        <CardText>
                                            Salary: {j.salary}
                                        </CardText>
                                        <CardText>
                                            Equity: {j.equity}
                                        </CardText>
                                    </CardBody>
                                    {user.username
                                        ? user.applications.includes(j.id)
                                            ? <Button>Check your status</Button>
                                            : <Button onClick={() => apply(j.id)}>Apply</Button>
                                        : null}
                                </Card>
                            </Col>
                        </>
                    )
                })}
            </>
            : <h1>Loading...</h1>
        }
    </Row>
    );
};

export default Company;



