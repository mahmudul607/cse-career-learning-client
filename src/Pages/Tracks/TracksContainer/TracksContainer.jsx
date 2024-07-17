import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TrackContent from "../../Shared/TrackContent/TrackContent";


const TracksContainer = () => {
    const [trackData, setTrackData] = useState([]);
    const [finalData, setFinalData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();
    const query = location.pathname.split("/")[2];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/public/careerTrack.json');
                const data = await response.json();
                setTrackData(data);
                console.log("1st", data)
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching the data:', error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        
        const findData = async () => {

            if (trackData.length > 0) {
                const uniqueData = trackData.find(track => track.id == query);
                setFinalData(uniqueData );
            }
            
        };

        findData();
    }, [query, trackData]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="h-screen">
            {finalData ? (
                <div>
                {/* <h3 className="text-red-700">{finalData.name}</h3> */}
                <TrackContent finalTrack={finalData} ></TrackContent>
                </div>
            ) : (
                <p>Track not found</p>
            )}
        </div>
    );
};

export default TracksContainer;
