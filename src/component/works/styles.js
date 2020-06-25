import styled from "styled-components";

export const WorksStyle = styled.div`
  padding: 0 0 50px 0;
  .container {
    header {
      text-align: center;
      width: 60%;
      margin: auto;
      @media (max-width: 600px) {
        width: 80%;
      }
      h1 {
        position: relative;
        width: max-content;
        margin: 30px auto;
        &:before {
          background: #fca311;
          content: "";
          width: 40%;
          height: 3px;
          right: 0;
          left: 0;
          margin: auto;
          bottom: 5px;
          position: absolute;
        }
      }
      p {
        color: #4d4d4d;
        font-size: 1rem;
      }
    }

    section {
      margin: 50px 0;
      .links {
        width: 30%;
        /* position: absolute; */
        ul {
          padding: 0;
          margin: auto;
          width: max-content;
          li {
            list-style: none;
            width: max-content;
            font-size: 0.8rem;
            margin: 10px 0;
            color: #3e5e5e;
            text-align: start;
            &:hover {
              color: #fca311;
              cursor: pointer;
            }
          }
        }
      }
      .images {
        width: 70%;
        display: grid;
      }
      .imgWrap {
        max-height: 500px;
        height: max-content;
        max-width: 300px;
        &:nth-child(1) {
          grid-template-areas: 1 / 1/ 1/ 1;
        }
        &:nth-child(2) {
          grid-template-areas: 2 / 1/ 3/ 1;
        }
        &:nth-child() {
          grid-template-areas: 1 / 1/ 1/ 1;
        }
        &:nth-child() {
          grid-template-areas: 1 / 1/ 1/ 1;
        }
        img {
          height: 100%;
          width: 100%;
          object-fit: contain;
        }
      }
    }
  }
`;
