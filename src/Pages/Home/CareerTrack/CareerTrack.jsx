
import TitleSection from "../../Shared/TitleSection/TitleSection";
import TruncatedText from "../../Shared/TruncatedText/TruncatedText";
import { FaCode, FaNetworkWired, FaTasks, FaPaintBrush } from 'react-icons/fa';
import { useEffect, useState } from "react";
import "./CareerTrack.css";

const CareerTrack = () => {
    const [trackData, setTrackData] = useState([])

const occupationIcons = {
    FaCode: <FaCode />,
    FaNetworkWired: <FaNetworkWired />,
    FaTasks: <FaTasks />,
    FaPaintBrush: <FaPaintBrush />
};

   

    useEffect(() => {
        fetch('careerTrack.json')
            .then(response => response.json())
            .then(data => setTrackData(data))
            .catch(error => console.error('Error fetching the data:', error));
    }, []);
    return (
        <div className="challenge p-8">
                <TitleSection header="Choose Your Journey Path" subHeader="Take a Challenge" color="text-white"></TitleSection>
                <div className=" py-8">
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-4 gap-2">

                        {
                            trackData.map(item => <div key={item.id} className="col-span-1 card-items">
                            <div className="card overflow-hidden  bg-[#121534] shadow-xl">

                                <div className="card-body">
                                    <span className="text-4xl icon-bg mask mask-hexagon  p-4 bg-[#f57106] h-20 w-20   flex justify-center items-center"><span className="icons ">{occupationIcons[item.icon]}</span> </span>
                                    <h2 className="card-title text-secondary">{item.name}</h2>
                                    <p>
                                        <TruncatedText text={item.details} maxLength={150} />
                                    </p>
                                    <div className="card-actions ">
                                        <button className="btn btn-primary">Start Journey</button>
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
                        
                        {/* <div className="col-span-1 card-items">
                            <div className="card overflow-hidden  bg-[#121534] shadow-xl">

                                <div className="card-body">
                                    <span className="text-4xl icon-bg mask mask-hexagon  p-4 bg-[#f57106] h-20 w-20   flex justify-center items-center"><MdOutlineDeveloperMode className="icons" /></span>
                                    <h2 className="card-title text-secondary">Web Developer</h2>
                                    <p>
                                        <TruncatedText text="A software engineer designs, develops, and maintains software applications, requiring strong programming and problem-solving skills. Typically, a degree in computer science or related fields helps, but self-taught paths are also viable. Key skills include proficiency in multiple programming languages and understanding algorithms and data structures." maxLength={150} />
                                    </p>
                                    <div className="card-actions ">
                                        <button className="btn btn-primary">Start Journey</button>
                                    </div>
                                </div>
                                <div className="card-footer ">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 118 129" fill="none">
                                        <path d="M0.582052 143.759C135.395 113.682 145.584 0.974413 145.584 0.974413L173.881 89.6286C173.881 89.6286 0.582054 322.604 0.582052 143.759Z" fill="#13194f"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 card-items">
                            <div className="card overflow-hidden  bg-[#121534] shadow-xl">

                                <div className="card-body">
                                    <span className="text-4xl icon-bg mask mask-hexagon  p-4 bg-[#f57106] h-20 w-20   flex justify-center items-center"><SiVorondesign className="icons" /></span>
                                    <h2 className="card-title text-secondary">Web Designer</h2>
                                    <p>
                                        <TruncatedText text="A software engineer designs, develops, and maintains software applications, requiring strong programming and problem-solving skills. Typically, a degree in computer science or related fields helps, but self-taught paths are also viable. Key skills include proficiency in multiple programming languages and understanding algorithms and data structures." maxLength={150} />
                                    </p>
                                    <div className="card-actions ">
                                        <button className="btn btn-primary">Start Journey</button>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 118 129" fill="none">
                                        <path d="M0.582052 143.759C135.395 113.682 145.584 0.974413 145.584 0.974413L173.881 89.6286C173.881 89.6286 0.582054 322.604 0.582052 143.759Z" fill="#13194f"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 card-items">
                            <div className="card overflow-hidden   bg-[#121534] shadow-xl">

                                <div className="card-body">
                                    <span className="text-4xl icon-bg mask mask-hexagon p-4 bg-[#f57106] h-20 w-20   flex justify-center items-center"><TbNetwork className="icons" /></span>
                                    <h2 className="card-title text-secondary">Network Administrator</h2>
                                    <p>
                                        <TruncatedText text="A software engineer designs, develops, and maintains software applications, requiring strong programming and problem-solving skills. Typically, a degree in computer science or related fields helps, but self-taught paths are also viable. Key skills include proficiency in multiple programming languages and understanding algorithms and data structures." maxLength={150} />
                                    </p>
                                    <div className="card-actions ">
                                        <button className="btn btn-primary">Start Journey</button>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 118 129" fill="none">
                                        <path d="M0.582052 143.759C135.395 113.682 145.584 0.974413 145.584 0.974413L173.881 89.6286C173.881 89.6286 0.582054 322.604 0.582052 143.759Z" fill="#13194f"></path>
                                    </svg>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
    );
};

export default CareerTrack;