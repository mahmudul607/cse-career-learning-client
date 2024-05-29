// import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "../../../Hooks/axiosPublic";

import { useEffect, useState } from "react";
import { FaComment, FaHeart, FaUser } from "react-icons/fa";
import './LearnerReview.css'


const LearnerReview = () => {
        const [reviews, setReviews] = useState([]);

        useEffect(() => {

            fetch('learnerReviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
        },[]);
        // const {data:reviewsData=[]} = useQuery({
        //     queryKey:["reviews"],
        //     queryFn:( async()=>{
        //         const res = await useAxiosPublic.get("/learnerReviews");
        //         return res.data;
        //     })
        // })
        // console.log(reviewsData)
        console.log(reviews)
        
   
    return (
        <div className="learnerReview py-8 my-8 ">
           
           <div className="sectionTitle text-center pb-8 text-[#5f92da]  ">
                <h1 className="text-3xl bg-[#000324] font-roboto customAfter relative inline-block px-8  ">Learner Reviews</h1>
                <h2 className="text-white">Take Confident From Here</h2>
            </div>
         
            <div className="parent_grid gap-8 lg:gap-4 px-8 lg:px-4">

                {
                    reviews.map((item, index) => <div className={`grid-item relative h-full w-full bg-[#121534] text-white rounded-md grid-items-${index +1}`} key={item.id}>
                    <div className="card border-success mb-3 h-full w-full">
                        {/* <div className="card-header bg-transparent border-success">Header</div> */}
                        <div className="card-body ">
                           
                            <p className="card-text ">
                                {
                                    item.shortReview
                                }
                            </p>
                            <div className="comment_icon text-[100px] absolute top-1/3 opacity-5 right-1/3 ">
                                    <FaComment/>
                                </div>
                        </div>
                        <div className="card-footer flex  justify-start  bg-transparent border-success  p-4 border-t-2 rounded-lg  border-t-teal-900">
                            <div className="learner_profile flex w-full justify-between ">
                                <div className="flex gap-8 text-[#5f92da]">
                                <div className="img text-3xl">
                                    <FaUser/>
                                </div>
                                <div className="details_profile flex-col flex">
                                    <span className="name">{item.name}</span>
                                    <span className="learning_topics text-xs">{item.topicsLearned[0]}, {item.topicsLearned[1]}</span>
                                </div>
                                </div>
                                <div className="bar_round text-2xl opacity-20 justify-end flex">
                                    <FaHeart/>
                                </div>
                               
                            </div>
                        </div>
                    </div>

                </div>)
                }
               
               

              
            </div>

        </div>
    );
};

export default LearnerReview;