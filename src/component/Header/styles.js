import styled from "styled-components";
import star from "../../assets/images/me.jpg";

export const LandingStyle = styled.div`
  .main_container {
    height: 100vh;
    background: #14213d;
    width: 100%;
    overflow: hidden;
    background-image: url(${star});
    background-repeat: no-repeat;
    background-position: center;
    background-blend-mode: darken;
    background-size: cover;
  }
  .headMain {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    /* @media (max-width: 800px) {
      margin-top: 100px;
      height: calc(100% - 100px);
    } */
    /* //// */
    @media (max-width: 600px) {
      margin-top: 0;
      height: 100%;
    }
    /* //// */
  }

  .landingImgDiv {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .headMain aside .header_img_Maindiv {
    display: flex;
    width: 100%;
    height: 100%;
  }
  .header_img_div {
    margin: auto 20% 0 auto;
    width: max-content;
    height: max-content;
    position: relative;

    @media (max-width: 600px) {
      margin: auto;
      width: 100%;
      object-fit: cover;
      /* //// */
      height: 100%;
      /* //// */
    }
  }
  .main_container .header_img_div img {
    width: auto;
    filter: drop-shadow(-42px 52px 9px rgba(23, 22, 22, 0.24));
    height: 100vh;
    max-height: 100%;
    /* @media (max-width: 800px) {
      height: calc(100vh - 100px);
    } */
    /* //// */
    @media (max-width: 600px) {
      height: 100%;
    }
    /* //// */
  }

  .learning {
    position: absolute;
    z-index: 10;
    top: 40%;

    margin: auto;
    left: 10%;
    width: 450px;

    @media (max-width: 1000px) {
      background: #04040487;
      right: 0;
      left: 0;
      border: 1px solid #fbc56d;
      padding: 20px;
    }
    @media (max-width: 600px) {
      width: 90%;
      margin: 40px auto 0;
    }
  }
  .captionDiv {
    overflow: hidden;
    h2 {
      margin: auto;
      font-family: "Charmonman", cursive;
      font-size: 4rem;
      word-spacing: nowrap;
      line-height: inherit;
      white-space: nowrap;
      color: white;
      font-weight: lighter;
      text-align: start;
      @media (max-width: 600px) {
        font-size: 2.5rem;
        text-align: center;
      }
    }
    h3 {
      font-size: 2rem;
      word-spacing: nowrap;
      line-height: inherit;
      white-space: nowrap;
      color: #fbc56d;
      font-weight: inherit;
      text-align: start;
      margin: 0;
      font-family: "Charmonman", cursive;
      @media (max-width: 600px) {
        font-size: 1.5rem;
        text-align: center;
      }
    }
  }
  .moreDetail {
    border-top: 1px solid #fbc56d;
    width: 300px;
    margin: 0 auto 0 0;
    margin-top: 30px;
    padding-top: 40px;
    @media (max-width: 600px) {
      padding-top: 20px;
      width: auto;
      margin: 10px 0 0 0;
    }
  }
  .moreDetail p {
    font-size: 12px;
    color: white;
    text-align: start;
    @media (max-width: 600px) {
      text-align: center;
    }
  }
`;
