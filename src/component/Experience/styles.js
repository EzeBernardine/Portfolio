import styled from "styled-components";
import star from "../../assets/images/exp2.jpg";

export const ExperinceStyle = styled.div`
  padding: 100px 0;
  /* background: #000000c4; */
  background: #14213d;
  .container {
    box-shadow: 31px 32px 36px 3px #0000008f;
    width: 80%;
    margin: auto;
    position: relative;
    background: #e5e5e5;
    background-image: url(${star});
    background-position: left;
    background-size: cover;
    background-blend-mode: luminosity;
    @media (max-width: 600px) {
      width: 90%;
    }
    .overlay {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: #14213d9e;
      /* background: #000000e8;/ */
    }

    p {
      font-size: 12px;
      color: #f2f0f0;
      /* color: #c1c1c1; */
      text-align: left;
    }

    .top {
      position: relative;
      padding: 50px;
      height: auto;
      @media (max-width: 900px) {
        flex-direction: column;
        align-items: flex-start;
      }
      .myName {
        position: absolute;
        top: 0;
        left: 0;
        height: 50px;
        width: 50px;
        h1 {
          font-family: "Ruthie", cursive;
          color: #fbc56d;
        }
      }
      .brief {
        width: 23%;
        margin-left: 50px;
        @media (max-width: 900px) {
          margin: 50px 0 50px 0;
          width: 100%;
        }
        b {
          color: white;
        }
      }
      .detail {
        width: 40%;
        text-align: left;
        @media (max-width: 900px) {
          width: 100%;
        }
        h1 {
          color: white;
          line-height: 1.3em;
          margin-bottom: 20px;
        }
      }
    }
    .wrap {
      position: relative;
      margin-top: 100px;
      @media only screen and (max-width: 1200px) {
        flex-direction: column;
        align-items: flex-start;
      }
      @media only screen and (max-width: 1000px) {
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
      }
      .direct {
        width: max-content;
        margin-right: 50px;
        @media (max-width: 1000px) {
          flex-direction: column;
        }
        @media (max-width: 600px) {
          display: none;
        }
        & > div {
          width: max-content;
        }
        span {
          color: white;
          background: #0000009e;
          /* background: #3b3b3b9e; */
          padding: 20px;
          cursor: pointer;
          &:hover {
            background: #e5e5e540;
            color: black;
            /* color: #fbc56d; */
          }
        }
        .active-direct {
          background: #fbc56d;
          color: black;
        }
      }
      .cards {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 30px;
        background: #0000009e;
        @media (max-width: 1000px) {
          max-width: 350px;
          grid-template-columns: 1fr;
        }
        @media (max-width: 600px) {
          margin: auto;
        }
        .card {
          padding: 20px;
          text-align: start;
          cursor: pointer;
          small,
          h2 {
            color: white;
            text-align: start;
          }
          .date {
            small {
              font-size: 10px;
              color: #c1c1c1;
            }
          }
          .caption {
            margin: 10px 0;
            h2 {
              font-size: 1rem;
              color: #d5d5d5;
              position: relative;
              width: max-content;
            }
          }
          .link {
            margin-top: 10px;
            a {
              color: #fbc56d;
              font-family: "Charmonman", cursive;
              text-decoration: underline;
              &:hover {
                color: #f9b341;
              }
            }
          }
          &:hover {
            box-shadow: 0 5px 8px 4px #0202028c;
          }
        }
        .active-card {
          box-shadow: inset 0 0 3px #000;
          background: #00000057;
        }
      }
    }
  }
`;
