import { useEffect, useState } from "react";


import PathContent from "../Shared/pathContent/PathContent";


const CareerPaths = () => {
    
    const [isLoading, setIsLoading] = useState(true);
    
    const [data , setData] =useState([]);

  
   
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://85.31.235.79:5000/api/v1/web/career-paths');
                const data = await response.json();
                setData(data.data);
                
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching the data:', error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    
    

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