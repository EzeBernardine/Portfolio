import React, { useState, useRef, useEffect } from "react";
import { StacksStyle, StackStyle } from "./styles";
import { FlexibleDiv } from "../Box/flexibleDiv.styles";
import Button from "../Button";
import Scale from "../Scale";

const Stack = () => {
  const Stacks = [
    {
      name: "HTML",
      range: 90
    },
    {
      name: "CSS",
      range: 94
    },
    {
      name: "Javascript",
      range: 80
    },
    {
      name: "REACT",
      range: 80
    },
    {
      name: "Electron",
      range: 70
    },
    {
      name: "Styled Component",
      range: 95
    }
  ];
  return (
    <StacksStyle>
      <FlexibleDiv className="container">
        <div className="test">
          <h1>My Skills</h1>
        </div>
        <section className="scales">
          {Stacks.map(scale => (
            <Scale scale={scale} />
          ))}
        </section>
      </FlexibleDiv>
    </StacksStyle>
  );
};
export default Stack;
