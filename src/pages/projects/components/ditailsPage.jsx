import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./style.css";
import { AuthContext } from "../../../context/authProvider";
import useOneProject from "../../../hooks/useOneProject";


const DitailsPage = () => {
  const {developer}=useContext(AuthContext);
  const id = useLoaderData();
  const [projectsDetails,isLoading,refetch]=useOneProject(id);
  console.log(id, projectsDetails);
  if(isLoading){
    return <div>Loading Ditails</div>
  }
  return (
    <div>
      <div className="hero bg-base-200 rounded-xl min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-[50%]">
          <a href={projectsDetails.live_link || projectsDetails.repository_link} target="_blank">
          <img
            src={projectsDetails.homepage_img}
            className="max-w-sm rounded-lg shadow-2xl w-[100%]"
          />
          </a>
          </div>
          <div className="text-2xl w-[50%]">
            <h1 className="text-5xl font-bold">
              {projectsDetails.project_name}
            </h1>
            <small>Category : {projectsDetails.project_category}</small>
            <p className="py-6">{projectsDetails.project_sort_description}</p>
            <hr className="border-1 border-blue-500 w-full my-6 border-solid" />
            <p>{projectsDetails.project_long_description}</p>
            <hr className="border-1 border-blue-500 w-full my-6 border-solid" />
            <span className="text-blue-400 font-bold text-3xl p-2 rounded-3xl shadow-2xl m-2">Facilitys:</span>
            
            {projectsDetails.features && projectsDetails.features.length > 0 ? (
              <div className="list-inside list-disc">
                {projectsDetails.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </div>
            ) : (
              <div>No facilities available</div>
            )}
            <hr className="border-1 border-blue-500 w-full my-6 border-solid" />
            <span className="text-blue-400 font-bold text-3xl p-2 rounded-3xl shadow-2xl m-2">Tecnology:</span>
            {projectsDetails.technology_used && projectsDetails.technology_used.length > 0 ? (
              <div className="list-inside list-disc">
                {projectsDetails.technology_used.map((technology_use, index) => (
                  <li key={index}>{technology_use}</li>
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
            {
              developer?.userName && <Link to={`/updateProject/${id}`}>
              <button className="btn btn-primary">Update</button>
            </Link>
            }
            

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DitailsPage;
