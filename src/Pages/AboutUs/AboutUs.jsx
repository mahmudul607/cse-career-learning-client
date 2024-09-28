import { FaPhone } from 'react-icons/fa';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className="aboutUs py-8 max-sm:px-4 max-sm:text-xs">
            <div className="lg:flex  ">
                <div className="flex flex-item lg:w-1/2 lg:h-[500px]  md:h-[400px] h-[300px] items-center   relative">
                    <div className="members mx-auto w-[150px]  md:w-[300px] md:h-[300px] h-[150px] rounded-full">

                    </div>
                    <div className="indicator absolute top-[75%] left-[30%]">
                        <span className="indicator-item h-20 w-20 indicator-start badge badge-secondary text-4xl"><FaPhone></FaPhone></span>
                        <div className="grid sm:w-48 sm:h-20 w-36 h-12 rounded-tr-full rounded-bl-full text-black bg-green-600 place-items-center content">
                            <h2 className='pl-6 pt-4'>01797692607</h2>
                        </div>
                    </div>
                </div>
                <div className="flex-item font-Roboto sm:p-8 p-2">
                    <h1 className='text-4xl text-[#ff52d9]'>About Us</h1>
                    <h1 className='text-white'>Create Life long Learning</h1>
                    <p className='text-white'>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks</p>
                    <div>
                        <div className="join join-vertical w-full text-white py-8 ">
                            <div className="collapse collapse-arrow join-item border-t-0 border-b-0 border-x-2 border-x-red-800 border-t-[#f57005]">
                                <input type="radio" name="my-accordion-4" defaultChecked />
                                <div className="collapse-title text-xl font-medium">
                                    We Provide to You:
                                </div>
                                <div className="collapse-content">
                                    <li>Learning Road Maps </li>
                                    <li>Job Finding  Techniques </li>
                                    <li>How to grow your skill with real World</li>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border-x-2 ">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium">
                                    Why You Follow Us?
                                </div>
                                <div className="collapse-content">
                                    <li>We are first and only one cse-career-learning with a new looks and full free</li>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border-x-2 border-b-0 border-t-0 border-[#f57005]">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title text-xl font-medium">
                                    Our Strength:
                                </div>
                                <div className="collapse-content">
                                    <li>We are a skilled team</li>
                                    <li>We work here with a team effort</li>
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