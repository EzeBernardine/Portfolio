import React from "react";
import { LandingStyle } from "./styles.js";
import Menu from "../../component/Menu";
import Header from "../../component/Header";
import About from "../../component/About";
import Services from "../../component/Services";

const Landing = () => {
  return (
    <LandingStyle>
       <Menu />
      <Header />
      <About />
      <Services />
    </LandingStyle>
  );
};

export default Landing;
