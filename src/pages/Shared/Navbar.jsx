import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext/AuthCOntext';
import logo from '../../../public/nav.png'

const Navbar = () => {
    const { user,logOut } = useContext(AuthContext)
    const handleLogout =()=>{
        logOut()
    }

    const links = <>
        
        
        <li><Link to='/'>Home </Link></li>
        <li><Link to='/myApplications'>My Application </Link></li>
        <li><Link to='/addJob'>Add A Job </Link></li>
        <li><Link to='/myPostedJobs'>My Posted jobs </Link></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div className='flex '>
                <Link to='/' className="btn btn-ghost text-3xl">JobPortal</Link>
                <img className='w-10' src={logo} alt="" />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex gap-4">
                {
                    user ? <>
                        <button className='btn' onClick={handleLogout}>Log Out</button>
                    </> : <>
                        <Link to='/register'>Register</Link>
                        <Link to='/login'>Login</Link>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;