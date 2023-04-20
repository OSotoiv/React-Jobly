import React, { useState, useEffect, useContext } from 'react';
import { Card, CardBody, CardTitle, Col, Row, CardText, Button } from 'reactstrap';
import JoblyApi from './JoblyApi';
import { useParams, useNavigate, Link } from 'react-router-dom';
import AuthContext from './AuthContext';

const Job = () => {
    const navigate = useNavigate();
    const { user, setUser } = useContext(AuthContext)
    const [job, setjob] = useState();
    const { id } = useParams();

    useEffect(() => {
        async function getJob() {
            const jobFromApi = await JoblyApi.getJob(id);
            setjob(jobFromApi)
        }
        getJob()
        return setjob(null)
    }, [id]);

    const apply = async (jobId) => {
        const id = await JoblyApi.apply(user.username, jobId, user.token);
        setUser(oldCreds => {
            oldCreds.applicationIds.push(id)
            return { ...oldCreds };
        })
    }
    return (<Row>
        {job ?
            <>
                <CardBody key={job.id} className='company m-2 mb-0 ps-4 rounded'>
                    <CardTitle className='fs-4 fw-bold text-light'>
                        <Link to={`/companies/${job.company.handle}`} className='text-light text-decoration-none'>
                            {job.company.name}
                        </Link>
                    </CardTitle>
                </CardBody>
                <CardBody key={job.company.handle} className='m-2 p-4 company rounded'>
                    <CardText className='fs-5'>
                        <span className='fw-bold'>Description:</span> {job.company.description}
                    </CardText>
                    <CardText className='fs-5'>
                        <span className='fw-bold'>Employees:</span> {job.company.numEmployees || "N/A"}
                    </CardText>
                </CardBody>
                <CardBody className='job m-1 p-2 rounded'>
                    <CardText className='ps-3 fw-bold fs-5'>
                        Title: {job.title}
                    </CardText>
                    <CardText className='ps-3 fw-bold'>
                        Salary: {job.salary}
                    </CardText>
                    <CardText className='ps-3 fw-bold fs-6'>
                        Equity: {job.equity || 'N/A'}
                    </CardText>
                    <div className='ps-3'>
                        {user.username
                            ? user.applicationIds.includes(job.id)
                                ? <Button color='success'>Check your status</Button>
                                : <Button color='primary' onClick={() => apply(job.id)}>Apply</Button>
                            : <Button color='primary opacity-75' onClick={() => navigate('/login')}>Apply</Button>}
                    </div>
                </CardBody>
            </>
            : <h1>Loading...</h1>
        }
    </Row>
    );
};

export default Job;



