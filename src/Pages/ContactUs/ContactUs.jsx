import { useState } from "react";
import "./ContactUs.css"
import PersonalInfo from "./PersonalInfo";
import SelectCategory from "./SelectCategory";
import Other from "./Other";
import Swal from "sweetalert2";
import Comple from "./Comple";
import logo from "../../assets/logo1.png"

const ContactUs = () => {
  const [page, setPage] = useState(0)
  const [status, setStatus]=useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    message: '',
    comment: '',
    ratings: '',
  });

  const formTitles = ['Personal Info', 'Message', 'Comment', 'Finish'];

  const displayStep = () =>{
    if(page === 0){
      return <PersonalInfo setFormData={setFormData} formData={formData}></PersonalInfo>
    }
    else if(page === 1){
      return <SelectCategory setFormData={setFormData} formData={formData}></SelectCategory>
              
    }
    else if(page === 2){
     return <Other setFormData={setFormData} formData={formData}></Other>
    }
    else{
      return <Comple status={status}></Comple>
    }
  }





  return (
    <div className="flex contact text-white">
      <div className="contact-img sm:relative absolute w-full  sm:w-1/2 p-4">

          <img src={logo} alt="" />
      </div>
      <div className="sm:w-1/2 w-full sm:bg-transparent bg-slate-700 bg-opacity-75  z-10  p-4 shadow-xl">
     
        <div className="container mx-auto my-2">
          <h1 className="text-4xl font-bold mb-2">Contact Us</h1>

          <p>
            If you have any questions or would like to schedule an appointment, feel free to{' '}
            <a href="https://www.facebook.com/mahmudul607" className="text-blue-500 hover:underline">
              contact us
            </a>
            . We look forward to serving you and your car!
          </p>
          <div className="progressbar py-2">
            <ul className="steps w-full">
              <li 
              data-content={page===0 && page < 1 ? "?":"✓"}
               className={` step step-neutral ${page===0 && page < 1? '': 'green'}`}
               >{formTitles[0]}</li>
              <li data-content={page===1 || page < 2 ? "?":"✓"}  className={` step step-neutral ${page===1 || page < 2? '': 'green'}`}>{formTitles[1]}</li>
              <li data-content={page===2 || page < 3 ? "?":"✓"} className={` step step-neutral ${page===2 || page < 3? '': 'green'}`}>{formTitles[2]}</li>
              <li data-content={status === true? "✓":"?"} className={` step step-neutral ${status===true? 'green': ''}`}>{formTitles[3]}</li>
              
            </ul>
          </div>
          <div className="data-container p-4 min-h-[18rem] relative">
            <div className="header-progressbar">
              <h1 className="text-2xl">
                {formTitles[page]}
              </h1>
            </div>
            <div className="form-body p-4">
              {
               displayStep()
              }
            </div>
            <div className="footer-progressbar gap-4 flex text-black justify-center sm:justify-end">
              <button className="btn btn-outline" disabled={page ===0} onClick={() =>
              {setStatus(false)
                setPage(current => (current - 1))
              }
                
                }>Pre</button>
              <button 
              disabled={status===true}
              className="btn btn-outline"
               onClick={() => {
                if(page ===formTitles.length - 1){
                  
                  if(formData.name === "" || formData.email === ""){
                    Swal.fire({
                      icon: "error",
                      title: "Oops...",
                      text: "Name and email is required",
                      
                    });
                  }
                  else{
                    Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: 'Submit your message',
                      showConfirmButton: false,
                      timer: 1500
                    });
                    setStatus(true)
                    console.log(formData)
                  }
                 
                 

                }
                else{
                  setPage(current => (current + 1))

                }}
               
               }>
                {page === formTitles.length -1 ?"Submit": "Next"}
                </button>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default ContactUs;
