import React from "react";
import abPic from '../../../../public/img/abpic.png'
const AboutMe = () => {
  return (
    <div className="flex justify-between text-left border-2 border-blue-800 my-4 rounded-xl">
      <p className="mx-6 p-6 text-2xl gap-3">
        <p className="my-6">
          I am a frontend web developer with a comprehensive skill set that
          includes HTML, CSS, and JavaScript, allowing me to build robust and
          dynamic web applications. My expertise in React enables me to create
          highly interactive and user-friendly interfaces, while my knowledge of
          Tailwind CSS ensures that these interfaces are not only functional but
          also aesthetically pleasing and responsive.
        </p>
        <br />
        <p>
          I am adept at integrating various backend services to enhance the
          functionality of web applications. Using Firebase, I can implement
          real-time database solutions, authentication, and cloud storage.{" "}
        </p>
        <br />{" "}
        <p>
          Additionally, I utilize Express and MongoDB to develop scalable
          server-side applications and manage complex data interactions. Version
          control and collaboration are integral parts of my workflow.
        </p>{" "}
        <br />
        <p>
          I rely on Git for version control and GitHub for project
          collaboration, ensuring that codebases are well-managed and team
          efforts are streamlined. For handling HTTP requests, I use Axios,
          which simplifies communication between the frontend and backend
          services. Moreover, my proficiency with TanStack (previously known as
          React Query) allows me to efficiently manage server state in React
          applications, optimizing data fetching and caching to enhance
          performance and user experience.
        </p>
      </p>
      {/*  */}
      <div className="relative grid right-1 bottom-0  items-center">
            <img className="h-[400px] w-[1200px]" src={abPic} alt="" />
      </div>
    </div>
  );
};

export default AboutMe;
