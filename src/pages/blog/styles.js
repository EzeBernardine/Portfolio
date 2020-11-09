import styled from "styled-components";

export const BlogStyle = styled.div`
  .blogs-container {
    padding: 0 10%;
    min-height: 80vh;
  }
  .blogs {
    margin: 10rem 0;
    .blog-container {
      position: relative;
      &:hover {
        box-shadow: 0 0 2rem rgba(168, 171, 174, 0.15);
        transform: translateY(-5px);
      }
      .url {
        position: absolute;
        top: 0;
        right: 0;
        background: #fbc56d;
        padding: 5px 7px;
        font-size: 0.6rem;
        font-weight: 550;
        border-radius: 2px;
        z-index: 5;
        color: white;
        cursor: pointer;
        &:hover {
          background: #ddad5e;
        }
      }
      .blog {
        padding: 30px;
        border-radius: 4px;
        overflow: hidden;
        box-shadow: 0 0 1em 0 rgba(168, 171, 174, 0.15);
        cursor: pointer;
        transition: 100ms linear;

        .title {
          color: #3b3a3a;
          text-align: start;
          font-size: 1.8rem;
        }
        .pictureFrame {
          img {
            object-fit: contain;
            width: 100%;
            height: 100%;
          }
        }
        .subTitle {
          color: #3b3a3a;
          text-align: start;
          font-size: 1rem;
          font-weight: inherit;
        }
      }
    }
  }
`;
