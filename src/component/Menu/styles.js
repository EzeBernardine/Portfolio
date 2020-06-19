import styled from "styled-components";

export const MenuStyle = styled.div`
  div {
    border: 0;
    padding: 0;
    margin: 0;
  }
  header {
    background: transparent;
    margin: 0;
    height: 60px;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: 11;
    width: 100%;
    display: flex;
    @media (max-width: 600px) {
      transition: ${({ menuDiplay }) => !menuDiplay && " .2s ease-in-out .2s"};
      background: ${({ menuDiplay }) => menuDiplay && "  #04040487"};
    }
  }
  header menu {
    align-items: center;
    margin: 0;
    justify-content: space-between;
    display: flex;
    width: 100%;
    height: 100%;
    @media (max-width: 600px) {
      padding: 0;
      flex-direction: column;
    }
  }
  header menu h1 {
    color: white;
    font-family: "Ruthie", cursive;
    font-family: "Charmonman", cursive;
    @media (min-width: 600px) {
      margin-left: 10%;
    }
  }

  header ul li {
    list-style: none;
    margin: 0 10px;
    font-size: 12px;
    min-width: max-content;
    /* font-weight: bold; */
    cursor: pointer;
    @media (max-width: 600px) {
      margin: 5px auto;
      width: 100%;
      border-radius: 50px;
      padding: 10px 0;
      &:hover {
        background: #e5e5e5;
        /* background: #fca311cc; */
      }
    }
  }
  header ul li {
    a {
      position: relative;
      &:before {
        background: #fff;
        content: "";
        width: 0%;
        right: 0;
        left: 0;
        margin: auto;
        height: 1px;
        position: absolute;
        transition: 200ms ease-in-out;
        bottom: -5px;
      }
      &:hover {
        @media (min-width: 600px) {
          &:before {
            width: 100%;
          }
        }
      }
    }
  }
  header ul li a:active {
    outline: none;
  }
  header ul li {
    a {
      color: white;
      text-decoration: none;
    }
    &:hover {
      a {
        @media (max-width: 600px) {
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
    @media (max-width: 600px) {
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
      padding-top: 5px;
      padding-bottom: 5px;
      visibility: hidden;
    }
    100% {
      height: 270px;
      padding-top: 30px;
      padding-bottom: 30px;
    }
  }
  @keyframes rollUp {
    0% {
      height: 270px;
      padding-top: 30px;
      padding-bottom: 30px;
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
    @media (max-width: 600px) {
      margin: 15px 0 0;
      background: #04040487;
      /* background: #e5e5e530; */
      width: 100%;
      position: absolute;
      top: 45px;
      border-bottom: 1px solid #fbc56d;
      overflow: hidden;
      display: ${props => (props.menuDiplay === undefined ? " none" : "grid")};
      animation: ${props =>
        props.menuDiplay
          ? "rollDown .2s  ease-in forwards "
          : " rollUp .3s  ease-in-out   forwards"};
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
    @media (max-width: 600px) {
      /* padding: 0 10vw; */
      width: 80vw;
    }
  }

  .menuIcon_div {
    display: none;
    grid-gap: 7px;
    cursor: pointer;
    @media (max-width: 600px) {
      display: grid;
    }
    .menuIcon {
      width: 25px;
      border: 1px solid white;
    }
  }
`;