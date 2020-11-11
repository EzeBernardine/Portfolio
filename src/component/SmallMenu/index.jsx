import React, { useState } from "react";
import { SmallMenuStyle } from "./styles";
import { NavLink } from "react-router-dom";
import pdf from "../../assets/images/My_Resume.pdf";
import MenuIcon from "../MenuIcon";

const Menu = () => {
  const [showMenuDropdown, setMenuDisplay] = useState(undefined);

  const handleDisplayMenu = () => setMenuDisplay(!showMenuDropdown);

  return (
    <SmallMenuStyle showMenuDropdown={showMenuDropdown}>
      <header>
        <menu>
          <div className="navDiv">
            <h1>Lady B</h1>
            <MenuIcon
              click={handleDisplayMenu}
              showMenuDropdown={showMenuDropdown}
            />
          </div>

          <div className="linkDiv">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
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
