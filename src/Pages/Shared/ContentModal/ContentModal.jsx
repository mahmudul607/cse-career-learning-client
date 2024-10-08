import VideoWithFallback from "../VideoWithFallback/VideoWithFallback";



const ContentModal = ({ src , onClose}) => {

  return (
    <>
      <dialog id="my_modal_5" className="modal  modal-middle w-full ">
        <div className="bg-slate-400 w-[80%] h-[80%] relative">





          <VideoWithFallback
            className="w-full h-full"
            videoUrl={src}
            defaultUrl="https://www.youtube.com/embed/-VbEUQkw_CQ"
            

          ></VideoWithFallback>

         





          <div className="absolute top-0 right-0">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn" onClick={onClose}>Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ContentModal;
