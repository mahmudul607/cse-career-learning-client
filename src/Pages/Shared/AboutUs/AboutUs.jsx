import { FaPhone } from 'react-icons/fa';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className="aboutUs py-8 my-8">
            <div className="flex lg:h-[500px]   md:h-[400px] h-[300px] ">
                <div className="flex flex-item w-1/2  items-center  h-full relative">
                    <div className="members mx-auto  w-[300px] h-[300px] rounded-full">

                    </div>
                    <div className="indicator absolute top-[65%] left-[10%]">
                        <span className="indicator-item h-20 w-20 indicator-start badge badge-secondary text-4xl"><FaPhone></FaPhone></span>
                        <div className="grid w-48 h-20 rounded-tr-full rounded-bl-full text-black bg-[#f57005] place-items-center">
                            <h2>02154645778</h2>
                        </div>
                    </div>
                </div>
                <div className="flex-item font-Roboto p-8">
                    <h1 className='text-4xl text-[#ff52d9]'>About Us</h1>
                    <h1>Create Life long Learning</h1>
                    <p className=''>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks</p>
                    <div>
                        <div className="join join-vertical w-full text-white py-8 ">
                            <div className="collapse collapse-arrow join-item border-t-0 border-b-0 border-x-2 border-x-red-800 border-t-[#f57005]">
                                <input type="radio" name="my-accordion-4" defaultChecked />
                                <div className="collapse-title text-xl font-medium">
                                    We Provide to You:
                                </div>
                                <div className="collapse-content">
                                    <p>Learning Road Maps </p>
                                    <p>Job Finding  Techniques </p>
                                    <p>How to grow your skill with real World </p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border-x-2 ">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium">
                                    Why You Follow Us?
                                </div>
                                <div className="collapse-content">
                                    <p>We are first and only one cse-career-learning with a new looks and full free</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border-x-2 border-b-0 border-t-0 border-[#f57005]">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium">
                                    Our Strength:
                                </div>
                                <div className="collapse-content">
                                    <p>We are a team</p>
                                    <p>We work here with a team effort</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;