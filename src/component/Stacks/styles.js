import styled from "styled-components";

export const StacksStyle = styled.div`
  background: #1f2229;

  padding: 50px 0;
  .container {
    width: 80%;
    padding-top: 90px;

    margin: auto;
    position: relative;
    .test {
      left: 0;
      top: 0;
      text-align: start;
      width: max-content;
      position: absolute;

      @media (max-width: 1100px) {
        right: 0;
        margin: auto;
      }
      h1 {
        color: #fbc56d;
        font-size: 1.5rem;
        position: relative;
        &:before {
          background: #fbc56d;
          content: "";
          width: 40%;
          height: 3px;
          left: 0;
          bottom: -0px;
          position: absolute;
        }
      }
    }

    .scales {
      margin: 0 0 0 auto;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      @media (max-width: 1100px) {
        justify-content: space-around;
        & > div {
          margin: 20px;
        }
      }
    }

    @media (max-width: 1000px) {
      width: 95%;
    }
  }
`;
