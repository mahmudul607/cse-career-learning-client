import { Link } from "react-router-dom"
import logo from "../../../assets/logo2.png"
import "./Navbar.css"
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Navbar = () => {

  const [isSticky, setIsSticky] = useState(true);
  // const [trackData, setTrackData] = useState([])

  const axiosPublic = useAxiosPublic();

  const handleActiveMenu = (e) => {
    e.preventDefault();
  
    // Remove 'active' class from all menu items
    const allMenus = document.querySelectorAll("a");
    allMenus.forEach(element => {
      element.classList.remove('active');
    });
  
    // Add 'active' class to the clicked menu item
    e.target.classList.add('active');
  };
  
 

 

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
  // const link ='/career-tracks';

//   useEffect(() => {
  

//         const fetchData = async () => {
//           try {
//               const response = await axiosPublic.fetch(link);
//               const data = await response.json();
//               setTrackData(data.data);
              
//           } catch (error) {
//               console.error('Error fetching the data:', error);
              
//           }
//       };

//       fetchData();
// }, [link, axiosPublic]);

const {data: tracksData=[]} = useQuery({
  queryKey: ['tracksData'],
  queryFn: async () =>{
    const res = await axiosPublic.get('/career-tracks')
    return res.data.data;
  }
})




  const menuItems = <div className="myMenuList flex"  onClick={(e)=>handleActiveMenu(e)}>
 
    <li><Link to={'/'}>Home</Link></li>
    <li className="has-submenu " >
      <Link to="">Career Tracks</Link>
      <ul className="submenu lg:w-[200px]  lg:left-0 left-3/4 w-full top-0 lg:top-full text-black z-50">
        
        {
          tracksData?.map(item =><li key={item.id} className="underSubOne"><Link to={`career-track/${item.id}`}>{item.name}</Link>

            </li>)
        }
      </ul>
    </li>
    
    <li><Link to={'/about'}>About Us</Link></li>
    <li><Link to={'/contactUs'}>Contact Us</Link></li>

   
  </div>
  return (
   
      <div className={`navbar text-white max-w-screen-xl mx-auto   ${isSticky ? "sticky-top active" : ""}`}>
      <div className="navbar-start lg:w-[25%]">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box lg:w-52 w-40" >
            {
              menuItems
            }
          </ul>
        </div>
        <img className="h-full sm:w-24 w-12" src={logo} alt="logo" />
      </div>
      <div className="navbar-center hidden lg:w-2/4 lg:flex">
        <ul  className="menu menu-horizontal px-1" >
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