import React, { useState } from "react";
import { ExperinceStyle } from "./styles";
import { FlexibleDiv } from "../Box/flexibleDiv.styles";
import { cards } from "./data";
const Experience = () => {
  const [select, setSelect] = useState(1);
  const handleSelectCard = (number) => setSelect(number);

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
                <b>Act as if what you do makes a difference. It does.</b> <br />
                Elbert Hubba;rd
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
              <FlexibleDiv onClick={() => handleSelectCard(1)}>
                <span className={select === 1 ? "active-direct" : ""}>1</span>
              </FlexibleDiv>
              <FlexibleDiv onClick={() => handleSelectCard(2)}>
                <span className={select === 2 ? "active-direct" : ""}>2</span>
              </FlexibleDiv>
              <FlexibleDiv onClick={() => handleSelectCard(3)}>
                <span className={select === 3 ? "active-direct" : ""}>3</span>
              </FlexibleDiv>
            </FlexibleDiv>
            <div className="cards">
              {cards.map(({ title, date, test, expKey, link, name }, i) => (
                <div
                  onClick={() => handleSelectCard(i + 1)}
                  className={`card ${select === i + 1 ? "active-card" : ""}`}
                  key={expKey}
                >
                  <div className="date">
                    <small>{date}</small>
                  </div>
                  <div className="caption">
                    <h2>{title}</h2>
                  </div>
                  <div className="test">
                    <p>{test}</p>
                  </div>
                  <div className="link">
                    <a href={link} target='_blank' rel="noopener noreferrer">{name}</a>
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
