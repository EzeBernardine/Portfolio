import styled from "styled-components";

export const RangeStyles = styled.div`
  .scale-range {
    width: 120px;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: ${({ range, color, baseColor, centerColor = "black" }) =>
      range < 26
        ? baseColor
          ? baseColor === "transparent"
            ? centerColor
            : baseColor
          : "#555454"
        : range > 26 && range < 50
        ? color || "chartreuse"
        : range > 49
        ? "transparent"
        : "none"};
    background-image: ${({ range, color, baseColor, centerColor = "black" }) =>
      range < 26
        ? `linear-gradient( ${-(90 - range * 3.6)}deg, 
        ${
          baseColor
            ? baseColor === "transparent"
              ? centerColor
              : baseColor
            : "#555454"
        } 
          50%, transparent 50%),linear-gradient(90deg, transparent 50%,  ${color ||
            "chartreuse"} 50%)`
        : range > 26 && range < 50
        ? `linear-gradient( ${range * 3.6 - 90}deg,${
            baseColor
              ? baseColor === "transparent"
                ? centerColor
                : baseColor
              : "#555454"
          }  50%, transparent 50%),linear-gradient(90deg, ${
            baseColor
              ? baseColor === "transparent"
                ? centerColor
                : baseColor
              : "#555454"
          }  50%, transparent 50%)`
        : range > 49
        ? `linear-gradient( ${range * 3.6 - 90}deg, transparent 50%, ${color ||
            "chartreuse"} 50%),linear-gradient(90deg, ${
            baseColor
              ? baseColor === "transparent"
                ? centerColor
                : baseColor
              : "#555454"
          } 50%, ${color || "chartreuse"} 50%)`
        : "none"};
    .scale-cover {
      width: ${({ thikness }) => thikness + "%" || "95%"};
      height: ${({ thikness }) => thikness + "%" || "95%"};
      background: ${({ centerColor = "black" }) => centerColor};
      margin: auto;
      border-radius: 50%;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      small {
        color: ${({ color }) => color || "white"};
      }
    }
  }
`;
