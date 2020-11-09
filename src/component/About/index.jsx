import React from "react";
import { AboutStyle } from "./styles";
import { Flex } from "../Box/flexibleDiv.styles";
import Button from "../Button";

const Menu = ({about}) => {


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
            <Flex className="btns" justifyContent="space-around">
              <Button
                text="Download CV"
                bgColor="#E5E5E5"
                color="#FCA311"
                hColor="#FCA311"
                type="button"
                click={() => []}
              />
              <Button text="View Works" click={() => []} type="button" />
            </Flex>
          </div>
        </div>
      </Flex>
    </AboutStyle>
  );
};
export default Menu;
