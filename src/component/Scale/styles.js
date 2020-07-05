import styled from "styled-components";

export const ScaleStyles = styled.div`
  .scales {
    margin: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const RangeStyles = styled.div`
  .range {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: ${({ range, color, baseColor }) =>
      range < 26
        ? baseColor // "green"
        : range > 26 && range < 50
        ? color || "purple" // "red"
        : range > 49
        ? "transparent"
        : "none"};
    /* background-color: red; */
    background-image: ${({ range, color, baseColor }) =>
      range < 26
        ? `linear-gradient( ${-(90 - range * 3.6)}deg, ${baseColor ||
            "red"} 50%, transparent 50%),linear-gradient(90deg, transparent 50%,  ${color ||
            "chartreuse"} 50%)`
        : range > 26 && range < 50
        ? `linear-gradient( ${range * 3.6 - 90}deg,${baseColor ||
            "blue"}  50%, transparent 50%),linear-gradient(90deg, ${baseColor ||
            "blue"}  50%, transparent 50%)`
        : range > 49
        ? `linear-gradient( ${range * 3.6 - 90}deg, transparent 50%, ${color ||
            "chartreuse"} 50%),linear-gradient(90deg, ${baseColor ||
            "blue"} 50%, ${color || "chartreuse"} 50%)`
        : "none"};
    .cover {
      width: 95%;
      height: 95%;
      background: #1f2229;
      margin: auto;
      border-radius: 50%;
      color: #fff;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
