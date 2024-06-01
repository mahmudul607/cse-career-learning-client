
import {
    createBrowserRouter,
   
  } from "react-router-dom";

import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import Register from "../../Pages/Register/Register";
import Login from "../../Pages/Login/Login";
import ContactUs from "../../Pages/ContactUs/ContactUs";


  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path:"/contactUs",
          element: <ContactUs></ContactUs>
        }
      
      ]
    },
  ]);



export default Router;