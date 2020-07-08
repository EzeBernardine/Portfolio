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
          margin: 30px;
        }
      }
    }

    @media (max-width: 1000px) {
      width: 95%;
    }
  }
`;
