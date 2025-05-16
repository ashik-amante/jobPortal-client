import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/Hooks';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const MyApplications = () => {
    const {user} = useAuth()
    const [jobs,setJobs] = useState([])
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
   

    useEffect(()=>{
        // fetch(`http://localhost:5000/job-application?email=${user?.email}`)
        // .then(res=>res.json())
        // .then(data=> {
        //      setJobs(data)
        //     navigate('/myApplications')
        // }
           
        // )
        // axios.get(`http://localhost:5000/job-application?email=kala@gmail.com`, {withCredentials:true})
        // .then(res=> {
        //     setJobs(res.data)
        //     console.log(res.data);
        // })

        axiosSecure.get(`/job-application?email=${user?.email}`)
        .then(res=> {
            setJobs(res.data)
            console.log(res.data);
        })
        
    },[])

    return (
        <div>
            <h2 className="text-3xl">My Applications:{jobs.length} </h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs.map(job =>

                                <tr key={job._id}>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={job.company_logo} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{job.title}</div>
                                                <div className="text-sm opacity-50">{job.location}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Zemlak, Daniel and Leannon
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                    </td>
                                    <td>Purple</td>
                                    <th>
                                        <button className="btn btn-ghost ">X</button>
                                    </th>
                                </tr>
                            )
                        }

                    </tbody>
                    {/* foot */}


                </table>
            </div>
        </div>
    );
};

export default MyApplications;