import React from "react";
import TitleAndSub from "../../shared/titleAndSub";
import MyProject from "../projects/myProject";
import AboutMe from "./aboutMe/aboutMe";
import Bannar from "./components/bannar";
import Skills from "./components/skills";
import Connaction from "./connnaction/connaction";

const Home = () => {
  return (
    <div className="text-center">
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
      <TitleAndSub title="Get into Touch"></TitleAndSub>
      <Connaction></Connaction>
    </div>
  );
};

export default Home;
