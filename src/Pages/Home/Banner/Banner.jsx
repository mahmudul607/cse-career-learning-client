import "./Banner.css"
import logo from "../../../assets/cse_logo.png"
import { FaLongArrowAltRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import ToolTechnologySwiper from "./ToolTechnologySwiper/ToolTechnologySwiper";
import TrackSwiper from "./TrackSwiper/TrackSwiper";
import TopicsSwiper from "./TopicsSwiper/TopicsSwiper";
import useCareerTrack from "../../../Hooks/useCareerTrack";
import useTechnology from "../../../Hooks/useTechnology";
import useLearningContent from "../../../Hooks/useLearningContent";
import { Link } from "react-router-dom";

const Banner = () => {

  const [trackData, setTrackData] = useState([])
  const [learningContents] = useLearningContent();
  const [toolTechnologies] = useTechnology()
  const [careerTrack] = useCareerTrack();


  let careerTracks = []
  if (careerTrack.length < 2) {
    careerTracks = [careerTrack[0], ...trackData];

  }
  else {
    careerTracks = [...careerTrack];
  }



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
        currentActive = (currentActive + 1) % cards?.length;
      } else {
        // Scroll up
        currentActive = (currentActive - 1 + cards?.length) % cards?.length;
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
    <div className="banner w-full relative md:h-[1000px] h-auto">
      <div className=" bg-[#000324]">
        <div className="grid w-full md:grid-cols-2 grid-cols-1 ">
          <div className="col-span-1 p-6  banner_round_logo items md:text-left text-center w-full md:h-[300px] md:sticky md:top-1/4 top-8">
            <div className="rounded-bg bg-[#232643] mx-auto md:mx-0 sm:h-[300px] sm:w-[300px] rounded-full p-8">
              <div className="inner-round-bg bg-[#131534] h-full w-full rounded-full p-12">
                <h2 className="text-[#ff52d9] font-bold mx-4 text-xl">Learn With</h2>
                <span className="text-center h-full sm:w-24 w-48 relative" >
                  <img className=" pb-0 " src={logo} alt="logo" />
                  <p className="text-white text-2xl font-extrabold relative -right-16 bottom-2">Career</p>
                </span>
              </div>
            </div>
            <div className="p-12 h-[100px]">
              <Link to={'http://admin.csecareer.com'} className="btn btn-secondary">Start Your Journey <span>

                <FaLongArrowAltRight></FaLongArrowAltRight>
              </span></Link>
            </div>
          </div>
          {/* stack images */}
          <div className="col-span-1 w-full relative md:p-0 p-4">
            <div className=" w-full h-full stack ">
              <div className="items-stack h-">
                <div className="text-center border border-base-content cursor-pointer   card1 w-full h-full  bg-base-100">
                  <div className=" absolute h-full w-full top-0 md:p-4 p-1 overflow-hidden ">

                    <TopicsSwiper data={learningContents} className="w-full h-full mb-6" inSliderNum={1} ></TopicsSwiper>
                  </div>
                </div>
                <div className="text-center border border-base-content cursor-pointer   card2 h-full w-full  bg-red-600">
                  <div className=" absolute h-full w-full top-0   md:p-4 p-1 overflow-hidden">

                    <TrackSwiper data={careerTracks} className="w-full h-full"></TrackSwiper>
                  </div>
                </div>
                <div className="text-center border border-base-content cursor-pointer   card3 w-full h-full  bg-base-100">
                  <div className=" absolute h-full w-full top-0   md:p-4 p-1 overflow-hidden">



                    <ToolTechnologySwiper data={toolTechnologies} className="w-full h-full"  ></ToolTechnologySwiper>
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