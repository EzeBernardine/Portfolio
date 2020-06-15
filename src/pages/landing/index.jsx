import React from "react";
import { LandingStyle } from "./styles.js";
import Menu from "../../component/Menu";
import Header from "../../component/Header";

const Landing = () => {
  return (
    <LandingStyle>
       <Menu />
      <Header />
    </LandingStyle>
  );
};

export default Landing;
