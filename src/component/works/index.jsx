import React from "react";
import { WorksStyle } from "./styles";
import { FlexibleDiv } from "../Box/flexibleDiv.styles";

const Works = () => {
  const collection = [
    { img: require("../../assets/images/experience/EmBED(1).png"), expKey: 1 },
    {
      img: require("../../assets/images/experience/Learner(1).png"),
      expKey: 13,
    },
    { img: require("../../assets/images/experience/Learner(2).png"), expKey: 14 },
      {
        img: require("../../assets/images/experience/Parent(1).png"),
        expKey: 15,
      },
    { img: require("../../assets/images/experience/EmBED(2).png"), expKey: 12 },
  ];
  return (
    <WorksStyle>
      <div className="container">
        <section>
          <FlexibleDiv alignItems="first baseline">
            <div className="images">
              {collection.map(({ img, expKey }) => (
                <div className="pictureFrame" key={expKey}>
                  <img src={img} alt="" />
                </div>
              ))}
            </div>
          </FlexibleDiv>
        </section>
      </div>
    </WorksStyle>
  );
};
export default Works;
