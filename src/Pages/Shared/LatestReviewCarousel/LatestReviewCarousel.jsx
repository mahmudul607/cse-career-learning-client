
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState } from "react";

const LatestReviewCarousel = () => {

    const [LatestContent, setLatestContent] = useState([]);

    useEffect(() => {
        fetch('/learnerReviews.json')
            .then(response => response.json())
            .then(data => setLatestContent(data))
            .catch(error => console.error('Error fetching the data:', error));
    }, []);
    console.log(LatestContent)


    return (
        <Carousel>

            {
                LatestContent.map(cont => <div key={cont.id}>
                    <div className="card bg-base-100 image-full h-60 shadow-xl">
                        <figure>
                            <img
                                src="https://i.ibb.co/Q8xsvnd/machinel.jpg"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{cont.name}</h2>
                            <p>{cont.shortReview}</p>
                            
                        </div>
                    </div>
                </div>)
            }


        </Carousel>
    );
};

export default LatestReviewCarousel;


