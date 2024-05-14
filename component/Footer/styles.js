import styled from "styled-components";

export const FooterStyle = styled.div`
  background: #000;
  padding: 30px 0;

  ul {
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    li {
      margin: 20px;
      background: #121417;
      border-radius: 100%;
      height: 40px;
      width: 40px;
      display: flex;
      justify-content: center;
      cursor: pointer;
      align-items: center;
      &:hover {
        background: #1f2229;
      }
      a {
        color: #fbc56d;
      }
    }
  }
  p {
    color: #e5e5e5;
    margin: 0 auto;
    text-align: center;
    font-size: 0.8rem;
  }
`;
