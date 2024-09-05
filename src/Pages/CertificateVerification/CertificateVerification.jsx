

import { useHref } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const CertificateVerification = () => {
    const axiosPublic = useAxiosPublic();
   
    const location = useHref();
    const userId = location.split('/')[2]
   

    const { data: info = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/api/v1/web/get-certificate-info/${userId}`);
            return res.data.data;
        }
    })

    console.log(info)

 
  




    

    return (
        <div className="h-screen text-white mx-auto text-center pt-32">
            <h1 className="text-3xl text-green-600 pb-12">Verification Successful</h1>
            <h1 className="text-xl">This Certificate goes to: <span className="text-xl font-semibold text-[#f58a35]">{info.name}</span> </h1>
            <p>Verified By: CSE Career Learning</p>
            
            
        </div>
    );
};

export default CertificateVerification;