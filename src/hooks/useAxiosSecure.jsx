import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './Hooks';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})

const useAxiosSecure = () => {
    const { logOut } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response
        },
            error => {
                if (error.status === 401 || error.status === 403) {
                    console.log('nedd to log out ');
                    logOut()
                        .then(() => {
                            console.log('user logged out ');
                            navigate('/login')
                        })
                        .catch(error => console.log(error))
                }
                return Promise.reject(error)
            }
        )
    }, [])
    return axiosInstance
};

export default useAxiosSecure;