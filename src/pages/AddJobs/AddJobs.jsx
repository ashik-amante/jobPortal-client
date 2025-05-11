// import React from 'react';
// import useAuth from '../../Hooks/useAuth';
// import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom';

import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/Hooks";
import Swal from "sweetalert2";

const Addjob = () => {
    const { user } = useAuth()
    const navigate = useNavigate()

    const handleJob = e => {
        e.preventDefault()
        const formData = new FormData(e.target)
        console.log(formData.entries());
        const initialData = Object.fromEntries(formData.entries())
        console.log(initialData);

        const { min, max, currency, ...newJob } = initialData;
        console.log(newJob);
        newJob.salaryRange = { min, max, currency }
        newJob.requirements = newJob.requirements.split('\n')
        newJob.responsibilities = newJob.responsibilities.split('\n')
        console.log(newJob);

        fetch('http://localhost:5000/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Job has been added succeddfully!",
                        icon: "success",
                        draggable: true
                    });
                    navigate('/myPostedJobs')
                }
            })
    }
    return (
        <div>
            <h2 className="text-3xl text-center mt-4">Add a new Job</h2>

            <form onSubmit={handleJob} className="card-body">
                {/* job title */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Title</span>
                    </label>
                    <input type="text" name='title' placeholder="Job title" className="input input-bordered w-full" required />
                </div>
                {/* job location */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Loaction</span>
                    </label>
                    <input type="text" name='location' placeholder="Location" className="input input-bordered w-full" required />

                </div>
                {/* job type */}
                <div className="form-control">
                    <label className="label w-full">
                        <span className="label-text">Job type</span>
                    </label>
                    <select defaultValue='Pick a job type' name='type' className="select select-ghost border-gray-300 w-full max-w-xs">
                        <option disabled >Pick a job type</option>
                        <option>full-time</option>
                        <option>part time</option>
                        <option>Intern</option>
                    </select>

                </div>
                {/* job field */}
                <div className="form-control">
                    <label className="label w-full">
                        <span className="label-text">Job field</span>
                    </label>
                    <select defaultValue='job Field' className="select select-ghost w-full max-w-xs border-gray-300">
                        <option disabled >job Field</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Teaching</option>
                        <option>Architect</option>
                    </select>
                </div>

                {/* salary range */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 items-end'>
                    <div className="form-control">
                        <label className="label w-full">
                            <span className="label-text"> Salary Range</span>
                        </label>
                        <input type="text" name='min' placeholder="Min" className="input input-bordered" required />

                    </div>
                    <div className="form-control">

                        <input type="text" name='max' placeholder="Max" className="input input-bordered" required />

                    </div>

                    <div className="form-control">

                        <select defaultValue='Currency'name='currency' className="select select-ghost w-full max-w-xs">
                            <option disabled >Currency</option>
                            <option>BDT</option>
                            <option>USD</option>
                            <option>INR</option>

                        </select>
                    </div>
                </div>

                {/* job Descruiption */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Description</span>
                    </label>
                    <textarea name='description' className="textarea textarea-bordered w-full" required placeholder="Bio"></textarea>
                </div>

                {/* company name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company name</span>
                    </label>
                    <input type="text" name='company' placeholder="company Name" className="input input-bordered w-full" required />
                </div>

                {/* job requirements */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Requirements</span>
                    </label>
                    <textarea className="textarea textarea-bordered w-full" name='requirements' required placeholder="Put each req in new line "></textarea>
                </div>
                {/* job responsibility */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Responsibilities</span>
                    </label>
                    <textarea className="textarea textarea-bordered w-full" name='responsibilities' required placeholder="Write each responsibility in new line "></textarea>
                </div>

                {/* Application Deadline*/}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text"> Application Deadline</span>
                    </label>
                    <input type="date" name='applicationDeadline' placeholder=" Application Deadline " className="input input-bordered w-full" required />
                </div>

                {/* hr email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Hr Email</span>
                    </label>
                    <input defaultValue={user?.email} type="email" name='hr_email' placeholder="Hr email" className="input input-bordered w-full" required />
                </div>
                {/* hr name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Hr name</span>
                    </label>
                    <input defaultValue={user.displayName ? user?.displayName : 'Add a name'} type="text" name='hr_name' placeholder="Hr name" className="input input-bordered w-full" required />
                </div>
                {/* Company logo */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company logo</span>
                    </label>
                    <input type="url" name='company_logo' placeholder="Logo url" className="input input-bordered w-full" required />
                </div>

                {/* submit area */}
                <div className="form-control mt-6">
                    <button className="btn btn-primary w-full">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Addjob;