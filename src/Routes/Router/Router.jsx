
import {
    createBrowserRouter,
   
  } from "react-router-dom";

import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import Register from "../../Pages/Register/Register";
import Login from "../../Pages/Login/Login";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import AboutUs from "../../Pages/Shared/AboutUs/AboutUs";
import TracksContainer from "../../Pages/Tracks/TracksContainer/TracksContainer";
import CareerPaths from "../../Pages/CareerPaths/CareerPaths";
import LearningContent from "../../Pages/LearningContent/LearningContent/LearningContent";
import BlogContentV from "../../Pages/Shared/BlogContentV/BlogContentV";
import CertificateVerification from "../../Pages/CertificateVerification/CertificateVerification";
import ToolsTechnology from "../../Pages/ToolsTechnology/ToolsTechnology";



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
        },
       
        {
          path:"/about",
          element: <AboutUs></AboutUs>
        },
        {
          path:"/career-track/:id",
          element: <TracksContainer></TracksContainer>,
          // loader: () => fetch(`careerTrack.json`),
        },
        {
          path:"/career-path/:id",
          element: <CareerPaths></CareerPaths>,
          // loader: () => fetch(`careerTrack.json`),
        },
        {
          path:"/tools-technologies/:id",
          element: <ToolsTechnology></ToolsTechnology>,
          // loader: () => fetch(`careerTrack.json`),
        },
        {
          path:"/learningContents/:id",
          element: <LearningContent></LearningContent>
        },
        {
          path:"/blogContent/:id",
          element: <BlogContentV></BlogContentV>
        }
        
      
      ]
    },
    {
      path:"/get-certificate-info/:id",
      element: <CertificateVerification></CertificateVerification>
    },
  ]);



export default Router;