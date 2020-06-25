import React, { useState, useRef, useEffect } from "react";
import { ExperinceStyle } from "./styles";
import { FlexibleDiv } from "../Box/flexibleDiv.styles";
import Button from "../Button";

const Experience = () => {
  const cards = [
    {
      title: "Front-end lead, EmBED",
      date: "20-15-2012",
      test:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat dicta libero exercitationem consectetur, et quas obcaecati, eius voluptatibus ea, sapiente nulla quibusdam suscipit. Impedit vel sint fugiat asperiores ipsa ratione."
    },
    {
      title: "Front-end lead, EmBED",
      date: "20-15-2012",
      test:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat dicta libero exercitationem consectetur, et quas obcaecati, eius voluptatibus ea, sapiente nulla quibusdam suscipit. Impedit vel sint fugiat asperiores ipsa ratione."
    },
    {
      title: "Front-end lead, EmBED",
      date: "20-15-2012",
      test:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat dicta libero exercitationem consectetur, et quas obcaecati, eius voluptatibus ea, sapiente nulla quibusdam suscipit. Impedit vel sint fugiat asperiores ipsa ratione."
    }
  ];
  return (
    <ExperinceStyle>
      <div className="container">
        <div className="overlay"></div>
        <div className="head">
          <FlexibleDiv className="top" justifyContent="space-between">
            <FlexibleDiv className="myName">
              <h1>B</h1>
            </FlexibleDiv>
            <div className="brief">
              <p>
                Act as if what you do makes a difference. It does. <br />
                <b>Elbert Hubba;rd</b>
              </p>
            </div>
            <div className="detail">
              <h1>
                Work <br /> Experience
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
                quae autem cum cupiditate quo dicta minima corporis velit,
                cumque eligendi quos iure nihil vitae veniam deleniti alias
                amet, hic quam!
              </p>
            </div>
          </FlexibleDiv>
          <FlexibleDiv className="wrap" flexWrap="nowrap" alignItems="center">
            <FlexibleDiv className="direct" justifyContent="space-between">
              <FlexibleDiv>
                <span>1</span>
              </FlexibleDiv>
              <FlexibleDiv>
                <span>2</span>
              </FlexibleDiv>
              <FlexibleDiv>
                <span>3</span>
              </FlexibleDiv>
            </FlexibleDiv>
            <div className="cards">
              {cards.map(({ title, date, test }) => (
                <div className="card">
                  <div className="date">
                    <small>{date}</small>
                  </div>
                  <div className="caption">
                    <h2>{title}</h2>
                  </div>
                  <div className="test">
                    <p>{test}</p>
                  </div>
                </div>
              ))}
            </div>
          </FlexibleDiv>
        </div>
      </div>
    </ExperinceStyle>
  );
};
export default Experience;
