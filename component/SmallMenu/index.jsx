import React, { useState } from "react";
import { SmallMenuStyle } from "./styles";
import MenuIcon from "../MenuIcon";
import Link from "next/link";

const Menu = () => {
  const [showMenuDropdown, setMenuDisplay] = useState(undefined);
  const handleDisplayMenu = () => setMenuDisplay(!showMenuDropdown);

  return (
    <SmallMenuStyle showMenuDropdown={showMenuDropdown}>
      <header>
        <menu>
          <div className="navDiv">
            <h1>Bernardine</h1>
            <MenuIcon
              click={handleDisplayMenu}
              showMenuDropdown={showMenuDropdown}
            />
          </div>

          <div className="linkDiv">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="./blog">Blog</Link>
              </li>
            </ul>
          </div>
        </menu>
      </header>
    </SmallMenuStyle>
  );
};
export default Menu;
