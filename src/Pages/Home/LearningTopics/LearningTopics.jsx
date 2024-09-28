import useLearningContent from '../../../Hooks/useLearningContent';
import SwiperCustom from '../../Shared/SwiperCustom/SwiperCustom';
import "./LearningTopics.css"
const LearningTopics = ({title, subTitle}) => {
    const [learningContents] = useLearningContent();

    let learningContentData = [];
   
if(learningContents.length < 4){
    learningContentData = [learningContents[0], ...learningContents, ...learningContents]

}else{
    learningContentData = [...learningContents]
}

    return (
        <>
        <div className='learnignTopics text-center py-8'>
            {
                title && subTitle ? <>
                <h6 className='text-bold text-[#4f5de4] md:text-2xl text-lg'>{title}</h6>
            <h2 className='md:text-4xl text-xl text-bold text-white'>{subTitle}</h2> 
                
                
                </>: null
            }
        </div>
        <div className="p-4">
        <SwiperCustom data={learningContentData} inSliderNum={3}></SwiperCustom>
        </div>
        {/* <div className='text-center'>
            <button className='customButton btn '>
                <span className='button_curve'></span>
                Discover All Topics</button>
        </div> */}
        </>
        
    );
};

export default LearningTopics;