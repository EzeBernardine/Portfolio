import React from "react";
import { HelloStyle } from "./styles";
import { FlexibleDiv } from "../Box/flexibleDiv.styles";
import Button from "../Button";

const Hello = () => {
  return (
    <HelloStyle>
      <FlexibleDiv>
        <div>
          {" "}
          <p>Have any Project in Mind?</p>
          <h1> JUST SAY HELLO</h1>
          <FlexibleDiv className="btn">
            <Button text="Hire Me" bgColor="transparent" size='md' color="#E5E5E5" />
          </FlexibleDiv>
        </div>
      </FlexibleDiv>
    </HelloStyle>
  );
};
export default Hello;
