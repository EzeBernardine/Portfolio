import React from "react";
import { LandingStyle } from "./styles.js";
import Menu from "../../component/Menu";
import Header from "../../component/Header";
import About from "../../component/About";
import Services from "../../component/Services";
import Works from '../../component/works'
import Experience from '../../component/Experience'
import Stack from '../../component/Stacks'

const Landing = () => {
  return (
    <LandingStyle>
       <Menu />
      <Header />
      <About />
      <Services />
      {/* <Works /> */}
      <Experience />
      <Stack />
    </LandingStyle>
  );
};

export default Landing;
