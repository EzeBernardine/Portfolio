import React from "react";
import { WorksStyle } from "./styles";
import { Flex } from "../Box/flexibleDiv.styles";

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
          <Flex alignItems="first baseline">
            <div className="images">
              {collection.map(({ img, expKey, href, name }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="imageAnchor"
                  key={expKey}
                >
                  <Flex className="pictureFrame">
                    <img src={img} alt="" />
                  </Flex>
                  <Flex
                    justifyContent="flex-start"
                    className="name"
                    width="max-content"
                    height="max-content"
                  >
                    <sub>{name}</sub>
                  </Flex>
                </a>
              ))}
            </div>
          </Flex>
        </section>
      </div>
    </WorksStyle>
  );
};
export default Works;
