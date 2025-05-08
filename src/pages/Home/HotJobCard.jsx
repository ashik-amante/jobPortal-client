import React from 'react';
import { FaDollarSign, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HotJobCard = ({job}) => {
    const { title, company, company_logo, requirements, description, location, salaryRange, _id } = job;
    return (
        <div >
            <div className="card card-compact rounded-3xl bg-base-100 shadow-xl">
                <div className='flex gap-4 items-center m-2'>
                    <figure>
                        <img className='w-16' src={company_logo} alt="Shoes" />
                    </figure>
                    <div>
                        <p>{company}</p>
                        <p className='flex items-center gap-1'> <FaMapMarkerAlt></FaMapMarkerAlt> {location}</p>
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>

                    <div className='flex flex-wrap mt-4 gap-2'>
                        {
                            requirements.map((skill, index) => <p key={index} className='border rounded-lg px-2 text-center p-2 bg-gray-100 hover:text-blue-600' >{skill}</p>)
                        }
                    </div>
                    <div className='items-center flex mt-4'>
                        <p className='flex items-center'> Salary :  {salaryRange.min} -  {salaryRange.max} <FaDollarSign></FaDollarSign> </p>

                        <div className="card-actions justify-end">
                            <Link to={`jobs/${_id}`}>
                                <button className="btn btn-primary">Apply Now</button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default HotJobCard;