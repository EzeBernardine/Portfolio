import React from "react";
import { MenuIconStyle } from "./styles";

const MenuIcon = ({ click, showMenuDropdown }) => {
  return (
    <MenuIconStyle showMenuDropdown={showMenuDropdown}>
      <button onClick={click}>
        <div className="menuIcon-container">
          <div className="menuIcon-div"></div>
        </div>
      </button>
    </MenuIconStyle>
  );
};
export default MenuIcon;
