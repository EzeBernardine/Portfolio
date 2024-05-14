/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ServicesStyle } from "./styles";
import { Flex } from "../Box/flexibleDiv.styles";
import img1 from '../../public/images/dev.png'
import img2 from '../../public/images/desktop.jpg'

const Services = ({ services }) => {
  const myServices = [
    {
      name: "Web Development",
      about:
        "Build all web applications that can run on any browser",
      img: img1,
      exp_key: 1,
    },
    {
      name: "Desktop Development",
      about:
        "Using electronjs, I build desktop apps for any operating system.",
      img: img2,
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
                  <img src={img.src} alt="" />
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
