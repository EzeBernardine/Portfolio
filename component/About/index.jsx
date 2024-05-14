import React from "react";
import { AboutStyle } from "./styles";
import { Flex } from "../Box/flexibleDiv.styles";
// import pdf from "../../public/images/My_Resume.pdf";
import { ButtonStyled } from "../Button/styles";

const About = ({ about }) => {
  return (
    <AboutStyle>
      <Flex className="container" ref={about}>
        <div className="about">
          <h1>About Me</h1>
        </div>
        <div className="aboutParagraph">
          <div className="inside">
            <p>
              Hi <span role="img" aria-label="waving emoji"> 👋</span>, I am Bernardine May, a front end developer
              with keen interest in building out rich interactive experiences
              and functional user interfaces.
              <br /> My interests however extends beyond the web as when i am
              not coding you can catch me seeing good interesting movies with
              Nollywood movies being the best of them all, good books also
              becomes my greatest company when the demands of debugging my code
              becomes so profuse.
            </p>
            <Flex
              className="btns"
              justifyContent="space-around"
              alignItems="stretch"
            >
              <ButtonStyled text="Download CV" className="button-container">
                {/* <a
                  href={pdf}
                  download="bernardine's_resume.pdf"
                  className="button"
                >
                  Download CV
                </a> */}
              </ButtonStyled>
            </Flex>
          </div>
        </div>
      </Flex>
    </AboutStyle>
  );
};
export default About;
