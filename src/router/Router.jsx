import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register";
import Login from "../pages/Home/Login";
import JobDetails from "../pages/JobDetails/JobDetails";
import { param } from "motion/react-client";
import PrivateRoute from "./PrivateRoute";
import JobApplied from "../pages/JobApplied/JobApplied";
import MyApplications from "../pages/MyApplications/MyApplications";
import AddJobs from "../pages/AddJobs/AddJobs";
import MypostedJobs from "../pages/MyPostedJobs/MypostedJobs";
import ViewApplications from "../pages/ViewApplications/ViewApplications";

  const router  = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <div>Errorrrrrrrrrr..... Route not found </div>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
          {
            path:'/register',
            element: <Register></Register>
          },
          {
            path:'/login',
            element: <Login></Login>
          },
          {
            path: '/jobs/:id',
            element: <PrivateRoute> <JobDetails></JobDetails></PrivateRoute>,
            loader: ({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)
          },
          {
            path: '/jobApplied/:id',
            element:<PrivateRoute><JobApplied></JobApplied></PrivateRoute>
          },{
            path: '/myApplications',
            element: <PrivateRoute><MyApplications></MyApplications></PrivateRoute>
          },{
            path: '/addJob',
            element: <PrivateRoute><AddJobs></AddJobs></PrivateRoute>
          },{
            path: '/myPostedJobs',
            element: <PrivateRoute><MypostedJobs></MypostedJobs></PrivateRoute>
          },{
            path: '/viewApplications/:job_id',
            element:<PrivateRoute><ViewApplications></ViewApplications></PrivateRoute>,
            loader:({params})=> fetch(`http://localhost:5000/job-application/jobs/${params.job_id}`)
          }
        ]
    }
  ])

  export default router