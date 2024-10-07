import { Link} from "react-router-dom";
import loginImg from '../../assets/logo (2).png'
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";








const Register = () => {
    const axiosPublic = useAxiosPublic();
  
    
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }


    })
    const navigateToExternalLogin = () => {
        window.location.href = "http://admin.csecareer.com/login";
      };

    const onSubmit = async (data) => {
        
        try {
            const response = await axiosPublic.post('/api/v1/web/register', data);
            
            if(response.data.success==true){
                console.log(response.data)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is registered`,
                    showConfirmButton: false,
                    timer: 1500

                    
                });
                navigateToExternalLogin();
            }
        } catch (error) {
            // Log the entire error response
            if (error.response) {
                console.log('Error response:', error.response.data); // Inspect error details here
            }
            console.error('Error posting data:', error);
        }
    };





    // view password character
    const [show, setShow] = useState(false);
    const [passwordQuality, setPasswordQuality] = useState(null)



    const validatePassword = (value) => {
        // Check for uppercase, lowercase, and number
        // let score = 0;
        const upperCaseRegex = /[A-Z]/;
        const lowerCaseRegex = /[a-z]/;
        const numberRegex = /\d/;
        const specialCharacterRegex = /(?=.*?[#?!@$%^&*-])/;

        if (!upperCaseRegex.test(value)) {
            // score++;
            return "Must include at least one uppercase letter";
        }

        if (!lowerCaseRegex.test(value)) {
            // score++;
            return "Must include at least one lowercase letter";
        }

        if (!numberRegex.test(value)) {
            // score++;
            return "Must include at least one number";
        }
        if (!specialCharacterRegex.test(value)) {
            // score++;
            return "Must include at least one Special character such as(#?!@$%^&*-)";
        }



        return true;


    };


    const calculatePasswordQuality = (value) => {

        let score = 0;
        const passwordLength = value.length;
        const numberRegex = /\d/;
        const upperCaseRegex = /[A-Z]/;
        const lowerCaseRegex = /[a-z]/;
        const specialCharacterRegex = /(?=.*?[#?!@$%^&*-])/;
        if (passwordLength >= 8) {
            score += 1;

        }
        if (numberRegex.test(value)) {
            score += 1;

        }
        if (upperCaseRegex.test(value)) {
            score += 1;

        }

        if (lowerCaseRegex.test(value)) {
            score += 1;

        }
        if (specialCharacterRegex.test(value)) {
            score += 1;

        }


        if (score >= 5) {
            return "strong";
        } else if (score >= 4) {
            return "good";
        } else if (score >= 3) {
            return "weak";
        } else if (score >= 2) {
            return "very weak"; // Password is too short
        } else {
            return
        }

    }





    const handlePasswordChange = (event) => {
        const password = event.target.value;
        // const password = watch("password");
        const quality = calculatePasswordQuality(password);
        setPasswordQuality(quality)

    }



    // const handlePasswordChange = () =>{
    //     console.log('hello changed')
    // }
    return (
        <div className="register bg-transparent text-black">

            <div className="hero  min-h-screen xxs:block pt-4   bg-transparent">
                <div className="hero-content w-full md:w-4/6 pb-16 flex-col-reverse md:flex-row-reverse border-box box-content  shadow-2xl   md:mx-24 md:px-8 mx-2 px-2 ">
                    <div className="text-center md:w-2/5 md:text-left absolute md:relative -z-10">
                        <span className="text-center h-full sm:w-24 md:w-48  " >
                            <img className=" pb-0 " src={loginImg} alt="logo" />
                           
                        </span>

                    </div>
                    <div className="card w-full md:pt-4 md:w-3/5  shadow-2xl  pb-24 ">
                        <div className="text-center pt-2 text-white">
                            <h1 className="sm:text-4xl  text-xl font-bold">Sign Up</h1>
                        </div>
                        <form className="card-body  py-0" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Name</span>
                                </label>
                                <input type="name" placeholder="Name" name="name" {...register("name", { required: true })} className="input input-bordered" />
                                {errors.name?.type === "required" && (
                                    <p role="alert" className="text-red-600">Name is required</p>
                                )}
                            </div>
                          
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" {...register("email", { required: true })} className="input input-bordered" />
                                {errors.email?.type === "required" && (
                                    <p role="alert" className="text-red-600">Email is required</p>
                                )}
                            </div>
                            <div className="md:flex gap-2 w-full">
                            
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-white">Mobile</span>
                                </label>
                                <input type="text" placeholder="mobile" name="mobile" {...register("mobile", { required: true })} className="input input-bordered" />
                                {errors.name?.type === "required" && (
                                    <p role="alert" className="text-red-600">Mobile is required</p>
                                )}
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-white">Account Type</span>
                                </label>
                                <select
                                    className="select w-full text-black"
                                    name='roleId'
                                    id='roleId'
                                    {...register("roleId", { required: true })}


                                >
                                    <option disabled value="">Pick your Role</option>
                                    <option value="3">Local User</option>
                                    <option value="2">Instructor</option>
                                    <option value="1">Admin</option>

                                </select>

                            </div>

                            </div>
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <div className="relative">
                                    <input type={show ? 'text' : 'password'} placeholder="password" name="password" {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        validate: validatePassword
                                    })}
                                        onChange={handlePasswordChange}
                                        className="input input-bordered  w-full " />
                                    <span onClick={() => setShow(!show)} className="absolute  right-5 top-4">
                                        {
                                            show === true ? <FaEye /> : <FaEyeSlash />
                                        }


                                    </span>
                                </div>

                                {passwordQuality && (
                                    <p className={` text-${passwordQuality === "weak" ? "red" : passwordQuality === "strong" ? "green" : passwordQuality === "good" ? "yellow" : "orange"}-600`}>
                                        {passwordQuality}
                                    </p>
                                )}

                                {errors.password?.type === "required" && (
                                    <p role="alert" className="text-red-600">Password is required</p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p role="alert" className="text-red-600">Must be includes all requirements for a Strong password</p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p role="alert" className="text-red-600">Password Must be at least 6 character</p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p role="alert" className="text-red-600">Password Must be less then 20 character</p>
                                )}
                                {errors.password?.message && (
                                    <p role="alert" className="text-red-600">{errors.password.message}</p>
                                )}

                            </div>
                            <div className="form-control mt-4">

                                <input type="submit" className="btn btn-primary" value="Register" />
                            </div>
                            <div className="text-white">
                                <p>Already Have an Account? <Link to={'http://admin.csecareer.com/login'} className="text-green-600 font-semibold">Login Here</Link></p>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;