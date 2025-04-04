import React from "react";
import bakground from "../../../../public/img/internet-3116062_1280-removebg-preview.png";
import mypic from "../../../../public/img/IMG202303211604401-removebg-preview.png";
import SocialMidia from "./socialMidia";
import CopyText from "./copyText";
import resume from '../../../../public/assets/Raisul_Islam_Resume.pdf'

const Bannar = () => {
  return (
    <div className="flex">
      <div
        className="hero rounded-xl"
        style={{
          backgroundImage: `url(${bakground})`,
        }}
      >
        <div className="hero-overlay bg-opacity-80 rounded-xl"></div>
        <div className="hero-content  text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl font-bold">
              Hello! I'm <br />{" "}
              <span className="text-blue-400  text-5xl">Raisul Islam</span>
            </h1>
            <p className="mb-5">
              I am a frontend web developer skilled in HTML, CSS, JavaScript,
              and React, with experience in Tailwind, Firebase, Express,
              MongoDB, Git, GitHub, Axios, and TanStack. I build responsive,
              interactive interfaces and manage data integration and backend
              services efficiently.
            </p>
            <button className="btn bg-gray-600 text-white hover:border-gray-400 text-2xl">
              <a href={'https://blue-yolande-60.tiiny.site/'} download={'https://blue-yolande-60.tiiny.site/'}>Download cv</a>
            </button>
          </div>
          <div>
            <figure>
              <img src={mypic} className="relative -bottom-4" alt="" />
            </figure>
          </div>
        </div>
      </div>
      {/* social midia */}
      <SocialMidia></SocialMidia>
    </div>
  );
};

export default Bannar;
