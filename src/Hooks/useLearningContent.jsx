import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useLearningContent = () => {
    const axiosPublic = useAxiosPublic();

    const {refetch, data: learningContents=[]} = useQuery({
        queryKey:['learningContents'],
        queryFn: async () =>{
            const res = await axiosPublic.get(`/api/v1/web/learning-contents`);
            return res.data.data;
}})
    return [learningContents, refetch]
};

export default useLearningContent;