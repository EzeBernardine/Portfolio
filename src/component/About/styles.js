import styled from "styled-components";
import bk from "../../assets/images/aboutMe.jpg";

export const AboutStyle = styled.div`
  background: #e5e5e5d4;
  background-image: url(${bk});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-blend-mode: lighten;
  padding: 100px 0;

  .about {
    width: 40%;
    @media (max-width: 660px) {
      width: 80%;
    }
    h1 {
      position: relative;
      width: max-content;
      margin: auto;
      &:before {
        background: #fca311;
        content: "";
        width: 40%;
        height: 3px;
        bottom: 5px;
        position: absolute;
      }
    }
  }
  .aboutParagraph {
    width: 60%;
    @media (max-width: 660px) {
      width: 90%;
    }
    .inside {
      width: 50%;
      @media (max-width: 1200px) {
        width: 80%;
      }
      @media (max-width: 750px) {
        width: 90%;
      }
      @media (max-width: 660px) {
        width: 100%;
      }
      p {
        font-size: 1rem;
        color: #4d4d4d;
        text-align: start;
        @media (max-width: 660px) {
          text-align: center;
        }
      }
      .btns {
        margin-top: 30px;
        .button-container {
          display: flex;
          align-items: stretch;
          .button {
            display: flex;
            align-items: center;
          }
        }
        @media (min-width: 660px) {
          justify-content: flex-start;
        }
      }
    }
  }
`;
