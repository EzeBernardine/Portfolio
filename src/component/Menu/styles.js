import styled from "styled-components";

export const MenuStyle = styled.div`
  div {
    border: 0;
    padding: 0;
    margin: 0;
  }
  header {
    background: ${({ menuScrollPosition }) =>
      menuScrollPosition === undefined
        ? "#14213d"
        : menuScrollPosition <= 500
        ? "transparent"
        : menuScrollPosition > 500 && menuScrollPosition <= 2900
        ? "#14213d"
        : "#1f2229"};
    /* transition: 400ms linear; */
    margin: 0;
    height: 60px;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 11;
    width: 100%;
    display: flex;
    @media (max-width: 800px) {
      transition: ${({ menuDiplay }) => !menuDiplay && " .2s linear .2s"};
      background: ${({ menuDiplay }) => menuDiplay && "  #040404f2"};
    }
  }
  header menu {
    align-items: center;
    margin: 0;
    justify-content: space-between;
    display: flex;
    width: 100%;
    height: 100%;
    @media (max-width: 800px) {
      padding: 0;
      flex-direction: column;
    }
  }
  header menu h1 {
    color: white;
    font-family: "Ruthie", cursive;
    font-family: "Charmonman", cursive;
    @media (min-width: 800px) {
      margin-left: 16%;
    }
  }

  header ul li {
    list-style: none;
    margin: 0 2px;
    font-size: 12px;
    border-radius: 3px;
    overflow: hidden;
    min-width: max-content;
    cursor: pointer;
    padding: 5px 10px;
    @media (max-width: 800px) {
      margin: 6px auto;
      width: 100%;
      border-radius: 5px;
      padding: 7px 0;
    }
    &:hover {
      background: #aa8445;
    }
  }

  header ul li *:active {
    outline: none;
  }
  header ul li {
    button,
    a {
      color: white;
      background: none;
      padding: 0;
      border: none;
      cursor: pointer;
      text-decoration: none;
    }
    &:hover {
      button,
      a {
        @media (max-width: 800px) {
          color: #14213d;
        }
      }
    }
  }
  header ul {
    display: inline-flex;
    padding: 0;
    justify-content: center;
    text-align: center;
    @media (max-width: 800px) {
      display: grid;
      padding: 0;
      width: 80%;
      margin: auto;
      justify-content: normal;
    }
  }

  @keyframes rollDown {
    0% {
      height: 0px;
      padding-top: 0px;
      padding-bottom: 0px;
      visibility: hidden;
    }

    100% {
      height: 450px;
      padding-top: 15px;
      padding-bottom: 15px;
    }
  }
  @keyframes rollUp {
    0% {
      height: 450px;
      padding-top: 15px;
      padding-bottom: 15px;
    }

    100% {
      height: 0px;
      padding-top: 0;
      padding-bottom: 0px;
      visibility: hidden;
    }
  }

  .linkDiv {
    margin-right: 10%;
    @media (max-width: 800px) {
      background: #040404f2;
      position: absolute;
      border-bottom: 1px solid #fbc56d;
      overflow: hidden;
      display: ${(props) =>
        props.menuDiplay === undefined ? " none" : "grid"};
      animation: ${(props) =>
        props.menuDiplay
          ? "rollDown .3s  linear forwards "
          : " rollUp .3s  linear forwards"};
      width: 100%;
      right: 0;
      top: 60px;
      margin: 0;
    }
  }

  .navDiv {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    align-items: center;
    h1 {
      font-size: 1.4rem;
    }
    @media (max-width: 800px) {
      width: 80vw;
    }
    .menuIcon_div {
      display: none;
      grid-gap: 7px;
      cursor: pointer;
      width: 25px;
      height: 25px;
      position: relative;
      @media (max-width: 800px) {
        display: grid;
      }
      .menuIcon {
        width: 25px;
        height: 0;
        border: 1px solid white;
        transition: 250ms linear;
      }
      .menuIcon1 {
        transform: ${({ menuDiplay }) =>
          menuDiplay ? "rotate(45deg) " : "none"};
      }
      .menuIcon3 {
        transform: ${({ menuDiplay }) =>
          menuDiplay ? "rotate(-45deg)" : "none"};
      }
      .menuItemTransition {
        position: ${({ menuDiplay }) => (menuDiplay ? "absolute" : "unset")};
        right: ${({ menuDiplay }) => (menuDiplay ? "0" : "unset")};
        left: ${({ menuDiplay }) => (menuDiplay ? "0" : "unset")};
        top: ${({ menuDiplay }) => (menuDiplay ? "0" : "unset")};
        bottom: ${({ menuDiplay }) => (menuDiplay ? "0" : "unset")};
        margin: ${({ menuDiplay }) => (menuDiplay ? "auto" : "unset")};
      }
      .menuIcon2 {
        display: ${({ menuDiplay }) => (menuDiplay ? "none" : "block")};
      }
    }
  }
`;
