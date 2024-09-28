
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
        <div className="max-w-screen-lx mx-auto flex rounded bg-transparent bg-[#1e203e] text-white ">
            <div className="flex flex-col gap-6 w-3/4 h-full justify-between ">
               <div className="w-full h-96  relative">
              
              

                    <ImageWithFallback
                     src={finalPath?.attachment}
                     alt="Description"
                     defaultSrc="https://i.ibb.co/7G2THnw/20553832.jpg"
                     className="w-full h-full rounded-lg shadow-2xl"
                    
                    
                    ></ImageWithFallback>
              <div className="absolute top-12 left-6">
                    <h1 className="text-3xl font-bold">{finalPath?.name}</h1>
                    </div>

                    <div className="text-left  pt-10 pl-6 top-0 h-full">
                    <div className="flex justify-between flex-col h-full">
                    
                    
                    <div className="absolute bottom-6">
                    
                    <button className="btn  btn-primary  p-4  mx-2" >Apply Now</button>
                    <Link className="btn  btn-primary  p-4  " to={`/learningContents/${finalPath?.id}}`}>See Contents</Link>
                   
                    </div>
                    </div>
                   
                    {/* <button className="btn btn-primary bottom-0 absolute top-full"></button> */}
                    
                    
                  
                
                </div>
                  
                
               </div>
               <div>
               <h1 className="text-3xl font-bold" >{finalPath?.name}</h1>
                    <p className="py-6" dangerouslySetInnerHTML={{__html:finalPath?.description.replace(/\n/g, '<br/>')}}>
                        
                    </p>
                    </div>
                
            <div className="w-full h-full">
            <div>
                <h2 className="text-xl text-center py-6 text-[#f5842b]">Most Recent Review:</h2>
              <LatestReviewCarousel></LatestReviewCarousel>
            </div>
            </div>
                
            </div>
            <div className="w-1/5  z-10 left-8 relative">
                        <ul className="flex flex-col gap-2   py-6">
                           <span className="text-[#f57106]">Tools And Technology:</span>
                           { toolsAndTechnology ? toolsAndTechnology.map((item, i) => <Link key={i}   to={`/tools-technologies/${item.id}`} className="bg-gray-700 px-4 py-2 hover:text-white customButton  rounded-r-3xl hover:border-[#f57106] border-r-4 cursor-pointer">
                           <span className="button_curve"></span>
                           {item.name}
                           </Link>):""
                           }
                           
                            
                        </ul>
                    </div>

                    
        </div>
    );
};

export default PathContent;