import React, { useState, useEffect, useContext } from 'react';
import { CardBody, CardTitle, Row, CardText, Button } from 'reactstrap';
import JoblyApi from './JoblyApi';
import { useParams, useNavigate } from 'react-router-dom';
import AuthContext from './AuthContext';

const Company = () => {
    const navigate = useNavigate();
    const { user, setUser } = useContext(AuthContext)
    const [company, setcompany] = useState();
    const { handle } = useParams();

    useEffect(() => {
        async function getCompany() {
            const companyFromApi = await JoblyApi.getCompany(handle);
            setcompany(companyFromApi)
        }
        getCompany()
        return setcompany(null)
    }, [handle]);

    const apply = async (jobId) => {
        const id = await JoblyApi.apply(user.username, jobId, user.token);
        setUser(oldCreds => {
            oldCreds.applicationIds.push(id)
            return { ...oldCreds };
        })
    }
    return (<Row>
        {company ?
            <>
                <CardBody className='company m-2 mb-0 ps-4 rounded'>
                    <CardTitle className='fs-4 fw-bold text-light'>
                        <span className='text-decoration-none'>Jobs for: {company.name}</span>
                    </CardTitle>
                </CardBody>

                <CardBody key={company.handle} className='m-2 p-4 company rounded'>
                    <CardText className='fs-5'>
                        <span className='fw-bold'>Description:</span> {company.description}
                    </CardText>
                    <CardText className='fs-5'>
                        <span className='fw-bold'>Employees:</span> {company.numEmployees}
                    </CardText>
                </CardBody>
                {company.jobs.map(j => {
                    return (
                        <>

                            <CardBody key={j.id} className='job m-1 p-2 rounded'>
                                <CardText className='ps-3 fw-bold fs-5'>
                                    Title: {j.title}
                                </CardText>
                                <CardText className='ps-3 fw-bold'>
                                    Salary: {j.salary}
                                </CardText>
                                <CardText className='ps-3 fw-bold fs-6'>
                                    Equity: {j.equity}
                                </CardText>
                                <div className='ps-3'>
                                    {user.username
                                        ? user.applicationIds.includes(j.id)
                                            ? <Button color='success'>Check your status</Button>
                                            : <Button color='primary' onClick={() => apply(j.id)}>Apply</Button>
                                        : <Button color='primary opacity-75' onClick={() => navigate('/login')}>Apply</Button>}
                                </div>
                            </CardBody>

                        </>
                    )
                })}

            </>
            : <h1>Loading...</h1>
        }
    </Row >
    );
};

export default Company;



