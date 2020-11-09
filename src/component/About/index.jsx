import React from "react";
import { AboutStyle } from "./styles";
import { Flex } from "../Box/flexibleDiv.styles";
import Button from "../Button";
import pdf from "../../assets/images/My_Resume.pdf";
import { ButtonStyled } from "../Button/styles";

const Menu = ({ about }) => {
  return (
    <AboutStyle>
      <Flex className="container" ref={about}>
        <div className="about">
          <h1>About Me</h1>
        </div>
        <div className="aboutParagraph">
          <div className="inside">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui error
              maxime tempore eum voluptates officiis laboriosam exercitationem
              explicabo fuga ullam doloribus nam aliquam possimus excepturi
              quod, magnam id quibusdam voluptatibus.
            </p>
            <Flex
              className="btns"
              justifyContent="space-around"
              alignItems="stretch"
            >
              <ButtonStyled text="Download CV" className="button-container">
                <a
                  href={pdf}
                  download="bernardine's_resume.pdf"
                  className="button"
                >
                  Download CV
                </a>
              </ButtonStyled>
            </Flex>
          </div>
        </div>
      </Flex>
    </AboutStyle>
  );
};
export default Menu;
