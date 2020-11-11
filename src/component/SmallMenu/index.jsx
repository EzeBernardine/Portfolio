import React, { useState } from "react";
import { SmallMenuStyle } from "./styles";
import { NavLink } from "react-router-dom";
import pdf from "../../assets/images/My_Resume.pdf";

// const Menu = ({ about, services, skills, experience, contact }) => {
const Menu = () => {
  const [menuDiplay, setMenuDisplay] = useState(undefined);

  const handleDisplayMenu = () => setMenuDisplay(!menuDiplay);

  // const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop - 80);
  // const executeScrollAbout = () => scrollToRef(about),
  //   executeScrollServices = () => scrollToRef(services),
  //   executeScrollSkills = () => scrollToRef(skills),
  //   executeScrollExperience = () => scrollToRef(experience),
  //   executeScrollContact = () => scrollToRef(contact);

  return (
    <SmallMenuStyle menuDiplay={menuDiplay}>
      <header>
        <menu>
          <div className="navDiv">
            <h1>Lady B</h1>
            <button onClick={handleDisplayMenu}>
              <div className="menuIcon-container">
                <div className="menuIcon_div"></div>
              </div>
            </button>
          </div>

          <div className="linkDiv">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              {/* <li onClick={() => executeScrollAbout("about")}>
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
              </li> */}
              <li>
                <button onClick={() => window.open(pdf)}>Resume</button>
              </li>
              <li>
                <NavLink to="./blog">Blog</NavLink>
              </li>
            </ul>
          </div>
        </menu>
      </header>
    </SmallMenuStyle>
  );
};
export default Menu;
