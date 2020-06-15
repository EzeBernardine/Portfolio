import React, { useState } from "react";
import { MenuStyle } from "./styles";

const Menu = () => {
  const [menuDiplay, setMenuDisplay] = useState(undefined);

  const handleDisplayMenu = () => setMenuDisplay(!menuDiplay);
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
                <a href="/data">Home</a>
              </li>
              <li>
                <a href="auth">About</a>
              </li>
              <li>
                <a href="/auth">Skills</a>
              </li>
              <li>
                <a href="/auth">Portfolio</a>
              </li>
              <li>
                <a href="/auth">Contact</a>
              </li>
              <li>
                <a href="/auth">Blog</a>
              </li>
            </ul>
          </div>
        </menu>
      </header>
    </MenuStyle>
  );
};
export default Menu;
