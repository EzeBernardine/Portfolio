import React  from "react";
import { WorksStyle } from "./styles";
import { FlexibleDiv } from "../Box/flexibleDiv.styles";

const Works = () => {
  const collection = [
    { img: require("../../assets/images/page1.jpg") },
    { img: require("../../assets/images/page2.jpg") },
    { img: require("../../assets/images/page3.webp") },
    { img: require("../../assets/images/page4.png") },
    { img: require("../../assets/images/page5.jpg") },
  ];
  return (
    <WorksStyle>
      <div className="container">
        <header>
          <h1>My Works</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
            vitae deleniti cum assumenda esse dicta cupiditate voluptatum magnam
            voluptatibus consequuntur error doloribus distinctio harum
            provident, blanditiis fugit in laboriosam consectetur.
          </p>
        </header>

        <section>
          <FlexibleDiv alignItems='first baseline'>
            <div className="links">
              <ul>
                <li>SureGift</li>
                <li>Learnfactory Nigeria</li>
                <li>Inventory</li>
                <li>EmBED</li>
              </ul>
            </div>
            <div className="images">
              {collection.map(({ img }) => (
                <div className="imgWrap">
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
