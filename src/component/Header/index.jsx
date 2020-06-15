import React from "react";
import { LandingStyle } from "./styles.js";

export default class Landing extends React.Component {
  render() {
    return (
      <LandingStyle>
        <section className="main_container">
          <div className="headMain">
            <aside className="landingImgDiv">
              <div className="header_img_Maindiv">
                <div className="header_img_div">
                  {/* <img src={require("../../assets/student.png")} alt="" /> */}
                </div>
              </div>

              <aside className="learning">
                <div className="captionDiv">
                  <h2>I'm  Bernardine</h2>
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
            </aside>
          </div>
        </section>

        <section>
          <div></div>
        </section>
      </LandingStyle>
    );
  }
}
