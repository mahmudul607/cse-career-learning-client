import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SkillTest = () => {
    // remove these code after user interaction ready and use here navigate
    const [path, setPath] =useState("/register")
let user = "";
   
  useEffect(() =>{
    
    if(user !==""){
        setPath('/skilTest')
       }else{
        setPath('/register')
       }
  },[user])

   // remove these code after user interaction ready and use here navigate
    return (
        <div className="p-4 bg-gradient-to-r from-[#000324] via-[#c9f2fa] to-[#000324] my-8 text-black rounded-lg ">

            <div className="details text-center py-8">
                <h1 className="md:text-4xl  text-lg">Ready to start Skill Test?<br/> Check Your Knowledge Bank</h1>
                <p className="md:text-sm text-xs">Test yourself and grow up your confidence..!</p>
            </div>
            <div className="quick_learn_btn_area relative text-center text-gray-600">

            <Link className="btn  btn-outline mr-4 rounded-full text-gray-600" to={path}>
            <span className='button_curve'></span>
                Give a Test</Link>
            <Link className="btn btn-outline btn-success rounded-full" to={'/message'}>Get Help</Link>
            </div>



            
        </div>
    );
};

export default SkillTest;

