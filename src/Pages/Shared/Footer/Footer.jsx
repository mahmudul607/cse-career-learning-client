
import logo from "../../../assets/logo2.png"
const Footer = () => {
    return (
        <footer className="grid gap-4 p-10 grid-cols-1 sm:grid-cols-3 lg:grid-rows-1 sm:grid-rows-2 lg:grid-cols-4 text-white ">
            <div className="col-span-1 sm:row-span-2">
            <aside className="w-48 ">
                <img className="w-full h-full" src={logo} alt="logo" />
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
                    <div className="join">
                        <input type="text" placeholder="username@site.com" className="p-2 input-bordered join-item" />
                        <button className="btn customButton join-item ">
                            <span className="button_curve"></span>
                            Subscribe</button>
                    </div>
                </fieldset>
            </form>

           
        </footer>
    );
};

export default Footer;