
import { useLocation } from "react-router-dom";
import TrackContent from "../../Shared/TrackContent/TrackContent";
import useCareerPaths from "../../../Hooks/useCareerPaths";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";





const TracksContainer = () => {
    // const [trackData, setTrackData] = useState([]);
    // const [finalData, setFinalData] = useState(null);
    // const [finalPaths, setFinalPaths] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);
    const [careerPaths] = useCareerPaths()
    const location = useLocation();
    const axiosPublic = useAxiosPublic();

    const query = location.pathname.split("/")[2];
   

console.log(careerPaths)

const { data: careerTracks=[]} = useQuery({
    queryKey:['trackData'],
    queryFn: async () =>{
        const res = await axiosPublic.get(`/career-tracks/${query}`);
        return res.data.data;
    },
})


    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //              fetch('./careerTrack.json')
    //             .then(res => res.json())
    //             .then(data =>setTrackData(data))
                
                
    //             setIsLoading(false);
    //         } catch (error) {
    //             console.error('Error fetching the data:', error);
    //             setIsLoading(false);
    //         }
    //     };

    //     fetchData();
    // }, []);

    // useEffect(() => {
        
    //     const findData = async () => {

    //         if (careerTracks.length > 0) {
    //             // const uniqueData = careerTracks.find(track => track.id == query);
             
    //             const uniquePaths = careerPaths.find(path => path.careerTrackId == query);
    //             setFinalPaths(uniquePaths);
    //         }

            
    //     };

    //     findData();
    // }, [query, careerTracks, careerPaths]);
   

    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }

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
