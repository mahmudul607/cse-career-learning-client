import axios from "axios";

const  axiosPublic = axios.create({
    baseURL: "http://85.31.235.79:5000",

})




const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;