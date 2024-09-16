import { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap'; // Example using react-bootstrap for modal
import Blog from '../Blog/Blog';
import VideoContent from '../VideoContent/VideoContent';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';

const LearningContent = () => {
    // const [blogContentData, setBlogContentData] = useState([]);
    // const [videoContentData, setVideoContentData] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
   
    const query2 = location.pathname.split("/")[2];
    const query = query2.split('%')[0];
    

  
        const { data: pathBlog =[]} = useQuery({
            queryKey:['pathBlog'],
            queryFn: async () =>{
                if(query === query2){
                    const res = await axiosPublic.get(`/learning-contents?toolsTechnologyId=${query2}`);
                     return res.data.data;
                    
                  
                }
                 else {
                    const res = await axiosPublic.get(`/learning-contents?careerPathId=${query}`);
                    return res.data.data;
                    

                }
            },
        })
        

        

        console.log(pathBlog);
  
    

    
   



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
    








    const [activeTab, setActiveTab] = useState('blog'); // State to track active tab
    const [selectedVideo, setSelectedVideo] = useState(null); // State to track the selected video
    const [showModal, setShowModal] = useState(false); // State to control modal visibility

    useEffect(() => {

        if (activeTab === 'blog') {
            fetch('/blogContent.json')
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    
                    


                })

        }
        else if (activeTab === 'video') {
            fetch('/videoContent.json')
                .then(res => res.json())
                .then(data => {
                   console.log(data)
                    


                })

        }
    }, [activeTab])

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const handleVideoClick = (video) => {
        setSelectedVideo(video);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
 
    return (
        <div className=''>
            {/* Tab Navigation */}

            <div>
                <div className="header text-white text-center pb-6">
                    <h2><span className='cursor-pointer' onClick={handleGoBack2}>{pathBlog[0]?.careerTrack.name}</span> <span>{`>`}</span> <span className='cursor-pointer' onClick={handleGoBack}>{pathBlog[0]?.careerPath.name}</span></h2>
                </div>

            </div>

            <div className="tabs flex mx-4 mb-4 w-full">

                <div className='w-5/6'>
                    <button onClick={() => handleTabChange('blog')} className={activeTab === 'blog' ? 'active btn mr-2 bg-[#f57005]' : 'btn mr-2'}>
                        Blog Content
                    </button>
                    <button onClick={() => handleTabChange('video')} className={activeTab === 'video' ? 'active btn bg-[#f57005]' : ' btn'}>
                        Video Content
                    </button>
                </div>
                <div className='w-1/6'>
                    <button className='btn mr-2' onClick={handleGoBack}>
                        <FaArrowLeftLong />Back pre
                    </button>
                </div>
            </div>

            {/* Content Display */}
            <div className="content">
                {activeTab === 'blog' && (
                    <ul className="blog-content py-2 text-white">
                        <h1 className="text-xl text-[#f57005]">List of Content:</h1>
                        {
                            pathBlog.map(blog => (
                                <Blog key={blog.id} blog={blog} className="blog-item">

                                </Blog>
                            ))}
                    </ul>
                )}

                {activeTab === 'video' && (
                    <div className="video-content flex justify-between">
                        {pathBlog.map(video => (
                            <VideoContent key={video.id} video={video} className="video-item" onClick={() => handleVideoClick(video)}>

                            </VideoContent>
                        ))}
                    </div>
                )}
            </div>

            {/* Video Modal */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedVideo?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedVideo && (
                        <video width="100%" controls>
                            <source src={selectedVideo.url} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )}
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default LearningContent;
