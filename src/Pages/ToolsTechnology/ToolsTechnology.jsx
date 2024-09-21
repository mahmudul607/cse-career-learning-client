import { useQuery } from "@tanstack/react-query";
import { Link, useLocation } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import ImageWithFallback from "../Shared/ImageWithFallback/ImageWithFallback";


const ToolsTechnology = () => {

    const axiosPublic = useAxiosPublic();
    const location = useLocation();
    const query2 = location.pathname.split("/")[2];

    const { data: uniqueTools =[]} = useQuery({
        queryKey:['uniqueTools'],
        queryFn: async () =>{
            const res = await axiosPublic.get(`/tools-technologies/${query2}`);
            return res.data.data;
        },
    })

   
 
    return (
        <div className="">
        <div className="flex flex-col gap-6 w-3/4 h-full justify-between ">
               <div className="w-full min-h-66  relative">

                      <ImageWithFallback
                     src={uniqueTools?.attachment}
                     alt="Description"
                     defaultSrc="https://i.ibb.co.com/Lz8HVNN/vs.jpg"
                     className="w-full h-full rounded-lg shadow-2xl"
                    
                    
                    ></ImageWithFallback>
              

                    <div className="text-left  pt-10 pl-6 top-0 h-full">
                    <div className="flex justify-between flex-col h-full">
                    

                    <div className="absolute bottom-6">
                    <button className="btn  btn-primary  p-4  mx-2" >Apply Now</button>
                    <Link className="btn  btn-primary  p-4  " to={`/learningContents/${query2}`}>See Contents</Link>
                   
                    </div>
                    </div>
                   
                   
                    
                    
                  
                
                </div>
                  
                
               </div>
               <div>
                    <h1 className="text-3xl font-bold">{uniqueTools?.name}</h1>
                    <p className="pt-6">
                        {uniqueTools?.description}
                    </p>
                    </div>
                
           
                
            </div>

            </div>
    );
};

export default ToolsTechnology;