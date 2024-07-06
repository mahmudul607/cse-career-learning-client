import { useEffect, useState } from "react";
import Content from "../Shared/Content/Content";
import TitleSection from "../Shared/TitleSection/TitleSection";


const LatestContent = () => {
    const [content, setContent]=useState([]);

    useEffect(() => {
        fetch('contentData.json')
            .then(response => response.json())
            .then(data => setContent(data))
            .catch(error => console.error('Error fetching the data:', error));
    }, []);
    return (
        <div className="my-6 m-4">
            <TitleSection header="Latest Content For You" subHeader="View Content Gather Knowledge" color="text-white"></TitleSection>

            <div className="py-6 grid md:grid-cols-2 grid-cols-1  gap-2">
            {
                content.map(item => <Content key={item.id} content={item}></Content>)
            }
        </div>
        </div>
       
    );
};

export default LatestContent;