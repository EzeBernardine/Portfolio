import React from "react";
import { ServicesStyle } from "./styles";
import { Flex } from "../Box/flexibleDiv.styles";

const Services = ({ services }) => {
  const myServices = [
    {
      name: "Web Development",
      about:
        "Build all web applications that can run on any browser",
      img: require("../../assets/images/dev.png"),
      exp_key: 1,
    },
    {
      name: "Desktop Development",
      about:
        "Using electronjs, I build desktop apps for any operating system.",
      img: require("../../assets/images/desktop.jpg"),
      exp_key: 2,
    },
  ];
  return (
    <ServicesStyle ref={services}>
      <div className="container">
        <header>
          <h1>SERVICES</h1>
          <p>I build Web and Desktop Applications.</p>
        </header>

        <section>
          <Flex className="cards" justifyContent="space-around">
            {myServices.map(({ img, name, about, exp_key }) => (
              <div className="card" key={exp_key}>
                <div className="imgWrap">
                  <img src={img} alt="" />
                </div>
                <div className="content">
                  <h3>{name}</h3>
                  <p>{about}</p>
                </div>
              </div>
            ))}
          </Flex>
        </section>
      </div>
    </ServicesStyle>
  );
};
export default Services;
