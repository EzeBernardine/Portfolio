import styled from "styled-components";

export const StacksStyle = styled.div`
  background: #1f2229;
  padding: 50px 0;

  .container {
    width: 80%;
    margin: auto;
  }
  .test {
    width: 40%;
    padding: 0 50px;
    text-align: start;
    p,
    h3 {
      color: white;
    }
  }
  .stacks {
    width: 60%;
  }
`;
export const StackStyle = styled.div`
  margin: 50px;
  .range {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: white;
    background-image: linear-gradient(180deg, transparent 50%, #fca311 50%);
    /* background-image: linear-gradient(180deg, transparent 50%, #fca311 50%),
      linear-gradient(90deg, #fca311 50%, transparent 50%); */
    .cover {
      width: 95%;
      height: 95%;
      background: #1f2229;
      margin: auto;
      border-radius: 50%;
    }
  }
  h2 {
    font-size: 1rem;
  }
`;
