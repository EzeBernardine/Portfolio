import styled from "styled-components";

export const BubblesStyles = styled("div")`
  position: relative;
  z-index: 2;
  &:before {
    position: absolute;
    z-index: -1;
    top: ${({ up = 2 }) => up + "%"};
    left: 0%;
    content: "";
    padding: ${({ thickness }) => thickness[0] + "px"};
    background: ${(props) =>
      props.color
        ? props.color.up
          ? props.color.up
          : "#6c006c0f"
        : " #6c006c0f"};
    border-radius: 100%;
  }
  &:after {
    position: absolute;
    z-index: -1;
    bottom: ${({ right = 20 }) => right + "%"};
    right: -50px;
    content: "";
    padding: ${({ thickness }) => thickness[1] + "px"};
    background: ${(props) =>
      props.color
        ? props.color.right
          ? props.color.right
          : "#6c006c0f"
        : " #6c006c0f"};
    border-radius: 100%;
    @media (max-width: 600px) {
      right: -10px;
    }
  }

  .child {
    position: relative;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: stretch;
    justify-content: stretch;
    &:before {
      position: absolute;
      z-index: -1;
      left: 0px;
      margin: auto;
      bottom: ${({ center = "0" }) => center + "%"};
      right: ${({ center = "0" }) => center + "%"};
      width: 0;
      height: 0;
      top: 0;
      content: "";
      padding: ${({ thickness }) => thickness[2] + "px"};
      background: ${(props) =>
        props.color
          ? props.color.center
            ? props.color.center
            : "#ff66001a"
          : " #ff66001a"};
      border-radius: 100%;
    }
    &:after {
      position: absolute;
      z-index: -1;
      bottom: ${({ down = "0" }) => down + "%"};
      left: 0;
      content: "";
      padding: ${({ thickness }) => thickness[3] + "px"};
      background: ${(props) =>
        props.color
          ? props.color.down
            ? props.color.down
            : "#ff66001a"
          : " #ff66001a"};
      border-radius: 100%;
    }
  }
`;
