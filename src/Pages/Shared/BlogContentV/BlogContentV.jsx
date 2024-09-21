

import { FaArrowLeftLong } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import ImageWithFallback from "../ImageWithFallback/ImageWithFallback";


const BlogContentV = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const queryBlog = location.pathname.split("/")[2];

 
  

    const handleGoBack = () => {

        if (location.key !== 'default') {
            navigate(-1); // Go back to the previous path
        } else {
            navigate('/');
        }
    };

    const {data: blogContent=[]} = useQuery({
        queryKey: ['blogContent'],
        queryFn: async () =>{
            const res = await axiosPublic.get(`/learning-contents?id=${queryBlog}`)
            return res.data.data[0];
        }
    })



    
    return (
        <div className="max-w-screen-lx  mx-auto rounded bg-transparent bg-[#1e203e] text-white ">

            <div className="w-full h-96 relative ">
                {/* <img
                    src={blogContent.imgUrl || "https://i.ibb.co/8bcN8wM/We-Need-Design-Patterns-in-the-Enterprise-Cloud-Era.jpg"}
                    className="w-full h-full rounded-lg shadow-2xl" /> */}
                 <ImageWithFallback
                     src={blogContent.attachment}
                     alt="Description"
                     defaultSrc="https://i.ibb.co/7G2THnw/20553832.jpg"
                     className="w-full h-full rounded-lg shadow-2xl"
                    
                    
                    ></ImageWithFallback>
                <button className='btn mr-2 absolute top-0 left-0' onClick={handleGoBack}>
                    <FaArrowLeftLong />Back pre
                </button>
                <h1 className="text-3xl font-bold text-[#f57005] absolute top-16 left-1/4">{blogContent?.title}</h1>
            </div>
            <div className="text-left py-4">
                <h1 className="text-3xl font-bold py-4 text-[#f57005]">{blogContent?.title}</h1>
                <p> {blogContent?.description}</p>
                <p>{blogContent?.short_description
                }</p>
                {/* <p className="text-sm py-4">By: {blogContent?.author}</p> */}
                
                <div className="footer pt-4 text-black">
                 <button className="btn btn-primary p-4">Apply Now</button>
                </div>
            </div>


        </div>




    );
};

export default BlogContentV;