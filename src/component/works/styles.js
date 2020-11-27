import styled from "styled-components";

export const WorksStyle = styled.div`
  background: #1f2229;
  .pictureFrame {
    overflow: hidden;
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  .container {
    padding: 50px 0;
    position: relative;
    /* box-shadow: inset 0 0 112px #000000; */
    section {
      .images {
        width: 80%;
        @media (max-width: 500px) {
          width: 90%;
        }
        .work {
          margin-bottom: 50px;
          &:not(:last-child) {
            padding-bottom: 50px;
            border-bottom: 1px solid #2b2e35;
          }
          .work-img {
            @media (max-width: 700px) {
              margin-top: 20px;
              width: 100%;
            }
            .imageAnchor {
              position: relative;
              &:hover .name {
                display: flex;
              }
              .pictureFrame {
                height: auto;
                width: 70%;
                @media (max-width: 1000px) {
                  width: 90%;
                }
                @media (max-width: 700px) {
                  width: 100%;
                }
                cursor: pointer;
                overflow: hidden;
                img {
                  height: 100%;
                  width: 100%;
                  object-fit: contain;
                }
              }
            }
            @media (max-width: 700px) {
              width: 100%;
            }
          }
          @media (max-width: 700px) {
            flex-direction: column;
          }
        }
        .work-details {
          .work-name {
            color: white;
            font-family: "Charmonman", cursive;
          }
          .work-stack {
            li {
              list-style-type: none;
              display: inline-flex;
              margin-right: 10px;
              @media (max-width: 1000px) {
                margin-right: 5px;
                img {
                  width: 40px;
                  height: 40px;
                }
              }
              @media (max-width: 800px) {
                margin-right: 3px;
              }
            }
          }
          .work-review {
            color: white;
            text-align: start;
            font-size: 16px;
          }
          @media (max-width: 700px) {
            width: 100%;
            order: -1;
          }
        }
      }
    }
  }
`;
