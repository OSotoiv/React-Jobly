import React, { useState, useEffect, useContext } from 'react';
import { CardBody, CardTitle, Row, CardText } from 'reactstrap';
import JoblyApi from './JoblyApi';
import { Link } from 'react-router-dom';
import AuthContext from './AuthContext';

const Companies = () => {
    const { user } = useContext(AuthContext)
    const [companies, setcompanies] = useState([]);
    useEffect(() => {
        async function getCompanies() {
            const companiesFromApi = await JoblyApi.getCompanies();
            setcompanies(companiesFromApi)
        }
        getCompanies()
    }, []);

    return (<Row>
        {companies ? companies.map(company => {
            return (
                <CardBody key={company.handle} className='m-2 p-4 company rounded'>
                    <CardTitle className='fw-bold fs-5'>
                        {`Company: `}
                        <Link className='text-light fs-4' to={`/companies/${company.handle}`}>
                            {company.name}
                        </Link>
                    </CardTitle>
                    <CardText className='fs-5'>
                        <span className='fw-bold'>Description:</span> {company.description}
                    </CardText>
                    <CardText className='fs-5'>
                        <span className='fw-bold'>#Employees:</span> {company.numEmployees}
                    </CardText>
                </CardBody>
            )
        }) : <h1>Loading...</h1>
        }

    </Row>
    );
};

export default Companies;
