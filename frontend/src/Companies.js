import React, { useState, useEffect, useContext } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardLink } from 'reactstrap';
import JoblyApi from './JoblyApi';


const Companies = () => {
    const [companies, setcompanies] = useState([]);
    useEffect(() => {
        async function getCompanies() {
            const companiesFromApi = await JoblyApi.getCompanies();
            setcompanies(companiesFromApi)
        }
        getCompanies()
    }, []);

    return (
        <>
            {companies ? companies.map(company => {
                return <Card key={company.handle}>
                    <CardBody>
                        <CardLink href={`/companies/${company.handle}`}>
                            <CardTitle>{company.handle}</CardTitle>
                        </CardLink>
                        <CardSubtitle>{company.name}</CardSubtitle>
                        <p>Description: {company.description}</p>
                        <p>#Employees: {company.numEmployees}</p>
                    </CardBody>
                </Card>
            }) : <h1>Loading...</h1>
            }
        </>
    );
};

export default Companies;
