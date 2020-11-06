import styled from "styled-components";

export const WorksStyle = styled.div`
  background: #14213d;
  .container {
    padding: 50px 0;
    position: relative;
    box-shadow: inset 0 0 112px #000000;
    section {
      .images {
        width: 80%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-gap: 20px;
        align-items: center;
        @media (max-width: 500px) {
          width: 90%;
        }
      }
      .imageAnchor {
        position: relative;
        &:hover .name {
          display: flex;
        }
        .pictureFrame {
          height: auto;
          width: 100%;
          cursor: pointer;
          border-radius: 6px;
          overflow: hidden;

          img {
            height: 100%;
            width: 100%;
            object-fit: contain;
          }
        }
        .name {
          font-size: 0.75rem;
          position: absolute;
          bottom: 0;
          color: white;
          padding: 5px 7px;
          display: none;
          border-radius: 0 5px 0 0;
          background: #1f2229;
          @media (max-width: 500px) {
            display: flex;
          }
        }
      }
    }
  }
`;
