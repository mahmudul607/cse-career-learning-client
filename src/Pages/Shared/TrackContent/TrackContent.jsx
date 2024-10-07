import { Link, useLocation } from "react-router-dom";
import LearnerReview from "../LearnerReview/LearnerReview";
import ImageWithFallback from "../ImageWithFallback/ImageWithFallback";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const TrackContent = ({ finalTrack}) => {

  

    const axiosPublic = useAxiosPublic();
    const location = useLocation();
    const query2 = location.pathname.split("/")[2];

    const { data: careerPaths =[]} = useQuery({
        queryKey:['careerPaths', query2],
        queryFn: async () =>{
            const res = await axiosPublic.get(`/api/v1/web/career-paths?careerTrackId=${query2}`);
            return res.data.data;
        },
    })

console.log(careerPaths)

    return (
        <div className="max-w-screen-lx mx-auto flex flex-col-reverse md:flex-row rounded bg-transparent bg-[#1e203e] text-white ">
            <div className="flex flex-col gap-4 md:w-3/4 w-full sm:p-6 p-2">
                <div className="w-full h-72 ">
                   
                    <ImageWithFallback
                     src={finalTrack?.attachment}
                     alt="Description"
                     defaultSrc="https://i.ibb.co/5KKsgJg/images.png"
                     className="w-full  h-full rounded-lg shadow-2xl"
                    
                    
                    ></ImageWithFallback>
                </div>
                <div className="text-left">
                    <h1 className="lg:text-3xl md:text-lg sm:text-sm text-xs font-bold">{finalTrack?.name}</h1>
                    <p className="py-6 lg:text-md md:text-sm sm:text-xs text-[10px]" dangerouslySetInnerHTML={{__html:(finalTrack?.description || "").replace(/\n/g, '<br/>')}}>
                    
                    </p>
                    <Link to={'/register'} className="md:btn btn btn-sm btn-primary"><span className="text-white">Apply Now</span></Link>
                    <div className="footer pt-4 text-black">

                    </div>
                </div>
                <div className="w-full">
                    <LearnerReview></LearnerReview>
                </div>

            </div>
            <div className="md:w-1/5 w-[90%]  relative left-8 md:left-2 md:z-10 ">
                <ul className="flex md:flex-col flex-row flex-wrap md:flex-nowrap gap-2   lg:py-6 py-2">
                    <span className="text-[#f57106]">Choose Career Paths:</span>
                    { careerPaths?.map(item => <Link key={item?.id} rel="#" type="" to={`/career-path/${item?.id}`} className="bg-gray-700 px-1 text-sm py-1 hover:text-white lg:text-md md:text-sm sm:text-xs text-[10px] customButton  rounded-r-3xl hover:border-[#f57106] border-r-4 cursor-pointer">
                        <span className="button_curve"></span>
                        {item?.name}</Link>) }

                </ul>
            </div>


        </div>
    );
};

export default TrackContent;