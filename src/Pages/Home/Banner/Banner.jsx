import "./Banner.css"
import logo from "../../../assets/logo2.png"
import { FaLongArrowAltRight } from "react-icons/fa";
// import softwareEng from "../../../assets/how-to-become-a-software-engineer.png"
// import webDeveloper from "../../../assets/how-to-become-a-web-developer.png"
// import networkEng from "../../../assets/images.jpg"
import { useEffect, useState } from "react";
import SwiperCustom from "../../Shared/SwiperCustom/SwiperCustom";
import LanguageSwiper from "./LanguageSwiper/LanguageSwiper";
import TrackSwiper from "./TrackSwiper/TrackSwiper";

const Banner = () => {

  const [topicsData, setTopicsData] = useState([])
  const [languageData, setLanguageData] = useState([])
  const [trackData, setTrackData] = useState([])

  useEffect(() => {
      fetch('learningTopics.json')
          .then(response => response.json())
          .then(data => setTopicsData(data))
          .catch(error => console.error('Error fetching the data:', error));
  }, []);
  useEffect(() => {
      fetch('languageData.json')
          .then(response => response.json())
          .then(data => setLanguageData(data))
          .catch(error => console.error('Error fetching the data:', error));
  }, []);
  useEffect(() => {
      fetch('careerTrack.json')
          .then(response => response.json())
          .then(data => setTrackData(data))
          .catch(error => console.error('Error fetching the data:', error));
  }, []);


    document.addEventListener('DOMContentLoaded', () => {
        const stack = document.getElementById('stack');
        const cards = stack.querySelectorAll('.card');
      
        let currentActive = 0;
      
        stack.addEventListener('wheel', (event) => {
          if (event.deltaY > 0) {
            // Scroll down
            currentActive = (currentActive + 1) % cards.length;
          } else {
            // Scroll up
            currentActive = (currentActive - 1 + cards.length) % cards.length;
          }
      
          cards.forEach((card, index) => {
            if (index === currentActive) {
              card.classList.add('active');
            } else {
              card.classList.remove('active');
            }
          });
      
          // Prevent the default scroll behavior
          event.preventDefault();
        });
      });
      
    return (
        <div className="banner relative md:h-[1000px] h-auto">
            <div className=" bg-[#000324]">
                <div className="grid w-full md:grid-cols-2 grid-cols-1 ">
                    <div className="col-span-1 banner_round_logo items md:text-left text-center w-full md:h-[300px] md:sticky md:top-1/4 top-8">
                        <div className="rounded-bg bg-[#232643] mx-auto md:mx-0 h-[300px] w-[300px] rounded-full p-8">
                            <div className="inner-round-bg bg-[#131534] h-full w-full rounded-full p-12">
                                <h2 className="text-[#ff52d9] font-bold mx-4 text-xl">Learn With</h2>
                                <img src={logo} alt="" />
                            </div>
                        </div>
                        <div className="p-12 h-[100px]">
                            <button className="btn btn-secondary">Start Your Journey <span>
                                
                                <FaLongArrowAltRight></FaLongArrowAltRight>
                                </span></button>
                        </div>
                    </div>
                   {/* stack images */}
                    <div className="col-span-1 w-full relative md:p-0 p-4">
                        <div  className=" w-full h-full stack ">
                          <div className="items-stack h-">
                          <div className="text-center border border-base-content cursor-pointer   card1 w-full h-full  bg-base-100">
                                <div className=" absolute h-full w-full top-0 p-6 overflow-hidden">
                                    {/* <img className="w-full h-full   left-0 top-0" src={softwareEng} alt="softwareEng" /> */}
                                    {/* <SwiperCustom data={topicsData} inSliderNum={1}></SwiperCustom> */}
                                    <SwiperCustom data={topicsData} className="w-full h-full" ></SwiperCustom>
                                </div>
                            </div>
                            <div className="text-center border border-base-content cursor-pointer   card2 h-full w-full  bg-red-600">
                                <div className=" absolute h-full w-full top-0  p-6 overflow-hidden">
                                {/* <img className="w-full h-full  left-0 top-0 " src={networkEng} alt="networkEng" /> */}
                                {/* <LanguageSwiper data={languageData} className="w-full h-full"  ></LanguageSwiper> */}
                                <TrackSwiper data={trackData} className="w-full h-full"></TrackSwiper>
                                </div>
                            </div>
                            <div className="text-center border border-base-content cursor-pointer   card3 w-full h-full  bg-base-100">
                                <div className=" absolute h-full w-full top-0  p-6 overflow-hidden">
                                   
                                    {/* <img className="w-full h-full   left-0 top-0" src={webDeveloper} alt="webDeveloper" /> */}
                                  
                                    <LanguageSwiper data={languageData} className="w-full h-full"  ></LanguageSwiper>
                                </div>
                            </div>
                          </div>
                        </div>

                    </div>
                </div>



            </div>

        </div>
    );
};

export default Banner;