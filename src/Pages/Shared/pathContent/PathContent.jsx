
import { Link } from "react-router-dom";


import LatestReviewCarousel from "../LatestReviewCarousel/LatestReviewCarousel";




const PathContent = ({finalPath}) => {
    
  
    
    return (
        <div className="max-w-screen-lx mx-auto flex rounded bg-transparent bg-[#1e203e] text-white ">
            <div className="flex flex-col gap-6 w-3/4 h-full justify-between ">
               <div className="w-full h-66 relative">
              
              <img
                    src={finalPath.banner?.imgUrl}
                    className="w-full h-full rounded-lg shadow-2xl" />
              

                    <div className="text-left absolute  pt-10 pl-6 top-0 h-full">
                    <div className="flex justify-between flex-col h-full">
                    <div>
                    <h1 className="text-3xl font-bold">{finalPath.banner?.careerPathName}</h1>
                    <p className="py-6">
                        {finalPath.banner?.description}
                    </p>
                    </div>

                    <div className="absolute bottom-6">
                    <button className="btn  btn-primary  p-4  mx-2" >Apply Now</button>
                    <Link className="btn  btn-primary  p-4  " to={"/learningContents"}>See Contents</Link>
                   
                    </div>
                    </div>
                   
                    {/* <button className="btn btn-primary bottom-0 absolute top-full"></button> */}
                    
                    
                  
                
                </div>
                  
               </div>
                
            <div className="w-full">
            <div>
              <LatestReviewCarousel></LatestReviewCarousel>
            </div>
            </div>
                
            </div>
            <div className="w-1/5 fixed right-24 z-10 top-24">
                        <ul className="flex flex-col gap-2   py-6">
                           <span className="text-[#f57106]">Tools And Technology:</span>
                           { finalPath.toolsAndTechnology ? finalPath.toolsAndTechnology.map((item, i) => <Link key={i} rel="" type="" to={``} className="bg-gray-700 px-4 py-2 hover:text-white customButton  rounded-r-3xl hover:border-[#f57106] border-r-4 cursor-pointer">
                           <span className="button_curve"></span>
                           {item}
                           </Link>):""}
                           
                            
                        </ul>
                    </div>

                    
        </div>
    );
};

export default PathContent;