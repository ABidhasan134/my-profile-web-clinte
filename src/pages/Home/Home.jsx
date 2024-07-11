import React from "react";
import Bannar from "./components/bannar";
import TitleAndSub from "../../shard/titleAndSub";
import AboutMe from "./aboutMe/aboutMe";
import MyProject from "../projects/myProject";

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
    </div>
  );
};

export default Home;
