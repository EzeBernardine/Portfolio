import React, { useState, useRef, useEffect } from "react";
import { StacksStyle, StackStyle } from "./styles";
import { FlexibleDiv } from "../Box/flexibleDiv.styles";
import Button from "../Button";
import Scale from "../Scale";

const Stack = () => {
  const stacks = [
    {
      name: "HTML",
      range: "80%"
    },
    {
      name: "CSS",
      range: "80%"
    },
    {
      name: "Javascript",
      range: "80%"
    },
    {
      name: "REACT",
      range: "80%"
    },
    {
      name: "Electron",
      range: "80%"
    },
    {
      name: "Styled Component",
      range: "99%"
    }
  ];
  return (
    <StacksStyle>
      <FlexibleDiv className="container">
        <div className="test">
          {/* <h3>My stack</h3> */}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            ratione voluptatum quam blanditiis quibusdam, ipsa non iste ullam
            autem at quae possimus laudantium minima. Cum corrupti dignissimos
            ipsa cumque numquam.
          </p>
        </div>
        {/* <FlexibleDiv className="stacks">
          {stacks.map(({ name, range }) => (
            <StackStyle className="stack" range={range}>
              <FlexibleDiv className="range">
                <div className="cover"></div>
              </FlexibleDiv>
              <FlexibleDiv className="name">
                <h2>{name}</h2>
              </FlexibleDiv>
            </StackStyle>
          ))}
        </FlexibleDiv> */}

        <Scale />
      </FlexibleDiv>
    </StacksStyle>
  );
};
export default Stack;
