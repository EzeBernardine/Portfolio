import React, { useRef } from "react";
import { ServicesStyle } from "./styles";
import { Flex } from "../Box/flexibleDiv.styles";

const Services = ({ services }) => {

  const myServices = [
    {
      name: "Web Development",
      about:
        "  voluptatibus consequuntur error doloribus distinctio harum      provident, blanditiis fugit in laboriosam consectetur",
      img: require("../../assets/images/dev.png"),
      exp_key: 1,
    },
    {
      name: "Desktop Development",
      about:
        "  voluptatibus consequuntur error doloribus distinctio harum      provident, blanditiis fugit in laboriosam consectetur",
      img: require("../../assets/images/desktop.jpg"),
      exp_key: 2,
    },
  ];
  return (
    <ServicesStyle ref={services}>
      <div className="container">
        <header>
          <h1>SERVICES</h1>
          <p >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
            vitae deleniti cum assumenda esse dicta cupiditate voluptatum magnam
            voluptatibus consequuntur error doloribus distinctio harum
            provident, blanditiis fugit in laboriosam consectetur.
          </p>
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
