import { useForm } from "react-hook-form";
import loginImg from "../../assets/logo1.png"
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
    const [show, setShow] = useState(false);
    const { register, handleSubmit, formState: { errors }} = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    })
    return (
        <div className="register bg-transparent pt[200px]">
           
            <div className="hero  min-h-screen xxs:block pt-4   bg-transparent">
                <div className="hero-content pb-16 flex-col-reverse md:flex-row-reverse border-box box-content  shadow-4xl   md:mx-24 md:px-8 mx-2 px-2 ">
                    <div className="text-center md:w-2/5 md:text-left hidden md:block">

                        <img src={loginImg} alt="image" />
                    </div>
                    <div className="card w-full md:pt-4  md:w-3/5  shadow-2xl  pb-24 ">
                        <div className="text-center pt-2">
                            <h1 className="sm:text-4xl  text-xl font-bold">Login Here</h1>
                        </div>
                        <form className="card-body  py-0" onSubmit={handleSubmit()}>
                           
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" {...register("email", { required: true })} className="input input-bordered" />
                                {errors.email?.type === "required" && (
                                    <p role="alert" className="text-red-600">Email is required</p>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                    <input  type={show ? 'text' : 'password'} placeholder="password" name="password" {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        
                                    })}
                                    
                                     className="input input-bordered  w-full " />
                                    <span onClick={() => setShow(!show)} className="absolute  right-5 top-4">
                                        {
                                            show === true ? <FaEye /> : <FaEyeSlash />
                                        }


                                    </span>
                                </div>
                                
                                    
                                
                               

                            </div>
                            <div className="form-control mt-4">

                                <input type="submit" className="btn btn-primary" value="Login" />
                            </div>
                            <div>
                                <p>If You New Here? <Link to={'/register'} className="text-green-600 font-semibold">Please Sign Up</Link></p>
                                    
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;