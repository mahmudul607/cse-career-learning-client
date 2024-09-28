import { useEffect, useState } from "react";


import PathContent from "../../Pages/Shared/pathContent/PathContent";
import { useLocation } from "react-router-dom";


const CareerPaths = () => {
    
    const [isLoading, setIsLoading] = useState(true);
    
    const [data , setData] =useState([]);
    const location = useLocation();
    const query = location.pathname.split("/")[2];
  
   
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://85.31.235.79:5000/api/v1/web/career-paths/${query}`);
                const data = await response.json();
                setData(data.data);
                
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching the data:', error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [query]);


    

    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <div > 
              <div >
            {data? (
                <div>
               
                <PathContent finalPath={data} ></PathContent>
                </div>
            ) : (
                <p>Track not found</p>
            )}

           
        </div>
            
        </div>
    );
};

export default CareerPaths;