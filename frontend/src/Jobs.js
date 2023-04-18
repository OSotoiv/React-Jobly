import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardColumns } from 'reactstrap';
import JoblyApi from './JoblyApi';

const Jobs = () => {
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
                    return <Card>
                        <CardBody>
                            <CardTitle>{job.title}</CardTitle>
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
