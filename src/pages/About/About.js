import React from "react";
import AboutIntro from "../../components/AboutIntro/AboutIntro";
import AboutMe from "../../components/AboutMe/AboutMe";
import AboutTop from "../../components/AboutTop/AboutTop";
import OurTeam from "../../components/OurTeam/OurTeam";
import "./About.css";

const About = () => {
  return (
    <div>
      <AboutTop></AboutTop>
      <AboutIntro></AboutIntro>
      <AboutMe></AboutMe>
      <OurTeam></OurTeam>
    </div>
  );
};

export default About;
