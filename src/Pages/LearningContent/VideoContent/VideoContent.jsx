import ContentModal from "../../Shared/ContentModal/ContentModal";


const VideoContent = ({video}) => {
    return (
        <div className="border m-2 rounded-lg text-white" onClick={()=>document.getElementById('my_modal_5').showModal()}>
            <div className="p-2 mb-2">
               <div className="h-1/4 w-full mb-4">
               <img className="h-full w-full cursor-pointer" src={video.coverUrl} alt="" />
               </div>
            <h2 className="text-[#f57005]">{video.title}</h2>
            <p>{video.description}</p>
            </div>

            <ContentModal></ContentModal>
        </div>
    );
};

export default VideoContent;