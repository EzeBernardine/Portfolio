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
                  Experienced Software Engineer with a demonstrated history of
                  working in the computer software industry. Skilled in CSS,
                  HTML, React, Electron, and D3js. Strong engineering
                  professional with a Bachelor's degree focused in Computer
                  Engineering from Micheal Okpara University.
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
