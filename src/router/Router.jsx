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
          }
        ]
    }
  ])

  export default router