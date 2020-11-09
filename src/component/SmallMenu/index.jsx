import React, { useState } from "react";
import { MenuStyle } from "./styles";
import { NavLink } from "react-router-dom";
import pdf from "../../assets/images/My_Resume.pdf";

const Menu = ({ about, services, skills, experience, contact }) => {
  const [menuDiplay, setMenuDisplay] = useState(undefined);

  const handleDisplayMenu = () => setMenuDisplay(!menuDiplay);

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop - 80);
  const executeScrollAbout = () => scrollToRef(about),
    executeScrollServices = () => scrollToRef(services),
    executeScrollSkills = () => scrollToRef(skills),
    executeScrollExperience = () => scrollToRef(experience),
    executeScrollContact = () => scrollToRef(contact);

  return (
    <MenuStyle menuDiplay={menuDiplay}>
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
                  <NavLink to="/">Home</NavLink>
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
                <button onClick={() => window.open(pdf)}>
                  {/* <a href={pdf} target="_blank" rel="noopener noreferrer"> */}
                  Resume
                  {/* </a> */}
                </button>
              </li>
              <li>
                <button>
                  <NavLink to="./blog">Blog</NavLink>
                </button>
              </li>
            </ul>
          </div>
        </menu>
      </header>
    </MenuStyle>
  );
};
export default Menu;
