import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
import { useEffect, useRef, useState } from 'react';
import ImageWithFallback from '../../../Shared/ImageWithFallback/ImageWithFallback';
import { Link } from 'react-router-dom';

const TrackSwiper = ({ data, inSliderNum }) => {
    const [slidePerview, setSlidePerview] = useState(inSliderNum);
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

   

    

    useEffect(() => {


        const updateSlidePerView = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 640) {
                setSlidePerview(1)
            }
            else if (screenWidth < 1024) {
                setSlidePerview(1)
            } else {
                setSlidePerview(1)
            }
        };

        updateSlidePerView();

        window.addEventListener('resize', updateSlidePerView);
        return () => {
            window.removeEventListener('resize', updateSlidePerView);
        };
    }, [])




    return (
        <>
            <Swiper
                slidesPerView={slidePerview}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,

                }}
                onAutoplayTimeLeft={onAutoplayTimeLeft}

                modules={[Pagination, Autoplay]}
                className="mySwiper h-full"
                key={data.map(item => item?.id).join('-')} 
            >
                {data ?
                    data?.map((item, index) =>  <SwiperSlide key={index}>
                        <div className="card h-[300px] bg-base-100 shadow-xl image-full">
                            <figure>
                                
                                <ImageWithFallback
                                    src={item?.attachment}
                                    alt="image"
                                    defaultSrc="https://i.ibb.co/7G2THnw/20553832.jpg"
                                    className="w-full h-full"


                                ></ImageWithFallback>
                                </figure>
                            <div className="card-body">
                                <h2 className="card-title md:text-lg lg:text-2xl sm:text-sm text-xs text-[#ff52d9]">{ item?.name}</h2>
                                <div className="topic-steps overflow-hidden inline-block ">
                                    {
                                        item?.description === undefined ? <div className='inline-block text-left '>{`${item?.details?.slice(0, 200)}`} </div>: ""
                                    }
                                    {
                                        item?.details === undefined ? <div className='inline-block text-left '>{`${item?.description?.slice(0, 200)}`}</div>:""
                                    }
                               
                                  
                                </div>
                                <div className="card-actions justify-end card-footer">
                                    <Link to={`career-track/${item?.id}`} className="btn btn-primary">Get More</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                       


                    ) : null
                }
                 <div className="autoplay-progress" slot="container-end">
                            <svg viewBox="0 0 48 48" ref={progressCircle}>
                                <circle cx="24" cy="24" r="20"></circle>
                            </svg>
                            <span ref={progressContent}></span>
                        </div>

            </Swiper>


        </>
    );
};



export default TrackSwiper;