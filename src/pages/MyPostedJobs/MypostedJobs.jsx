import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/Hooks';

const MypostedJobs = () => {
    const [jobs,setJobs] = useState([])
    const {user} = useAuth()
    console.log(user);

    useEffect(()=>{
        fetch(`http://localhost:5000/jobs?email=${user?.email}`)
        .then(res=> res.json())
        .then(data=> {
            setJobs(data)
            console.log(data);
        })
    },[user.email])
    return (
        <div>
            <h2>My posted jobs :{jobs.length} </h2>
        </div>
    );
};

export default MypostedJobs;