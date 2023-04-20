import React, { useState, useEffect, useContext } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Row } from 'reactstrap';
import JoblyApi from './JoblyApi';
import { Link } from 'react-router-dom';
import AuthContext from './AuthContext';

const Jobs = () => {
    const { user } = useContext(AuthContext)
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        async function getJobs() {
            const jobsFromApi = await JoblyApi.getJobs();
            setJobs(jobsFromApi)
        }
        getJobs()
    }, []);

    return (
        <Row>
            <CardBody className='job m-2 ps-4 rounded'>
                <CardTitle className='fs-4 fw-bold'>
                    <span className='text-decoration-none'>All Jobs:</span>
                </CardTitle>
            </CardBody>
            {jobs ? jobs.map(job => {
                return (
                    <CardBody key={job.id} className='job m-1 p-2 border border-secondary rounded'>
                        <CardTitle className='ps-3 fw-bold fs-4'>
                            <Link className='text-dark text-decoration-none' to={`/jobs/${job.id}`}>
                                <span className='fs-5'>Title: </span>{job.title}
                            </Link>
                        </CardTitle>
                        <CardText className='ps-3 fw-bold'>
                            <Link className='text-dark text-decoration-none' to={`/companies/${job.companyHandle}`}>
                                <span className='text-decoration-underline'>Company:</span> {job.companyName}
                            </Link>
                        </CardText>
                        <CardText className='ps-3 fw-bold'>
                            <span className='text-decoration-underline'>Salary:</span> {job.salary}
                        </CardText>
                        <CardText className='ps-3 fw-bold fs-6'>
                            <span className='text-decoration-underline'>Equity:</span> {job.equity}
                        </CardText>
                    </CardBody>
                )
            }) : <h1>Loading...</h1>
            }
        </Row>
    );
};

export default Jobs;
