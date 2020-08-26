import styled from "styled-components";

export const WorksStyle = styled.div`
  background: #14213d;
  .container {
    padding: 50px 0;
    position: relative;
    box-shadow: inset 0 0 112px #000000;
    section {
      .images {
        width: 70%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-gap: 10px;
      }
      .pictureFrame {
        height: auto;
        width: 200px;
        /* &:nth-child(1) {
          grid-area: 1 / 1/ 3/ 2;
        }
        &:nth-child(2) {
          grid-area: 1 / 2/ 2/ 3;
        }
        &:nth-child(3) {
          grid-area: 2 / 2/ 3/ 3;
        }
        &:nth-child(4) {
          grid-area: 1 / 3 / 2 /4;
        }
        &:nth-child(4) {
          grid-area: 2 / 3 / 3 /4;
        } */
        img {
          height: 100%;
          width: 100%;
          object-fit: contain;
        }
      }
    }
  }
`;
