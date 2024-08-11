import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import PathContent from "../Shared/pathContent/PathContent";


const CareerPaths = () => {
    const [careerData, setCareerPathsData]= useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();
    const query2 = location.pathname.split("/")[2];
    const [data , setData] =useState([]);

    
    // useEffect(() => {
    //     fetch('/careerPathsData.json')
    //         .then(response => response.json())
    //         .then(data => setData(data))
    //         .catch(error => console.error('Error fetching the data:', error));
    // }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/public/careerPathsData.json');
                const data = await response.json();
                setData(data);
                
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching the data:', error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    
    useEffect(() => {
        
        const careerPathData =  () => {

            if (data.length > 0) {
                const uniqueData =  data.find(path => path.pathId === query2);
                setCareerPathsData(uniqueData );
            }
            
        };

        careerPathData();
    }, [query2, data]);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <div > 
              <div >
            {data? (
                <div>
               
                <PathContent finalPath={careerData}></PathContent>
                </div>
            ) : (
                <p>Track not found</p>
            )}

           
        </div>
            
        </div>
    );
};

export default CareerPaths;