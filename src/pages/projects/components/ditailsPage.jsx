import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const DitailsPage = () => {
  const axiosPublic=useAxiosPublic()
  const id=useLoaderData();
  const {data:projectsDetails=[]} = useQuery({
    queryKey: ['projectsDetails'], 
    queryFn: async()=>{
       const res=await axiosPublic.get(`/projectsDetails/${id}`);
       return res.data
    }
    })
  console.log(id,projectsDetails);
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={projectsDetails.homepage_img}
      className="max-w-sm rounded-lg shadow-2xl w-[50%]" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    </div>
  )
  
};

export default DitailsPage;
