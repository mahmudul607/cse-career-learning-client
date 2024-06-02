import FlipCard from "../../Shared/FlipCard/FlipCard";


const OurMentors = () => {
    return (
        <div>
            <div className="OurMentors_Title text-center ">
                <h1 className="text-3xl text-[#63788d] font-roboto">Our Mentors</h1>
                <p>They are all of hard worker</p>
            </div>
            <div className="grid lg:grid-cols-5 sm:grid-cols-3  py-4 gap-4 grid-cols-1 px-4 ">
                <FlipCard></FlipCard>
            </div>
        </div>
    );
};

export default OurMentors;