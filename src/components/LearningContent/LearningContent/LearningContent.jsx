import { useState } from 'react';
// import { Modal } from 'react-bootstrap'; // Example using react-bootstrap for modal
import VideoContent from '../VideoContent/VideoContent';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import Blog from '../Blog/Blog';
import ContentModal from '../../../Pages/Shared/ContentModal/ContentModal';

const LearningContent = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const query2 = location.pathname.split("/")[2];
    const query = query2.split('%')[0];
    const [activeTab, setActiveTab] = useState('blog');
    const [videoUrl, setVideoUrl] = useState(null)


    const { data: pathBlog = [] } = useQuery({
        queryKey: ['pathBlog', query2, query],
        queryFn: async () => {
            if (query === query2) {
                const res = await axiosPublic.get(`/api/v1/web/learning-contents?toolsTechnologyId=${query2}`);
                return res.data.data;


            }
            else {
                const res = await axiosPublic.get(`/api/v1/web/learning-contents?careerPathId=${query}`);
                return res.data.data;


            }
        },
    })
    const videos = pathBlog.filter(content => content.type == 2);
    const blogs = pathBlog.filter(content => content.type == 1);



    const handleGoBack = () => {

        if (location.key !== 'default') {
            navigate(-1); // Go back to the previous path
        } else {
            navigate('/');
        }
    };
    const handleGoBack2 = () => {

        if (location.key !== 'default') {
            navigate(-2); // Go back to the previous path
        } else {
            navigate('/');
        }
    };

    // State to track active tab




    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const handleVideoClick = (selectedVideo) => {
        setVideoUrl(selectedVideo?.video_url)
        console.log(selectedVideo)
        document.getElementById('my_modal_5').showModal()




    };

    const closeModal = () => {
        setVideoUrl(null); // Clear the video URL to stop playback
        document.getElementById('my_modal_5').close(); // Close the modal
    };




    return (
        <div className='min-h-screen md:px-4 px-2'>
            {/* Tab Navigation */}

            <div>
                <div className="header text-white text-center pb-6 lg:text-md md:text-sm text-xs">
                    <h2><span className='cursor-pointer' onClick={handleGoBack2}>{pathBlog[0]?.careerTrack.name}</span> <span>{`>`}</span> <span className='cursor-pointer' onClick={handleGoBack}>{pathBlog[0]?.careerPath.name}</span></h2>
                </div>

            </div>

            <div className="tabs flex mx-auto mb-4 w-full ">

                <div className='w-5/6 sm:flex-col gap-2'>
                    <button onClick={() => handleTabChange('blog')} className={activeTab === 'blog' ? 'active btn btn-sm md:btn-md mr-2 bg-[#f57005]' : 'btn btn-sm md:btn-md mr-2'}>
                        Blog Content
                    </button>
                    <button onClick={() => handleTabChange('video')} className={activeTab === 'video' ? 'active btn-sm md:btn-md btn bg-[#f57005]' : ' btn btn-sm md:btn-md'}>
                        Video Content
                    </button>
                </div>
                <div className='md:w-1/6 text-[2px] md:text-md'>
                    <button className='btn btn-xs md:btn md:mr-2 mr-0' title='Back Pre' onClick={handleGoBack}>
                        <FaArrowLeftLong /><span className="hidden md:block">Back pre</span>
                    </button>
                </div>
            </div>

            {/* Content Display */}
            <div className="content min-h-screen relative">
                {activeTab === 'blog' && (
                    <ul className="blog-content py-2 text-white">
                        <h1 className="text-xl text-[#f57005]">List of Content:</h1>
                        {
                            blogs.map(blog => (
                                <Blog key={blog?.id} blog={blog} className="blog-item">

                                </Blog>
                            ))}
                    </ul>
                )}

                {activeTab === 'video' && (
                    <div className="video-content md:grid-cols-4 sm:grid-cols-3 grid-cols-1 grid grid-gap-2  ">
                        {videos?.map(video => (
                            <VideoContent key={video?.id} video={video} className="video-item" handleVideoClick={handleVideoClick}>

                            </VideoContent>
                        ))}
                    </div>
                )}
            </div>

            {/* Video Modal */}
          
               <div className='w-full'>
                <ContentModal src={videoUrl} onClose={closeModal}></ContentModal>
               
               </div>
        
        </div>
    );
};

export default LearningContent;
