
import { useEffect, useState } from 'react';
import SwiperCustom from '../../Shared/SwiperCustom/SwiperCustom';
import "./LearningTopics.css"
const LearningTopics = () => {
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
            <h6 className='text-bold text-[#4f5de4] text-2xl'>Major Topics</h6>
            <h2 className='text-4xl text-bold text-white'>Various Fields You Have to Choose</h2>
        </div>
        <div className="p-4">
        <SwiperCustom data={topicsData}></SwiperCustom>
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