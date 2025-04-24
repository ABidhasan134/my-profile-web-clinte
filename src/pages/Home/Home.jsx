import React from "react";
import TitleAndSub from "../../shared/titleAndSub";
import MyProject from "../projects/myProject";
import Bannar from "./components/bannar";
import Skills from "./components/skills";
import Connaction from "./connnaction/connaction";
import { Helmet } from "react-helmet-async";
import Contactinfo from "./components/contactinfo";
import AboutMe from "../about/aboutMe/aboutMe";
import Certificate from "../about/components/certificate";

const Home = () => {
  return (
    <div className="text-center">
      
      <Helmet>
        <title>Rasul Islam || Home</title>
      </Helmet>
      <Bannar></Bannar>
      <TitleAndSub
        title="About Raisul"
        subtitle="know more about me and my worke"
      ></TitleAndSub>
      <AboutMe></AboutMe>
      <TitleAndSub
        title="Projects"
        subtitle="Diffrent typo of catagory project motivet from many here"
      ></TitleAndSub>
      <MyProject></MyProject>
      <Skills></Skills>
      <Contactinfo></Contactinfo>
      <TitleAndSub title="Certificate" subtitle='importen certificates'></TitleAndSub>
      <Certificate></Certificate>
      <TitleAndSub title="Get into Touch"></TitleAndSub>
      <Connaction></Connaction>
    </div>
  );
};

export default Home;
