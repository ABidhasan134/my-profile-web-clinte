import React from "react";
import { Link } from "react-router-dom";
import useProjects from "../../hooks/useProjects";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import skeletonImg from "../../../public/img/skelton.jpg"
import ProjectCard from "./projectCard";

const MyProject = () => {
  const [projects,isLoading] = useProjects();
  // console.log(projects);
  if(isLoading){
    return <div className="grid grid-cols-3 gap-3 justify-center">
      <div>
      <figure> <img className="opacity-10 hover:opacity-80" src={skeletonImg} alt="" /></figure>
      <Skeleton className="animate-pulse" count={5} /> 
      </div>
      <div>
      <figure> <img className="opacity-10 hover:opacity-80" src={skeletonImg} alt="" /></figure>
      <Skeleton className="animate-pulse" count={5} /> 
      </div>
      <div>
      <figure> <img className="opacity-10 hover:opacity-80" src={skeletonImg} alt="" /></figure>
      <Skeleton className="animate-pulse" count={5} /> 
      </div>
    </div>
  }
  return (
    <div className="grid grid-cols-3">
     {projects.map((item, index) => (
  <ProjectCard key={item._id} item={item} index={index} />
))}
    </div>
  );
};

export default MyProject;
