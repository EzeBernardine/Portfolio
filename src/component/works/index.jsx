import React from "react";
import { WorksStyle } from "./styles";
import { FlexibleDiv } from "../Box/flexibleDiv.styles";

const Works = () => {
  const collection = [
    {
      img: require("../../assets/images/experience/EmBED(1).png"),
      expKey: 1,
      href: "https://embed.ng/",
      name: "EmBED",
    },
    {
      img: require("../../assets/images/experience/suregift.png"),
      expKey: 13,
      href: "https://suregifts.com.ng/",
      name: "Suregift",
    },
    {
      img: require("../../assets/images/experience/lf.png"),
      expKey: 14,
      href: "https://learnfactory.com.ng/",
      name: "Learnfactory",
    },
  ];


  return (
    <WorksStyle>
      <div className="container">
        <section>
          <FlexibleDiv alignItems="first baseline">
            <div className="images">
              {collection.map(({ img, expKey, href, name }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="imageAnchor"
                  key={expKey}
                >
                  <FlexibleDiv className="pictureFrame">
                    <img src={img} alt="" />
                  </FlexibleDiv>
                  <FlexibleDiv
                    justifyContent="flex-start"
                    className="name"
                    flexWidth="max-content"
                    flexHeight="max-content"
                  >
                    <sub>{name}</sub>
                  </FlexibleDiv>
                </a>
              ))}
            </div>
          </FlexibleDiv>
        </section>
      </div>
    </WorksStyle>
  );
};
export default Works;
