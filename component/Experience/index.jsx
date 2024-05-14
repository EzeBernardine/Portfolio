import React, { useState } from "react";
import { ExperinceStyle } from "./styles";
import { Flex } from "../Box/flexibleDiv.styles";
import { cards } from "./data";



const Experience = ({ experience }) => {
  const [select, setSelect] = useState(1);
  const handleSelectCard = (number) => setSelect(number);

  return (
    <ExperinceStyle>
      <div className="container" ref={experience}>
        <div className="overlay"></div>
        <div className="head">
          <Flex className="top" justifyContent="space-between">
         
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
                In our current world, one should never underestimate the sheer
                importance of experience as it commands value. In the course of
                my career as a developer, some knowledge, has become part and
                parcel of me.
              </p>
            </div>
          </Flex>
          <Flex className="wrap" flexWrap="nowrap" alignItems="center">
            <Flex className="direct" justifyContent="space-between">
              <Flex onClick={() => handleSelectCard(1)}>
                <span className={select === 1 ? "active-direct" : ""}>1</span>
              </Flex>
              <Flex onClick={() => handleSelectCard(2)}>
                <span className={select === 2 ? "active-direct" : ""}>2</span>
              </Flex>
              <Flex onClick={() => handleSelectCard(3)}>
                <span className={select === 3 ? "active-direct" : ""}>3</span>
              </Flex>
            </Flex>
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
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {name}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </Flex>
        </div>
      </div>
    </ExperinceStyle>
  );
};
export default Experience;
