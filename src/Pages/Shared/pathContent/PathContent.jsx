
import { Link, useLocation } from "react-router-dom";


import LatestReviewCarousel from "../LatestReviewCarousel/LatestReviewCarousel";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import ImageWithFallback from "../ImageWithFallback/ImageWithFallback";




const PathContent = ({finalPath}) => {
    const axiosPublic = useAxiosPublic();
    const location = useLocation();
    const query2 = location.pathname.split("/")[2];

    const { data: toolsAndTechnology =[]} = useQuery({
        queryKey:['toolsAndTechnology', query2],
        queryFn: async () =>{
            const res = await axiosPublic.get(`/api/v1/web/tools-technologies?careerPathId=${query2}`);
            return res.data.data;
        },
    })
    

    
    return (
        <div className="max-w-screen-lx mx-auto flex flex-col-reverse md:flex-row rounded bg-transparent bg-[#1e203e] text-white ">
            <div className="flex flex-col gap-4 md:w-3/4 w-full sm:p-6 p-2">
               <div className="w-full   relative">
              
              

                    <ImageWithFallback
                     src={finalPath?.attachment}
                     alt="Description"
                     defaultSrc="https://i.ibb.co/7G2THnw/20553832.jpg"
                     className="w-full max-h-96 rounded-lg shadow-2xl"
                    
                    
                    ></ImageWithFallback>
              <div className="absolute top-12 left-6">
                    <h1 className="md:text-3xl sm:text-sm font-bold">{finalPath?.name}</h1>
                    </div>

                    <div className="text-left  pt-10 pl-6 top-0 h-full">
                    <div className="flex justify-between flex-col h-full">
                    
                    
                    <div className="absolute sm:bottom-6 sm:flex-none flex sm:flex-row  flex-col gap-2  bottom-0">
                    
                    <Link to={'/register'} className="btn md:btn btn-sm  btn-primary  md:p-4  mx-2" ><span className="text-white">Apply Now</span></Link>
                    <Link className="btn md:btn  btn-primary btn-sm  md:p-4  " to={`/learningContents/${finalPath?.id}}`}><span className="text-white">See Contents</span></Link>
                   
                    </div>
                    </div>
                   
                    {/* <button className="btn btn-primary bottom-0 absolute top-full"></button> */}
                    
                    
                  
                
                </div>
                  
                
               </div>
               <div>
               <h1 className="lg:text-3xl md:text-lg sm:text-sm text-xs font-bold text-[#f58a35]" >{finalPath?.name}</h1>
                    <p className="py-6 lg:text-md md:text-sm sm:text-xs text-[10px]" dangerouslySetInnerHTML={{__html:(finalPath?.description || "").replace(/\n/g, '<br/>')}}>
                        
                    </p>
                    </div>
                
            <div className="w-full h-full">
            <div>
                <h2 className="text-xl text-center py-6 text-[#f5842b]">Most Recent Review:</h2>
              <LatestReviewCarousel></LatestReviewCarousel>
            </div>
            </div>
                
            </div>
            <div className="md:w-1/5 w-[90%]   md:z-10  relative left-8 md:left-2">
                        <ul className="flex md:flex-col flex-row flex-wrap md:flex-nowrap gap-2   lg:py-6 py-2">
                           <span className="text-[#f57106]">Tools And Technology:</span>
                           { toolsAndTechnology ? toolsAndTechnology.map((item, i) => <Link key={i}   to={`/tools-technologies/${item.id}`} className="bg-gray-700 px-1 py-1 hover:text-white customButton lg:text-md md:text-sm sm:text-xs text-[10px]  rounded-r-3xl hover:border-[#f57106] border-r-4 cursor-pointer">
                           <span className="button_curve "></span>
                           {item.name}
                           </Link>):""
                           }
                           
                            
                        </ul>
                    </div>

                    
        </div>
    );
};

export default PathContent;