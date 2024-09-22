import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useHref } from "react-router-dom";


const useCertificateInfo = () => {
    const axiosPublic = useAxiosPublic();
    const location = useHref();
    const userId = location.split("/")[2]


   

    const {refetch, data: certificateInfo=[]} = useQuery({
        queryKey:['certificateInfo'],
        queryFn: async () =>{
            const res = await axiosPublic.get(`/api/v1/web/get-certificate-info/${userId}`);
            return res.data.data;
        },
    })
    return [certificateInfo, refetch]

};

export default useCertificateInfo;