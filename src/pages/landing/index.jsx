import React, { useRef } from "react";
import { LandingStyle } from "./styles.js";
import Menu from "../../component/Menu";
import Header from "../../component/Header";
import About from "../../component/About";
import Services from "../../component/Services";
import Experience from "../../component/Experience";
import Stack from "../../component/Stacks";
import Hello from "../../component/Hello";
import ContactMe from "../../component/ContactMe";
import Works from "../../component/works";
import Footer from "../../component/Footer";

const Landing = () => {
  const about = useRef(null),
    skills = useRef(null),
    services = useRef(null),
    contact = useRef(null),
    experience = useRef(null);
  return (
    <LandingStyle>
      <Menu
        about={about}
        skills={skills}
        experience={experience}
        services={services}
        contact={contact}
      />
      <Header />
      <About about={about} />
      <Services services={services} />
      <Experience experience={experience} />
      <Works />
      <Stack skills={skills} />
      <Hello />
      <ContactMe contact={contact} />
      <Footer />
    </LandingStyle>
  );
};

export default Landing;
