import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import "./style.css";

const DitailsPage = () => {
  const axiosPublic = useAxiosPublic();
  const id = useLoaderData();
  const { data: projectsDetails = [] } = useQuery({
    queryKey: ["projectsDetails"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/projectsDetails/${id}`);
      return res.data;
    },
  });
  console.log(id, projectsDetails);
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-[50%]">
          <img
            src={projectsDetails.homepage_img}
            className="max-w-sm rounded-lg shadow-2xl w-[100%]"
          />
          </div>
          <div className="text-2xl w-[50%]">
            <h1 className="text-5xl font-bold">
              {projectsDetails.project_name}
            </h1>
            <small>Category : {projectsDetails.project_category}</small>
            <p className="py-6">{projectsDetails.project_sort_discription}</p>
            <hr className="border-1 border-blue-500 w-full my-6 border-solid" />
            <p>{projectsDetails.project_long_discription}</p>
            <hr className="border-1 border-blue-500 w-full my-6 border-solid" />
            <span className="text-blue-400 font-bold text-3xl p-2 rounded-3xl shadow-2xl m-2">Facilitys:</span>
            
            {projectsDetails.ficture && projectsDetails.ficture.length > 0 ? (
              <div className="list-inside list-disc">
                {projectsDetails.ficture.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </div>
            ) : (
              <div>No facilities available</div>
            )}
            <hr className="border-1 border-blue-500 w-full my-6 border-solid" />
            <span className="text-blue-400 font-bold text-3xl p-2 rounded-3xl shadow-2xl m-2">Tecnology:</span>
            {projectsDetails.tecnology_use && projectsDetails.tecnology_use.length > 0 ? (
              <div className="list-inside list-disc">
                {projectsDetails.tecnology_use.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </div>
            ) : (
              <div>No Tecnology available</div>
            )}
            <hr className="border-1 border-blue-500 w-full my-6 border-solid" />

            <div className="flex gap-5">
            <a href={projectsDetails.live_link}>
              <button className="btn btn-primary">Live link</button>
            </a>
            <a href={projectsDetails.repository_link}>
              <button className="btn btn-primary">View Repository</button>
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DitailsPage;
