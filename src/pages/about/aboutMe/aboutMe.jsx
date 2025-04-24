import React from "react";
import abPic from '../../../../public/img/abpic.png';
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

const AboutMe = () => {
  return (
    <div className="flex justify-center text-left border-2 border-blue-800 my-4 rounded-xl">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3 }}
        className="w-1/2 p-6 text-xl space-y-6"
      >
        <TypeAnimation
          sequence={["I am a frontend web developer with a comprehensive skill set that includes HTML, CSS, and JavaScript, allowing me to build robust and dynamic web applications. My expertise in React enables me to create highly interactive and user-friendly interfaces, while my knowledge of Tailwind CSS ensures that these interfaces are not only functional but also aesthetically pleasing and responsive."]}
          speed={50}
          repeat={0}
          style={{ fontSize: '1.5rem'}}
          cursor={false} 
        />

        <TypeAnimation
          sequence={[1000, " I am adept at integrating various backend services to enhance the functionality of web applications. Using Firebase, I can implement real-time database solutions, authentication, and cloud storage."]}
          speed={50}
          repeat={0}
          style={{ fontSize: '1.5rem'}}
          cursor={false} 
        />

        <TypeAnimation
          sequence={[2000, "Additionally, I utilize Express and MongoDB to develop scalable server-side applications and manage complex data interactions. Version control and collaboration are integral parts of my workflow."]}
          speed={50}
          repeat={0}
          style={{ fontSize: '1.5rem'}}
          cursor={false} 
        />

        <TypeAnimation
          sequence={[3000, "I use Express and MongoDB to develop scalable backend applications and handle data effectively."]}
          speed={50}
          repeat={0}
          style={{ fontSize: '1.5rem'}}
          cursor={false} 
        />

        <TypeAnimation
          sequence={[4000, "I rely on Git for version control and GitHub for project collaboration, ensuring that codebases are well-managed and team efforts are streamlined. For handling HTTP requests, I use Axios,which simplifies communication between the frontend and backend services. Moreover, my proficiency with TanStack (previously known as React Query) allows me to efficiently manage server state in React applications, optimizing data fetching and caching to enhance performance and user experience."]}
          speed={50}
          repeat={0}
          style={{ fontSize: '1.5rem'}}
          cursor={false} 
        />
      </motion.div>

      <div className="relative grid items-center w-1/2 p-4">
        <img className="h-[400px] w-full object-contain" src={abPic} alt="About me illustration" />
      </div>
    </div>
  );
};

export default AboutMe;
