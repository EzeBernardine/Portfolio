import React from "react";
import { StacksStyle } from "./styles";
import { Flex } from "../Box/flexibleDiv.styles";
import Scale from "../Scale";

const Stack = ({ skills }) => {
  const Stacks = [
    {
      name: "HTML",
      range: 98,
      expKey: 1,
    },
    {
      name: "CSS",
      range: 98,
      expKey: 12,
    },
    {
      name: "Javascript",
      range: 90,
      expKey: 13,
    },
    {
      name: "REACT",
      range: 90,
      expKey: 14,
    },
    {
      name: "Electron",
      range: 70,
      expKey: 15,
    },
    {
      name: "Styled Component",
      range: 98,
      expKey: 16,
    },
    {
      name: "SVG",
      range: 70,
      expKey: 17,
    },
    {
      name: "Typescript",
      range: 70,
      expKey: 18,
    },
    {
      name: "Nextjs",
      range: 90,
      expKey: 19,
    },
    {
      name: "OOP",
      range: 95,
      expKey: 20,
    },
    {
      name: "SWR",
      range: 90,
      expKey: 21,
    },
    {
      name: "React Native",
      range: 60,
      expKey: 22,
    },
    {
      name: "Redux",
      range: 90,
      expKey: 23,
    },
    {
      name: "Context",
      range: 95,
      expKey: 24,
    },
  ];
  return (
    <StacksStyle ref={skills}>
		<Flex className="container"  >
			<div className="test">
			<h1>Technical Skills</h1>
			</div>
			<section className="scales">
				{Stacks.map((scale) => (
					<Scale scale={scale} key={scale.expKey} />
				))}
			</section>
		</Flex>
    </StacksStyle>
  );
};
export default Stack;
