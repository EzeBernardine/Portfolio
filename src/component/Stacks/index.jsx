import React from "react";
import { StacksStyle } from "./styles";
import { FlexibleDiv } from "../Box/flexibleDiv.styles";
import Scale from "../Scale";

const Stack = () => {
  const Stacks = [
    {
      name: "HTML",
      range: 90,
      expKey: 1
    },
    {
      name: "CSS",
      range: 94,
      expKey: 12
    },
    {
      name: "Javascript",
      range: 80,
      expKey: 13
    },
    {
      name: "REACT",
      range: 80,
      expKey: 14
    },
    {
      name: "Electron",
      range: 70,
      expKey: 15
    },
    {
      name: "Styled Component",
      range: 95,
      expKey: 16
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
            <Scale scale={scale} key={scale.expKey} />
          ))}
        </section>
      </FlexibleDiv>
    </StacksStyle>
  );
};
export default Stack;
