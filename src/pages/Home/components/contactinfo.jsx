import React from "react";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import UseSkills from "../../../hooks/useSkills";

const Contactinfo = () => {
  const [skills] = UseSkills();
  console.log(skills);
  return (
    <div>
      <ul className="timeline timeline-vertical">
        {
          skills.map((skill,index)=>{
            return(index%2==0?
            
              <li>
          <div className="timeline-start">
            <a href={skill?.Link} target="_blanck">
              <img
                className="h-[80px] w-[80px] opacity-30 hover:opacity-100"
                src={skill.imgLink}
                alt="html"
              />
              <p>{skill.skillName}</p>
            </a>
          </div>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end timeline-box">
            <p>{skill.discription}</p>
          </div>
          <hr />
        </li>:<li>
          <div className="timeline-start timeline-box">
            <p>{skill.discription}</p>
          </div>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end">
            <a href={skill?.Link} target="_blanck">
              <img
                className="h-[80px] w-[80px] opacity-30 hover:opacity-100"
                src={skill.imgLink}
                alt="html"
              />
              <p>{skill.skillName}</p>
            </a>
          </div>
          <hr />
        </li>
            )
          })
        }
      </ul>
    </div>
  );
};

export default Contactinfo;
