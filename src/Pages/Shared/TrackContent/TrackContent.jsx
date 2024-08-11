import { Link } from "react-router-dom";
import LearnerReview from "../LearnerReview/LearnerReview";


const TrackContent = ({finalTrack}) => {
  
    
    return (
        <div className="max-w-screen-lx mx-auto flex rounded bg-transparent bg-[#1e203e] text-white ">
            <div className="flex flex-col gap-4 w-3/4">
               <div className="w-full h-66">
               <img
                    src={finalTrack.imgUrl}
                    className="w-full h-full rounded-lg shadow-2xl" />
                  
               </div>
                <div className="text-left">
                    <h1 className="text-3xl font-bold">{ finalTrack.name}</h1>
                    <p className="py-6">
                        {finalTrack.details}
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                    <div className="footer pt-4 text-black">
                    <p className="text-white">By: {}</p>
                </div>
                </div>
            <div className="w-full">
            <LearnerReview></LearnerReview>
            </div>
                
            </div>
            <div className="w-1/5 fixed right-24 z-10 top-24">
                        <ul className="flex flex-col gap-2   py-6">
                           <span className="text-[#f57106]">Choose Career Paths:</span>
                           { finalTrack ? finalTrack.paths.map(item => <Link key={item.id} rel="" type="" to={`/path/${item.id}`} className="bg-gray-700 px-4 py-2 hover:text-white customButton  rounded-r-3xl hover:border-[#f57106] border-r-4 cursor-pointer">
                           <span className="button_curve"></span>
                           {item.pathName}</Link>):""}
                            
                        </ul>
                    </div>

                    
        </div>
    );
};

export default TrackContent;