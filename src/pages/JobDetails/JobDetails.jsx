import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const job = useLoaderData()
    const { title, company, deadline, _id } = job
    return (
        <div>
            <p>JOb detail of {title} </p>
            <p>Apply for : {company}</p>
            <p>Dead Line : {deadline}</p>

            <Link to={`/jobApplied/${_id}`}>
                <button className='btn'> Apply Now </button>
            </Link>
        </div>
    );
};

export default JobDetails;