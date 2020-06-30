import React, { useState, useRef, useEffect } from "react";
import { ServicesStyle } from "./styles";
import { FlexibleDiv } from "../Box/flexibleDiv.styles";
import Button from "../Button";

const Services = () => {
  const card = useRef();

  const handleScroll = () =>
    // console.dir(card.current.clientHeight);

    useEffect(() => {
      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => window.removeEventListener("scroll", handleScroll);
    });

  const services = [
    {
      name: "Web Development",
      about:
        "  voluptatibus consequuntur error doloribus distinctio harum      provident, blanditiis fugit in laboriosam consectetur",
      img: require("../../assets/images/dev.png")
    },
    {
      name: "Desktop Development",
      about:
        "  voluptatibus consequuntur error doloribus distinctio harum      provident, blanditiis fugit in laboriosam consectetur",
      img: require("../../assets/images/desktop.jpg")
    }
  ];
  return (
    <ServicesStyle onScroll={() => handleScroll()}>
      <div className="container">
        <header>
          <h1>SERVICES</h1>
          <p ref={card}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
            vitae deleniti cum assumenda esse dicta cupiditate voluptatum magnam
            voluptatibus consequuntur error doloribus distinctio harum
            provident, blanditiis fugit in laboriosam consectetur.
          </p>
        </header>

        <section>
          <FlexibleDiv className="cards" justifyContent="space-around">
            {services.map(({ img, name, about }) => (
              <div className="card">
                <div className="imgWrap">
                  <img src={img} alt="" />
                </div>
                <div className="content">
                  <h3>{name}</h3>
                  <p>{about}</p>
                </div>
              </div>
            ))}
          </FlexibleDiv>
        </section>
      </div>
    </ServicesStyle>
  );
};
export default Services;
