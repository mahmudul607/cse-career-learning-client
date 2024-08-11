import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";




const useCareerPaths = () => {
    const axiosPublic = useAxiosPublic();

   

    const {refetch, data: careerPaths=[]} = useQuery({
        queryKey:['careerPaths'],
        queryFn: async () =>{
            const res = await axiosPublic.get('/careerPathsData.json');
            return res.data;
        },
    })
    return [careerPaths, refetch]
};

export default useCareerPaths;