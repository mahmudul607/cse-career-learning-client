
import { Link } from "react-router-dom";
import logo from "../../../assets/cse_logo.png"
const Footer = () => {
    return (
        <footer className="grid text-xs sm:text-sm md:text-md gap-4 lg:p-10 p-4 grid-cols-1 sm:grid-cols-3 lg:grid-rows-1 sm:grid-rows-2 lg:grid-cols-4 text-white ">
            <div className="col-span-1 sm:row-span-2">
                <aside className="w-48 ">
                    <Link className="text-center h-full sm:w-24 w-48 relative" to={'/'}>
                        <img className=" pb-0 " src={logo} alt="logo" />
                        <p className=" text-xl font-extrabold absolute -right-20 bottom-2">Career</p>
                    </Link>
                    <p>CSE Career Learning<br />Providing reliable tech since 2020</p>
                </aside>
            </div>
            <div className=" col-span-1 sm:row-span-1 flex flex-col">
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div className=" col-span-1 sm:row-span-1 flex flex-col">
                <h6 className="footer-title ">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
            <form className="col-span-1  sm:row-span-1 sm:col-span-2   lg:col-span-1">
                <h6 className="footer-title">Newsletter</h6>
                <fieldset className="form-control ">
                    <label className="">
                        <span className="">Enter your email address</span>
                    </label>
                    <div className="join overflow-hidden max-sm:flex-col max-sm:gap-2">
                        <input type="text" placeholder="username@site.com" className="p-2  input-bordered join-item" />
                        <button className="btn p-2 join-item ">
                            <span className="button_curve "></span>
                            Subscribe</button>
                    </div>
                </fieldset>
            </form>


        </footer>
    );
};

export default Footer;