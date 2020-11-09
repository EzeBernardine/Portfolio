import React from "react";
import { LandingStyle } from "./styles.js";

const Landing = () => {
  return (
    <LandingStyle>
      <section className="main_container">
        <div className="headMain">
          <aside className="landingImgDiv">
            <aside className="learning">
              <div className="captionDiv">
                <h2>I'm Bernardine</h2>
                <h3>A Front-end Developer</h3>
              </div>
              <div className="moreDetail">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus cumque optio voluptates repudiandae ut et, fuga
                  atque rerum aliquam harum quia odit. Tempore illo nostrum
                  deserunt alias porro quam tempora?
                </p>
              </div>
            </aside>

            <div className="header_img_Maindiv">
              <div className="header_img_div">
                <img src={require("../../assets/images/ladyB.png")} alt="" />
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section>
        <div></div>
      </section>
    </LandingStyle>
  );
};

export default Landing;
