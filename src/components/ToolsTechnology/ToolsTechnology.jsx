import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link, useLocation } from "react-router-dom";
import ImageWithFallback from "../../Pages/Shared/ImageWithFallback/ImageWithFallback";


const ToolsTechnology = () => {

    const axiosPublic = useAxiosPublic();
    const location = useLocation();
    const query2 = location.pathname.split("/")[2];
    
    const { data: uniqueTools = [] } = useQuery({
        queryKey: ['uniqueTools', query2],
        queryFn: async () => {
            const res = await axiosPublic.get(`/api/v1/web/tools-technologies/${query2}`);
            return res.data.data;
        },
    })



    return (
        <div className="min-h-screen">
            <div className="flex flex-col gap-6 w-full h-full justify-between ">
                <div className="w-full   relative">

                  
                  <ImageWithFallback
                        src={uniqueTools?.attachment}
                        alt="Description"
                        defaultSrc="https://i.ibb.co.com/Lz8HVNN/vs.jpg"
                        className="w-full max-h-96 rounded-lg shadow-2xl"
                    ></ImageWithFallback>
                 


                    <div className="text-left  pt-10 pl-6 top-0 h-full">
                        <div className="flex justify-between flex-col h-full">


                            <div className="absolute sm:bottom-6 sm:flex-none flex sm:flex-row  flex-col gap-2  bottom-0">
                                <Link to={'/register'} className="btn md:btn btn-sm text-center   btn-primary  md:p-4 mr-2" ><span className="text-white">Apply Now</span></Link>
                                <Link className="btn md:btn btn-sm btn-primary  md:p-4  " to={`/learningContents/${query2}`} state= {{category:'toolsTechnology'}}><span className="text-white">See Contents</span></Link>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="px-2 sm:px-4">
                    <h1 className="lg:text-3xl md:text-lg sm:text-sm text-xs font-bold text-[#f58a35]">{uniqueTools?.name}</h1>
                    <p className="pt-6 text-white lg:text-md md:text-sm sm:text-xs text-[10px]" dangerouslySetInnerHTML={{__html:(uniqueTools?.description || "").replace(/\n/g, '<br/>')}}>
                        
                    </p>
                </div>
            </div>

        </div>
    );
};

export default ToolsTechnology;