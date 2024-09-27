import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useCareerTrack = () => {
    const axiosPublic = useAxiosPublic();

    const {refetch,  data: careerTrack=[]} = useQuery({
        queryKey:['careerTrack'],
        queryFn: async () =>{
            const res = await axiosPublic.get(`/api/v1/web/career-tracks`);
            return res.data.data;
}})
    return [careerTrack, refetch, ]
    
};

export default useCareerTrack;