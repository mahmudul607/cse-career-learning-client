
import { useEffect, useState } from 'react';
import SwiperCustom from '../../Shared/SwiperCustom/SwiperCustom';
import "./LearningTopics.css"
const LearningTopics = ({title, subTitle}) => {
    const [topicsData, setTopicsData] = useState([])

    useEffect(() => {
        fetch('learningTopics.json')
            .then(response => response.json())
            .then(data => setTopicsData(data))
            .catch(error => console.error('Error fetching the data:', error));
    }, []);
    return (
        <>
        <div className='learnignTopics text-center py-8'>
            {
                title && subTitle ? <>
                <h6 className='text-bold text-[#4f5de4] text-2xl'>{title}</h6>
            <h2 className='text-4xl text-bold text-white'>{subTitle}</h2> 
                
                
                </>: null
            }
        </div>
        <div className="p-4">
        <SwiperCustom data={topicsData} inSliderNum={3}></SwiperCustom>
        </div>
        <div className='text-center'>
            <button className='customButton btn '>
                <span className='button_curve'></span>
                Discover All Topics</button>
        </div>
        </>
        
    );
};

export default LearningTopics;