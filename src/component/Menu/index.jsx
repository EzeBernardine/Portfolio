import React, { useState, useEffect } from "react";
import { MenuStyle } from "./styles";

const MsallMenu = ({ about, services, skills, experience, contact }) => {
  const [menuDiplay, setMenuDisplay] = useState(undefined);
  let [menuScrollPosition, setMenuScrollPosition] = useState(undefined);

  /**
   * determines of the menu should be displayed or not and on which screen size.
   */
  const handleDisplayMenu = () => setMenuDisplay(!menuDiplay);

  /**
   * keeps track of the scrollY position of the page
   * Its position is used to render the background color of the menu header
   */
  const handleScroll = () => setMenuScrollPosition(window.scrollY);

  /**
   * handles the onclick menu item scroll event.
   * Ensures that on click of any menu item, the browser scrolls to that section of the page
   */
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop - 80);
  const executeScrollAbout = () => scrollToRef(about),
    executeScrollServices = () => scrollToRef(services),
    executeScrollSkills = () => scrollToRef(skills),
    executeScrollExperience = () => scrollToRef(experience),
    executeScrollContact = () => scrollToRef(contact);


  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <MenuStyle
      menuDiplay={menuDiplay}
      onScroll={() => handleScroll()}
      menuScrollPosition={menuScrollPosition}
    >
      <header>
        <menu>
          <div className="navDiv">
            <h1>Lady B</h1>
            <div className="menuIcon_div" onClick={handleDisplayMenu}>
              <div className="menuIcon"></div>
              <div className="menuIcon"></div>
              <div className="menuIcon"></div>
            </div>
          </div>

          <div className="linkDiv">
            <ul>
              <li>
                <button>
                  <a href="#">Home</a>
                </button>
              </li>
              <li onClick={() => executeScrollAbout("about")}>
                <button>About</button>
              </li>
              <li onClick={() => executeScrollServices("services")}>
                <button>Services</button>
              </li>
              <li onClick={() => executeScrollExperience("experience")}>
                <button>Experience</button>
              </li>
              <li onClick={() => executeScrollSkills("skills")}>
                <button>Stack</button>
              </li>
              <li onClick={() => executeScrollContact("contact")}>
                <button>Contact</button>
              </li>
              <li>
                <button>
                  <a href="./resume">Resume</a>
                </button>
              </li>
              <li>
                <button>
                  <a href="./blog">Blog</a>
                </button>
              </li>
            </ul>
          </div>
        </menu>
      </header>
    </MenuStyle>
  );
};
export default MsallMenu;
