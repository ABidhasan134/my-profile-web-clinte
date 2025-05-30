// ProjectCard.jsx
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ item, index }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card bg-base-100 w-96 shadow-xl border-2 border-blue-800 pt-5"
    >
      <figure>
      <a href={item.live_link || item.repository_link} target="_blank">
        <img className="h-[300px]" src={item.homepage_img} alt="Project" />
      </a>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.project_name}</h2>
        <p>{item.project_motivation}</p>
        <div className="flex justify-evenly">
          <a href={item.repository_link} className="text-blue-500">GitHub</a>
          <Link to={`/ditails/${item._id}`}>
            <button className="btn">Details</button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
