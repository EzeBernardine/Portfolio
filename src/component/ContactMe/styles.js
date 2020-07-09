import styled from "styled-components";

export const ContactMeStyle = styled.div`
  background: #1f2229;
  padding: 100px 20%;

  @media (max-width: 1100px) {
    padding: 100px 10%;
    @media (max-width: 800px) {
      .main {
        flex-direction: column;
        & > div {
          width: 100%;
          margin-bottom: 20px;
        }
      }
    }
  }
  @media (max-width: 400px) {
    padding: 100px 5%;
  }
  .text {
    text-align: start;
    h1 {
      color: #e5e5e5;
      position: relative;
      &:before {
        background: #fbc56d;
        content: "";
        width: 50px;
        height: 3px;
        left: 0;
        bottom: 5px;
        position: absolute;
      }
    }
    p {
      color: #e5e5e5;
      margin-top: 10px;
      font-size: 0.85rem;
    }
    .links {
      margin-top: 50px;
      ul {
        padding: 0;
        li {
          list-style: none;
          margin: 5px 0;
          position: relative;
          padding-left: 15px;
          color: #fbc56d;
            font-size: 0.8rem;
          &:before {
            content: "✔️";
            position: absolute;
            left: 0;
          }
        }
      }
    }
  }
  .side {
    width: 45%;
    form {
      box-shadow: 0 0px 36px 3px #0000008f;
      .formSub {
        padding: 40px;
        display: grid;
        grid-gap: 30px;

        input {
          color: #e5e5e5;
          background: transparent;
          border: none;
          width: 100%;
          border-bottom: 1px solid #959494;
        }
        .btn {
          margin-top: 20px;
          button {
            color: #fbc56d;
            border: 1px solid #fbc56d;
          }
        }
      }
    }
  }
`;
