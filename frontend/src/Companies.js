import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import JoblyApi from './JoblyApi';
import { NavLink } from 'react-router-dom';


const Companies = ({ user, setUser }) => {
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
                        <NavLink to={`/companies/${company.handle}`}>
                            <CardTitle>{company.handle}</CardTitle>
                        </NavLink>
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
