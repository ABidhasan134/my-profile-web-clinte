import React from "react";
import { Link } from "react-router-dom";
import useProjects from "../../hooks/useProjects";

const MyProject = () => {
  const [projects] = useProjects();
  console.log(projects);
  return (
    <div className="grid grid-cols-3">
      {projects.map((item, index) => {
        return (
          <div className="card bg-base-100 w-96 shadow-xl border-2 border-blue-800 pt-5">
            <figure>
              <img className="h-[300px]" src={item.homepage_img} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.project_name}</h2>
              <p>{item.project_motivation}</p>
              <div className="flex justify-evenly">
                <a href={item.repository_link} className="text-blue-500">
                  github repository
                </a>
                <Link to={`/ditails/${item._id}`}>
                  <button className="btn">Ditails</button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyProject;
