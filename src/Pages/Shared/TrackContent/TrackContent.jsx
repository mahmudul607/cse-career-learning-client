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
        <div className="max-w-screen-lx mx-auto md:flex flex flex-col-reverse rounded bg-transparent bg-[#1e203e] text-white ">
            <div className="flex flex-col gap-4 md:w-3/4 w-full sm:p-6 p-2">
                <div className="w-full h-72 ">
                    {/* <img
                        src={finalTrack?.imageUrl? finalTrack.imageUrl:"https://i.ibb.co/5KKsgJg/images.png"}
                        className="w-full h-full rounded-lg shadow-2xl" /> */}
                    <ImageWithFallback
                     src={finalTrack?.attachment}
                     alt="Description"
                     defaultSrc="https://i.ibb.co/5KKsgJg/images.png"
                     className="w-full  h-full rounded-lg shadow-2xl"
                    
                    
                    ></ImageWithFallback>
                </div>
                <div className="text-left">
                    <h1 className="text-3xl font-bold">{finalTrack?.name}</h1>
                    <p className="py-6" dangerouslySetInnerHTML={{__html:finalTrack?.description.replace(/\n/g, '<br/>')}}>
                    
                    </p>
                    <button className="btn btn-primary">Apply Now</button>
                    <div className="footer pt-4 text-black">

                    </div>
                </div>
                <div className="w-full">
                    <LearnerReview></LearnerReview>
                </div>

            </div>
            <div className="md:w-1/5 w-full md:fixed md:right-14  md:z-10 top-20">
                <ul className="flex flex-col gap-2  md:py-6 p-6">
                    <span className="text-[#f57106]">Choose Career Paths:</span>
                    { careerPaths?.map(item => <Link key={item?.id} rel="#" type="" to={`/career-path/${item?.id}`} className="bg-gray-700 px-2 text-sm py-2 hover:text-white customButton  rounded-r-3xl hover:border-[#f57106] border-r-4 cursor-pointer">
                        <span className="button_curve"></span>
                        {item?.name}</Link>) }

                </ul>
            </div>


        </div>
    );
};

export default TrackContent;