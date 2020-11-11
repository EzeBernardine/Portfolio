import styled from "styled-components";

export const SmallMenuStyle = styled.div`
  div {
    border: 0;
    padding: 0;
    margin: 0;
  }
  header {
    background: ${({ menuScrollPosition }) =>
      menuScrollPosition === undefined
        ? "#14213d"
        : menuScrollPosition <= 100
        ? "transparent"
        : menuScrollPosition > 100 && menuScrollPosition <= 2900
        ? "#14213d"
        : "#1f2229"};
    transition: background-color 250ms linear;
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

  header ul {
    li {
      color: white;
      background: none;
      min-width: max-content;
      cursor: pointer;
      padding: 5px 10px;
      list-style: none;
      margin: 0 2px;
      font-size: 16px;
      border-radius: 3px;
      overflow: hidden;
      border: none;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      button,
      a {
        background: none;
        padding: 0;
        border: none;
        color: white;
        font-size: 16px;
        width: 100%;
        height: 100%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      &:hover {
        button {
          @media (max-width: 800px) {
            color: #14213d;
          }
        }
      }
      @media (max-width: 800px) {
        margin: 10px auto;
        width: 100%;
        border-radius: 5px;
        padding: 10px 0;
      }
      &:hover {
        background: #aa8445;
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

  @keyframes down {
    0% {
      height: 0px;
      padding-top: 0px;
      padding-bottom: 0px;
      visibility: hidden;
    }

    100% {
      height: 250px;
      padding-top: 15px;
      padding-bottom: 15px;
    }
  }
  @keyframes up {
    0% {
      height: 250px;
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
          ? "down .3s  linear forwards "
          : " up .3s  linear forwards"};
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
    button {
      background: transparent;
      border: none;
      padding: 0;
      cursor: pointer;
      .menuIcon-container {
        width: 25px;
        height: 18px;

        .menuIcon_div {
          display: none;
          grid-gap: 7px;
          width: 24px;
          height: 2px;
          top: 9px;
          background: white;
          align-items: center;
          position: relative;
          @media (max-width: 800px) {
            display: block;
          }

          visibility: ${({ menuDiplay }) => (menuDiplay ? "hidden " : "unset")};
        }
        .menuIcon_div::before,
        .menuIcon_div::after {
          content: "";
          position: absolute;
          width: 24px;
          height: 2px;
          background: white;
          visibility: visible;
          bottom: 0;
          right: 0;
          left: 0;
          transition: 250ms linear;
        }
        .menuIcon_div::before {
          top: ${({ menuDiplay }) => (menuDiplay ? "0" : "-9px")};
          transform: ${({ menuDiplay }) =>
            menuDiplay ? "rotate(45deg) " : "none"};
        }
        .menuIcon_div::after {
          top: ${({ menuDiplay }) => (menuDiplay ? "0" : "9px")};
          transform: ${({ menuDiplay }) =>
            menuDiplay ? "rotate(-45deg)" : "none"};
        }
      }
    }
  }
`;
