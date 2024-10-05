import ContentModal from "../../../Pages/Shared/ContentModal/ContentModal";
import ImageWithFallback from "../../../Pages/Shared/ImageWithFallback/ImageWithFallback";




const VideoContent = ({video}) => {

 
    return (
        <div className="border h-[300px] m-2 rounded-lg text-white" onClick={()=>document.getElementById('my_modal_5').showModal()}>
            <div className="p-2 mb-2 h-full">
               <div className="h-4/5  w-full mb-4">

               <ImageWithFallback
                     src={video.attachment}
                     alt="Description"
                     defaultSrc="https://i.ibb.co/RP7pKS4/b-xciwkk8pc-scaled.jpg"
                     className=" w-full h-full cursor-pointer"
                    
                    
                    ></ImageWithFallback>
               </div>
            <div className="h-1/5">
            <h2 className="text-[#f57005]">{video?.title}</h2>
           
            
            </div>
            </div>

            <ContentModal videoUrl={video?.video_url}></ContentModal>
        </div>
    );
};

export default VideoContent;