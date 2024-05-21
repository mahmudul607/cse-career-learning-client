
import TitleSection from "../Shared/TitleSection/TitleSection";
import TruncatedText from "../Shared/TruncatedText/TruncatedText";
import Banner from "./Banner/Banner";
import "./Home.css"
import { SiJirasoftware, SiVorondesign  } from "react-icons/si";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { TbNetwork } from "react-icons/tb";

const Home = () => { 
    return (
        <div className="max-w-screen-xl mx-auto md:pt-24 pt-12">

            <Banner></Banner>
            <div className="p-8">
                <TitleSection header="Choose Your Journey Path" subHeader="Take a Challenge"></TitleSection>
                <div className="challenge py-8">
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2">
                        <div className="col-span-1 card-items">
                            <div className="card  bg-base-100 shadow-xl">
                                
                                <div className="card-body">
                                <span className="text-4xl icon-bg  p-4 bg-[#f57106] h-20 w-20  rounded-2xl flex justify-center items-center"><SiJirasoftware className="icons" /></span>
                                    <h2 className="card-title text-secondary">Software Engineer</h2>
                                    <p>
                                    <TruncatedText text="A software engineer designs, develops, and maintains software applications, requiring strong programming and problem-solving skills. Typically, a degree in computer science or related fields helps, but self-taught paths are also viable. Key skills include proficiency in multiple programming languages and understanding algorithms and data structures."  maxLength={150} />
                                        </p>
                                    <div className="card-actions ">
                                        <button className="btn btn-primary">Start Journey</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 card-items">
                        <div className="card  bg-base-100 shadow-xl">
                                
                                <div className="card-body">
                                <span className="text-4xl icon-bg  p-4 bg-[#f57106] h-20 w-20  rounded-2xl flex justify-center items-center"><MdOutlineDeveloperMode className="icons" /></span>
                                    <h2 className="card-title text-secondary">Web Developer</h2>
                                    <p>
                                    <TruncatedText text="A software engineer designs, develops, and maintains software applications, requiring strong programming and problem-solving skills. Typically, a degree in computer science or related fields helps, but self-taught paths are also viable. Key skills include proficiency in multiple programming languages and understanding algorithms and data structures."  maxLength={150} />
                                        </p>
                                    <div className="card-actions ">
                                        <button className="btn btn-primary">Start Journey</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 card-items">
                        <div className="card  bg-base-100 shadow-xl">
                                
                                <div className="card-body">
                                <span className="text-4xl icon-bg  p-4 bg-[#f57106] h-20 w-20  rounded-2xl flex justify-center items-center"><SiVorondesign  className="icons" /></span>
                                    <h2 className="card-title text-secondary">Web Designer</h2>
                                    <p>
                                    <TruncatedText text="A software engineer designs, develops, and maintains software applications, requiring strong programming and problem-solving skills. Typically, a degree in computer science or related fields helps, but self-taught paths are also viable. Key skills include proficiency in multiple programming languages and understanding algorithms and data structures."  maxLength={150} />
                                        </p>
                                    <div className="card-actions ">
                                        <button className="btn btn-primary">Start Journey</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 card-items">
                        <div className="card  bg-base-100 shadow-xl">
                                
                                <div className="card-body">
                                <span className="text-4xl icon-bg  p-4 bg-[#f57106] h-20 w-20  rounded-2xl flex justify-center items-center"><TbNetwork className="icons" /></span>
                                    <h2 className="card-title text-secondary">Network Administrator</h2>
                                    <p>
                                    <TruncatedText text="A software engineer designs, develops, and maintains software applications, requiring strong programming and problem-solving skills. Typically, a degree in computer science or related fields helps, but self-taught paths are also viable. Key skills include proficiency in multiple programming languages and understanding algorithms and data structures."  maxLength={150} />
                                        </p>
                                    <div className="card-actions ">
                                        <button className="btn btn-primary">Start Journey</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Home;