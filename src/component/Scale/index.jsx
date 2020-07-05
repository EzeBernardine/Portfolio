import React, { useState, useRef, useEffect } from "react";
import { ScaleStyles, RangeStyles } from "./styles";

const Scale = () => {
  const Scales = [
    {
      name: "HTML",
      range: 50
    },
    {
      name: "HTML",
      range: 97
    },
    {
      name: "HTML",
      range: 100
    },
    {
      name: "HTML",
      range: 8
    },
    {
      name: "CSS",
      range: 25
    },
    {
      name: "Javascript",
      range: 75
    },
    {
      name: "REACT",
      range: 45
    },
    {
      name: "Electron",
      range: 12.5
    },
    {
      name: "Styled Component",
      range: 35
    }
  ];
  return (
    <ScaleStyles>
      <div className="scales">
        {Scales.map(({ name, range }) => (
          <RangeStyles className="scale" range={range} 
          baseColor="blue"
          color="orange"
          >
            <div className="range">
              <div className="cover">
                Perc: {range}%, <br />
                {/* <span>Deg: {range * 3.6}deg</span> */}
              </div>
            </div>
          </RangeStyles>
        ))}
      </div>
    </ScaleStyles>
  );
};
export default Scale;

// linear-gradient(0deg,red 50%,transparent 50%),linear-gradient(90deg,red 50%,transparent 50%)
