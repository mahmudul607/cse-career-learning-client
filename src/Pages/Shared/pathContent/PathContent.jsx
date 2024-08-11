
import { Link } from "react-router-dom";
import LearnerReview from "../LearnerReview/LearnerReview";
import ContentModal from "../ContentModal/ContentModal";


const PathContent = ({finalPath}) => {
    
  
    
    return (
        <div className="max-w-screen-lx mx-auto flex rounded bg-transparent bg-[#1e203e] text-white ">
            <div className="flex flex-col gap-4 w-3/4">
               <div className="w-full h-66">
               <img
                    src={finalPath.banner?.imgUrl}
                    className="w-full h-full rounded-lg shadow-2xl" />
                  
               </div>
                <div className="text-left absolute  pt-10 pl-6 ">
                    <h1 className="text-3xl font-bold">{finalPath.banner?.careerPathName}</h1>
                    <p className="py-6">
                        {finalPath.banner?.description}
                    </p>
                    <button className="btn  btn-primary bottom-0 absolute top-full" onClick={()=>document.getElementById('my_modal_5').showModal()}>See Content</button>
                    <ContentModal></ContentModal>
                    {/* <button className="btn btn-primary bottom-0 absolute top-full"></button> */}
                    <div className="footer pt-4 text-black">
                  
                </div>
                </div>
            <div className="w-full">
            <LearnerReview></LearnerReview>
            </div>
                
            </div>
            <div className="w-1/5 fixed right-24 z-10 top-24">
                        <ul className="flex flex-col gap-2   py-6">
                           <span className="text-[#f57106]">Tools And Technology:</span>
                           { finalPath.toolsAndTechnology ? finalPath.toolsAndTechnology.map((item, i) => <Link key={i} rel="" type="" to={``} className="bg-gray-700 px-4 py-2 hover:text-white customButton  rounded-r-3xl hover:border-[#f57106] border-r-4 cursor-pointer">
                           <span className="button_curve"></span>
                           {item}
                           </Link>):""}
                           
                            
                        </ul>
                    </div>

                    
        </div>
    );
};

export default PathContent;