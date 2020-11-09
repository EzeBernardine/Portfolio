import styled from "styled-components";

export const BlogStyle = styled.div`
  .blog-container {
    padding: 0 10%;
    min-height: 80vh;
  }
  .blogs {
    margin: 100px 0;
    .blog {
      padding: 30px;
      box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.11);
      cursor: pointer;
      &:hover {
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
          0 1px 3px rgba(0, 0, 0, 0.08);
      }
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
        font-weight: inherit
      }
    }
  }
`;
