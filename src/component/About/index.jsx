import React from "react";
import { AboutStyle } from "./styles";
import { FlexibleDiv } from "../Box/flexibleDiv.styles";
import Button from "../Button";

const Menu = () => {
  return (
    <AboutStyle>
      <FlexibleDiv className='container'>
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
            <FlexibleDiv className="btns" justifyContent="space-around">
              <Button
                text="Download CV"
                bgColor="#E5E5E5"
                color="#FCA311"
                hColor="#FCA311"
              />
              <Button text="View Works" />
            </FlexibleDiv>
          </div>
        </div>
      </FlexibleDiv>
    </AboutStyle>
  );
};
export default Menu;
