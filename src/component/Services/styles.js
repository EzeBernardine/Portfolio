import styled from "styled-components";

export const ServicesStyle = styled.div`
  background: #14213de3;
  padding: 50px 0;
  position: relative;
  box-shadow: 0 2px 3px 3px #06060638;
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
        color: #fff;
        font-size: 1rem;
      }
    }

    section {
      width: 60%;
      margin: auto;
      @media (max-width: 1250px) {
        width: 80%;
      }
      @media (max-width: 450px) {
        width: 100%;
      }
      .cards {
        padding: 50px 0;
        .card {
          box-shadow: 0 0 2px 4px #06060638;
          height: 200px;
          width: 300px;
          border-radius: 5px;
          margin: 20px;
          position: relative;
          overflow: hidden;
          &:hover {
            box-shadow: 0 0 10px 10px #06060638;
          }
          .imgWrap {
            height: 100%;
            width: 100%;
            position: absolute;
            img {
              height: 100%;
              width: 100%;
              object-fit: cover;
            }
          }
          .content {
            /* background: #0908087a; */
            background: #ffffffc9;
            height: 100%;
            width: 100%;
            position: absolute;
            padding: 10px;
            h3 {
              color: #000;
              font-family: "Charmonman", cursive;
            }
            p {
              color: #000;
              font-size: 0.85rem;
            }
          }
        }
      }
    }
  }
`;
