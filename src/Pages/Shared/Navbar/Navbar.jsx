import { Link } from "react-router-dom"
import logo from "../../../assets/logo2.png"
import "./Navbar.css"
import { useEffect, useState } from "react";

const Navbar = () => {

  const [isSticky, setIsSticky] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerHeight = window.innerHeight * 0.1; // 20% of the viewport height
      if (scrollY > triggerHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const menuItems = <>
    <li><Link to={'/'}>Home</Link></li>
    <li className="has-submenu ">
      <Link to="">Choose Track</Link>
      <ul className="submenu lg:w-[200px]  lg:left-0 left-3/4 w-full top-0 lg:top-full text-black z-50">
        <li className="underSubOne"><Link to="/track/sub1">Software Engineer</Link>
          {/* <ul className="underSubmenuOne  md:text-lg text-[3px] md:w-64 lg:w-64">
            <li><Link to="/track/sub2">Software Development</Link></li>
            <li><Link to="/track/sub2">Web Development</Link></li>
            <li><Link to="/track/sub2">App Development</Link></li>
            <li><Link to="/track/sub2">Game Development</Link></li>
          </ul>  */}
          




        </li>
        <li className="underSubTwo"><Link to="/track/sub3">Network Engineer</Link>
          

        </li>
        <li  className="underSubTwo"><Link to="/track/sub4">Project Management</Link></li>
      </ul>
    </li>
    <li><Link to={'/jobs'}>Jobs</Link></li>
    <li><Link to={'/companies'}>About Us</Link></li>
    <li><Link to={'/contactUs'}>Contact Us</Link></li>
  </>
  return (
   
      <div className={`navbar text-white max-w-screen-lx mx-auto   ${isSticky ? "sticky-top active" : ""}`}>
      <div className="navbar-start lg:w-[25%]">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box lg:w-52 w-40">
            {
              menuItems
            }
          </ul>
        </div>
        <img className="h-full sm:w-24 w-12" src={logo} alt="logo" />
      </div>
      <div className="navbar-center hidden  lg:flex">
        <ul className="menu menu-horizontal px-1">
          {
            menuItems
          }
        </ul>
      </div>
      <div className="navbar-end lg:w-[30%] gap-2">

        <button className="btn-sm sm:btn-md btn customButton ">
          <span className="button_curve"></span>
          Support</button>
        <Link className="btn-sm sm:btn-md btn btn-primary" to={"/login"}>login</Link>
      </div>
    </div>
   
  );
};

export default Navbar;