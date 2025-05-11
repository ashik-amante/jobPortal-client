import React, { useContext } from 'react';
import lottieLogin from '../../assets/lottie/login.json'
import Lottie from 'lottie-react';
import AuthContext from '../../Context/AuthContext/AuthCOntext';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import GoogleSignin from '../Shared/GoogleSignin';

const Login = () => {
    const {logIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    console.log('location in login page', location);
    const from = location?.state || '/'


    const handleLogin = e=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const logInData = {email,password}
        console.log(logInData);
        // user login
        logIn(email,password)
        .then(result=>{
            console.log(result.user);
            toast.success('Login successfull!!')
            navigate(from)
        })
        .catch(err=>{
            console.log(err.message);
        })

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    <Lottie animationData={lottieLogin}></Lottie>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-5xl font-bold ml-8 mt-4">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email"
                                name='email'
                                className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password"
                                name='password'
                                className="input input-bordered" required />
                         
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <GoogleSignin></GoogleSignin>
                </div>
            </div>
        </div>
    );
};

export default Login;