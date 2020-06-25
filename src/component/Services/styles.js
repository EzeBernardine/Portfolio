import styled from "styled-components";

export const ServicesStyle = styled.div`
  padding: 50px 0;
  /* background: #000000; */
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
      width: 60%;
      margin: auto;
      @media (max-width: 1250px) {
        width: 80%;
      }
      @media (max-width: 450px) {
        width: 100%;
      }
      .cards {
        margin: 50px auto;
        .card {
          height: 200px;
          width: 300px;
          border-radius: 5px;
          margin: 20px;
          position: relative;
          overflow: hidden;
          &:first-child .content {
            background: #2a9d8fe6;
          }
          &:last-child .content {
            background: #f4a261de;
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
