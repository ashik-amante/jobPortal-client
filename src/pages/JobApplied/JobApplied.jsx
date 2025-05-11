import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/Hooks';

const JobApplied = () => {
    const { id } = useParams()
    const { user } = useAuth()
    const navigate = useNavigate()
    console.log(id, user);

    const submitJobApplication = e => {
        e.preventDefault()
        const form = e.target;
        const linkedin = form.linkedin.value
        const github = form.github.value
        const resume = form.resume.value
        const data = { linkedin, github, resume }
        const jobApplication = {
            job_id: id,
            application_email: user.email,
            linkedin,
            github,
            resume
        }
        console.log(data);

        fetch('http://localhost:5000/job-applications', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Successfully Applied!",
                        icon: "success",
                        draggable: true
                    });
                    navigate('/myApplications')
                }
            })
    }
    return (
        <div className="card w-full shadow-2xl bg-base-100">
            <h1 className="text-5xl font-bold text-center m-4">Apply now and best of luck!</h1>
            <form onSubmit={submitJobApplication} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold mb-1">Linkedin Url</span>
                    </label>
                    <input type="text" name='linkedin' placeholder=" url" className="input input-bordered w-full" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold mb-1">Github Url</span>
                    </label>
                    <input type="text" name='github' placeholder=" url" className="input input-bordered w-full" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold mb-1">Resume Url</span>
                    </label>
                    <input type="text" name='resume' placeholder=" url" className="input input-bordered w-full" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Apply</button>
                </div>
            </form>
        </div>

    );
};

export default JobApplied;