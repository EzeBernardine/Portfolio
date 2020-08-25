import React from "react";
import { LandingStyle } from "./styles.js";
import Menu from "../../component/Menu";
import Header from "../../component/Header";
import About from "../../component/About";
import Services from "../../component/Services";
import Experience from "../../component/Experience";
import Stack from "../../component/Stacks";
import Hello from "../../component/Hello";
import ContactMe from "../../component/ContactMe";
import Works from '../../component/works'
import Footer from "../../component/Footer";


const Landing = () => {
  return (
    <LandingStyle>
      <Menu />
      <Header />
      <About />
      <Services />
      <Experience />
      <Works />
      <Stack />
      <Hello />
      <ContactMe />
      <Footer />
    </LandingStyle>
  );
};

export default Landing;
