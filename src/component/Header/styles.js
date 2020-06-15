import styled from "styled-components";
// import img from "../image/student.png";

export const LandingStyle = styled.div`
  /* ////////////////////The header section */
  .main_container {
    height: 100vh;
    background: #14213D;
    width: 100%;
    overflow: hidden;
  }
  .headMain {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    @media (max-width: 800px) {
      margin-top: 100px;
      height: calc(100% - 100px);
    }
  }

  .landingImgDiv {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .headMain aside .header_img_Maindiv {
    display: flex;
    /* justify-content: flex-end; */
    width: 100%;
    height: 100%;
  }
  .header_img_div {
    margin: auto 0 0 20%;
    width: max-content;
    height: max-content;
    @media (max-width: 600px) {
      margin: auto 0 0 5%;
    }
  }
  .main_container .header_img_div img {
    width: auto;
    filter: drop-shadow(-42px 52px 9px rgba(23, 22, 22, 0.24));

    height: 100vh;
    max-height: 100%;
    @media (max-width: 800px) {
      height: calc(100vh - 100px);
    }
  }

  .learning {
    position: absolute;
    z-index: 10;
    top: 40%;
    /* bottom: 50%; */
    margin: auto;
    right: 10%;
    width: 450px;
    @media (max-width: 1000px) {
      background: #e5e5e530;
      right: 0;
      left: 0;
      border: 1px solid #FBC56D;
      padding: 20px;
    }
    @media (max-width: 600px) {
      width: 80%;
      margin: auto;
    }
  }
  .captionDiv h2 {
    margin: auto;
    font-family: "Ruthie", cursive;
    font-size: 5rem;
    line-height: normal;
    color: white;
    font-weight: lighter;
    text-align: end;
    @media (max-width: 600px) {
      font-size: 3rem;
      text-align: center;
    }
  }
  .moreDetail {
    border-top: 1px solid #FBC56D;
    width: 300px;
    margin: 0 0 0 auto;
    margin-top: 50px;
    padding-top: 50px;
    @media (max-width: 600px) {
      width: auto;
      margin: 10px 0 0 0;
    }
  }
  .moreDetail p {
    font-size: 12px;
    color: white;
    text-align: end;
    @media (max-width: 600px) {
      text-align: center;
    }
  }
`;
