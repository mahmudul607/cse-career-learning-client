import "./Home.css"
import Banner from "../Banner/Banner";
import LearningTopics from "../LearningTopics/LearningTopics";
import AboutUs from "../../AboutUs/AboutUs";
import LearnerReview from "../../Shared/LearnerReview/LearnerReview";
import ELearningSite from "../ELearningSite/ELearningSite";
import SkillTest from "../SkillTest/SkillTest";
import CareerTrackSection from "../CareerTrackSection/CareerTrackSection";
import LatestContent from "../../../components/LatestContent/LatestContent";
import UsageStatistics from "../UsageStatistics/UsageStatistics";
import OurMentors from "../OurMentors/OurMentors";






const Home = () => {

    


    return (
        <div className=" md:pt-24 pt-12">

            <Banner></Banner>
            {/* Career Track */}
            <CareerTrackSection></CareerTrackSection>
            
            {/* Challenge end */}

            {/* learning topics swiperSlide start */}
            <LearningTopics title="Major Topics" subTitle="Various Fields You Have to Choose"></LearningTopics>
            {/* learning topics swiperSlide end */}

            {/* latest Content */}
            <LatestContent></LatestContent>

            {/* Learner Reviews */}
            <LearnerReview></LearnerReview>
            {/* Languages section E learning official site  */}

            <ELearningSite></ELearningSite>
          

            {/* Facility Usage Statistics */}

            <UsageStatistics></UsageStatistics>
            {/* skill test */}
            <SkillTest></SkillTest>  

            {/* Mentors flip card */}

            <OurMentors></OurMentors>

             {/* Start About us  */}
            <AboutUs></AboutUs>

            

        </div>
    );
};

export default Home;