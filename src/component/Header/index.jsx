import React, {useEffect} from "react";
import { LandingStyle } from "./styles.js";

const Landing = () => {
  // useEffect(() => {
  //   // Page is loaded
  //   const objects = document.getElementsByClassName("asyncImage");
  //   Array.from(objects).map(item => {
  //     // Start loading image
  //     const img = new Image();
  //     img.src = item.dataset.src;
  //     // Once image is loaded replace the src of the HTML element
  //     img.onload = () => {
  //       item.classList.remove("asyncImage");
  //       return item.nodeName === "IMG"
  //         ? (item.src = item.dataset.src)
  //         : (item.style.backgroundImage = `url(${item.dataset.src})`);
  //     };
  //   });
  // });

  return (
    <LandingStyle>
      <section className="main_container">
        <div className="headMain">
          <aside className="landingImgDiv">
            <aside className="learning">
              <div className="captionDiv">
                <h2>I'm Bernardine</h2>
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
