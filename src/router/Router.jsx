import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register";
import Login from "../pages/Home/Login";

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
          }
        ]
    }
  ])

  export default router