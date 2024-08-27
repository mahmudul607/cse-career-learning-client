import { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";


const BlogContentV = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [currentBlog, setCurrentBlog] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const queryBlog = location.pathname.split("/")[2];

    const handleGoBack = () => {

        if (location.key !== 'default') {
            navigate(-1); // Go back to the previous path
        } else {
            navigate('/');
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/public/blogContent.json');
                const data = await response.json();
                const uniqueData = data.find(blog => blog.id == queryBlog);
                setCurrentBlog(uniqueData);

                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching the data:', error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [queryBlog]);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <div className="max-w-screen-lx  mx-auto rounded bg-transparent bg-[#1e203e] text-white ">

            <div className="w-full h-96 relative ">
                <img
                    src={currentBlog.imgUrl}
                    className="w-full h-full rounded-lg shadow-2xl" />
                <button className='btn mr-2 absolute top-0 left-0' onClick={handleGoBack}>
                    <FaArrowLeftLong />Back pre
                </button>
                <h1 className="text-3xl font-bold absolute top-16 left-1/4">{currentBlog.title}</h1>
            </div>
            <div className="text-left py-4">
                <h1 className="text-3xl font-bold py-4">{currentBlog.title}</h1>
                <p> {currentBlog.description}</p>
                <p>{currentBlog.content}</p>
                <p className="text-sm py-4">By: {currentBlog.author}</p>
                <button className="btn btn-primary">Apply Now</button>
                <div className="footer pt-4 text-black">

                </div>
            </div>


        </div>




    );
};

export default BlogContentV;