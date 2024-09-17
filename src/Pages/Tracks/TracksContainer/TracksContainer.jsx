
import { useLocation } from "react-router-dom";
import TrackContent from "../../Shared/TrackContent/TrackContent";
import useCareerPaths from "../../../Hooks/useCareerPaths";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";





const TracksContainer = () => {
   
    const [careerPaths] = useCareerPaths()
    const location = useLocation();
    const axiosPublic = useAxiosPublic();

    const query = location.pathname.split("/")[2];
   



const {isPending, data: careerTracks={}} = useQuery({
    queryKey:['trackData'],
    queryFn: async () =>{
        const res = await axiosPublic.get(`/career-tracks/${query}`);
        return res.data.data;
    },
})

if(isPending){
    return <span className="loading loading-spinner text-primary text-center"></span>
}


    return (
        <div >
            {careerTracks ? (
                <div>
               
                <TrackContent finalTrack={careerTracks} careerPaths={careerPaths}  ></TrackContent>
                </div>
            ) : (
                <p>Track not found</p>
            )}

           
        </div>
        
    );
};

export default TracksContainer;
