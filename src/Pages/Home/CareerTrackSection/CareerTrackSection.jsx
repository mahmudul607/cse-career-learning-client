
import TitleSection from "../../Shared/TitleSection/TitleSection";
import TruncatedText from "../../Shared/TruncatedText/TruncatedText";
import { FaCode, FaNetworkWired, FaTasks, FaPaintBrush } from 'react-icons/fa';
import { useEffect, useState } from "react";
import "./CareerTrackSection.css";
import useCareerTrack from "../../../Hooks/useCareerTrack";
import { Link } from "react-router-dom";




const CareerTrackSection = () => {
    const [trackData, setTrackData] = useState([])
    const [careerTrack] = useCareerTrack();

  

   
const occupationIcons = {
    FaCode: <FaCode />,
    FaNetworkWired: <FaNetworkWired />,
    FaTasks: <FaTasks />,
    FaPaintBrush: <FaPaintBrush />
};

const iconName = [FaCode, FaNetworkWired, FaTasks, FaPaintBrush];

   

    useEffect(() => {
        fetch('careerTrack.json')
            .then(response => response.json())
            .then(data => setTrackData(data))
            .catch(error => console.error('Error fetching the data:', error));
    }, []);

    

    let careerTracks = []

    if(careerTrack.length < 2){
        careerTracks = [careerTrack[0], ...trackData]
    }
    else{
        careerTracks = careerTrack;
    }
  

   
    return (
        <div className="challenge p-8">
                <TitleSection header="Choose Your Journey Track" subHeader="Take a Challenge" color="text-white"></TitleSection>
                <div className=" py-8">
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-4 gap-2">

                        {
                            careerTracks.map((item, index) => <div key={index} className="col-span-1 card-items">
                            <div className="card overflow-hidden  bg-[#121534] shadow-xl">

                                <div className="card-body">
                                    <span className="text-4xl icon-bg mask mask-hexagon  p-4 bg-[#f57106] h-20 w-20   flex justify-center items-center"><span className="icons ">{occupationIcons[`${iconName[index]}`] || occupationIcons['FaCode']}</span> </span>
                                    <div>
                                    <h2 className="card-title text-secondary">{item?.name}</h2>
                                    <p>
                                        <TruncatedText text={item?.details || item?.description || "Details Coming Soon"} maxLength={150} />
                                    </p>
                                    </div>
                                    <div className="card-actions ">
                                        <Link to={`career-track/${item?.id}`} className="btn btn-primary">Start Journey</Link>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 118 129" fill="none">
                                        <path d="M0.582052 143.759C135.395 113.682 145.584 0.974413 145.584 0.974413L173.881 89.6286C173.881 89.6286 0.582054 322.604 0.582052 143.759Z" fill="#13194f"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>)
                        }
                        
                        
                    </div>
                </div>
            </div>
    );
};

export default CareerTrackSection;