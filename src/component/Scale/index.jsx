import React  from "react";
import {  RangeStyles } from "./styles";

const Scale = ({ scale }) => {
  return (
    <RangeStyles
      className="scale-scale"
      range={scale.range}
      baseColor="black"
      color="#fbc56d"
      centerColor="#1f2229"
      thikness="95"
    >
      <div className="scale-range">
        <div className="scale-cover">
          <small>{scale.name}</small>
          <small>{scale.range}%</small>
        </div>
      </div>
    </RangeStyles>
  );
};

export default Scale;
