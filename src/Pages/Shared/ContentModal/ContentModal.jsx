import VideoWithFallback from "../VideoWithFallback/VideoWithFallback";



const ContentModal = ({videoUrl}) => {
  return (
    <>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
        <div className="bg-slate-400 min-w-[70rem] max-w-[60rem] p-2 min-h-[80%] relative">
          <div className="w-full h-full">
            

            <div className=" h-full w-full  ">

              <VideoWithFallback
              className ="w-full h-full"
              videoUrl={videoUrl}
              defaultUrl="https://www.youtube.com/embed/siACuIcNikE"
              
              
              ></VideoWithFallback>
            </div>
          </div>
          <div className="absolute top-0 right-0">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ContentModal;
