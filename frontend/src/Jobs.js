import React, { useState, useEffect, useContext } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardColumns, CardLink } from 'reactstrap';
import JoblyApi from './JoblyApi';
import userContext from './AuthContext';
// import { Link } from 'react';

const Jobs = () => {
    const { userToken } = useContext(userContext);

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
                                <CardLink href={`jobs/${job.id}`}>
                                    {job.title}
                                </CardLink>
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
