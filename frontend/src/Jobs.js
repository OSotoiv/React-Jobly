import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardColumns, CardLink } from 'reactstrap';
import JoblyApi from './JoblyApi';
import { NavLink } from 'react-router-dom';

const Jobs = ({ user, setUser }) => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        async function getJobs() {
            const jobsFromApi = await JoblyApi.getJobs();
            setJobs(jobsFromApi)
        }
        getJobs()
    }, []);

    return (
        <>
            <CardColumns style={{ width: '30rem', marginLeft: '20%' }}>
                {jobs ? jobs.map(job => {
                    return <Card key={job.id}>
                        <CardBody>
                            <CardTitle>
                                <NavLink to={`jobs/${job.id}`}>
                                    {job.title}
                                </NavLink>
                            </CardTitle>
                            <CardSubtitle>{job.companyName}</CardSubtitle>
                            <p>Salary: {job.salary}</p>
                            <p>Equity: {job.equity || 'N/A'}</p>
                        </CardBody>
                    </Card>
                }) : <h1>Loading...</h1>
                }
            </CardColumns>
        </>
    );
};

export default Jobs;
