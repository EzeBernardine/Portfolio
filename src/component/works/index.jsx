import React from "react";
import { WorksStyle } from "./styles";
import { Flex } from "../Box/flexibleDiv.styles";
import chart from "../../assets/images/chart.png";
import styledComponent from "../../assets/images/styledComponent.png";
import node from "../../assets/images/node.png";
import mongodb from "../../assets/images/mongodb.webp";
import react from "../../assets/images/react.png";
import js from "../../assets/images/js.png";
import next from "../../assets/images/nextjs.png";
import materialUi from "../../assets/images/materialUi.png";
import html_css from "../../assets/images/html_css.png";

const Works = () => {
  const collection = [
    {
      img: require("../../assets/images/experience/bitville.png"),
      expKey: 1,
      href: "https://bitville.academy/",
      name: "Bitville",
      stacks: [
        <Flex className="pictureFrame" width="50px" height="50px">
          <img src={js} alt="js" />
        </Flex>,
        <Flex className="pictureFrame" width="50px" height="50px">
          <img src={react} alt="react" />
        </Flex>,
        <Flex className="pictureFrame" width="50px" height="50px">
          <img src={styledComponent} alt="styledComponent" />
        </Flex>,
        <Flex className="pictureFrame" width="50px" height="50px">
          <img src={node} alt="node" />
        </Flex>,
        <Flex className="pictureFrame" width="50px" height="50px">
          <img src={next} alt="next" />
        </Flex>,
      ],
      detail: "Platform for learning how to trade cryptocurrency.",
    },
    {
      img: require("../../assets/images/experience/suregift.png"),
      expKey: 13,
      href: "https://suregifts.com.ng/",
      name: "Suregift",
      stacks: [
        <Flex className="pictureFrame" width="50px" height="50px">
          <img src={js} alt="js" />
        </Flex>,
        <Flex className="pictureFrame" width="50px" height="50px">
          <img src={react} alt="react" />
        </Flex>,
        <Flex className="pictureFrame" width="50px" height="50px">
          <img src={materialUi} alt="materialUi" />
        </Flex>,
      ],
      detail: "Buy Gift Cards For The Best Stores In Nigeria",
    },
    {
      img: require("../../assets/images/experience/GC.png"),
      expKey: 15,
      href: "https://bernarsgithubclone.netlify.app/",
      name: "Github Clone",
      stacks: [
        <Flex className="pictureFrame" width="50px" height="50px">
          <img src={js} alt="js" />
        </Flex>,
        <Flex className="pictureFrame" width="50px" height="50px">
          <img src={html_css} alt="react" />
        </Flex>,
      ],
      detail: "My github page clone",
    },
  ];

  return (
    <WorksStyle>
      <div className="container">
        <section>
          <Flex alignItems="first baseline">
            <div className="images">
              {collection.map(({ img, expKey, href, name, stacks, detail }) => (
                <Flex className="work" alignItems="flex-start">
                  <Flex className="work-img" width="50%">
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
                    </a>
                  </Flex>

                  <Flex
                    className="work-details"
                    width="50%"
                    flexDir="column"
                    alignItems="flex-start"
                  >
                    <h2 className="work-name">{name}</h2>
                    <div className="work-stack">
                      <ul>
                        {stacks.map((stack) => (
                          <li>{stack}</li>
                        ))}
                      </ul>
                    </div>
                    <p className="work-review">{detail}</p>
                  </Flex>
                </Flex>
              ))}
            </div>
          </Flex>
        </section>
      </div>
    </WorksStyle>
  );
};
export default Works;
