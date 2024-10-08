

const Content = ({content }) => {
   
        const isVideo = content?.content_type === "video";
        const name = isVideo ? content.content_details.creator.name : content?.content_details?.author?.name;
    
    return (
        <div className="hero rounded bg-transparent bg-[#1e203e] text-white ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="https://i.ibb.co/Q8xsvnd/machinel.jpg"
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div className="text-left">
                    <h1 className="text-xl font-bold">{content?.content_details?.title}</h1>
                    <p className="py-6">
                        { content?.content_details?.description }
                    </p>
                 
                    <div className="footer pt-4 ">
                    <p >By: {name}</p>
                </div>
                </div>
                
            </div>
        </div>
    );
};

export default Content;