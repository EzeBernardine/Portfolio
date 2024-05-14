import React, { useState } from "react";
import { BubblesStyles } from "./styles";

const Index = ({ up, down, center, right, thickness,color, children }) => {
  return (
    <BubblesStyles
      up={up}
      right={right}
      center={center}
      down={down}
      thickness={thickness}
      color={color}
    >
      <main className="child"> {children}</main>
    </BubblesStyles>
  );
};

export default Index;
