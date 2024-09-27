import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useTechnology = () => {
    const axiosPublic = useAxiosPublic();

    const {refetch, data: toolsTechnologies=[]} = useQuery({
        queryKey:['toolsTechnologies'],
        queryFn: async () =>{
            const res = await axiosPublic.get(`/api/v1/web/tools-technologies`);
            return res.data.data;
}})
    return [toolsTechnologies, refetch]
};

export default useTechnology;