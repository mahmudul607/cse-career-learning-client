import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./ElearningSite.css"
import TitleSection from "../../Shared/TitleSection/TitleSection";

const ELearningSite = () => {

    const [languages, setLanguages] = useState([]);

        useEffect(() => {

            fetch('languageData.json')
            .then(res => res.json())
            .then(data => setLanguages(data))
        },[]);
    return (
        <div>
            <div className="py-8">
                <TitleSection header="Visit Official Site Here" subHeader="It's Help In Your Journey" color="text-white"></TitleSection>
            </div>
        
        <div className="language_site space-y-4 grid lg:grid-cols-10 md:grid-cols-8 sm:grid-cols-5 grid-cols-4 gap-4 lg:px-8 px-4">
            

            {
                languages.map(lan => <div key={lan.id} className="indicator h-full w-full flex"> 

                    <div className="text-[#f57005] text-xl indicator-item indicator-center badge  ">{lan.name}</div>
                
                <div  className="lan_card w-full h-full   mask mask-circle p-2 relative place-items-center bg-[#f5710560]">
                    <img className="w-full h-full p-2" src={lan.logo} />

                    <div className="live_link hidden absolute top-1/3 right-6 md:right-14 lg:right-8">
                        
                    <span className="" title={lan.nama}><Link to={lan.website} target="_blank"  className="text-center flex justify-center place-items-center items-center text-[40px] lg:text-[50px]"  ><FaEye  />  </Link> </span>

                    </div>

                   
                   
                    
                </div>
                
                    
                </div> )
            }
            
        </div>
        </div>
    );
};

export default ELearningSite;