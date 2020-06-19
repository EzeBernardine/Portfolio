import styled from "styled-components";

export const FlexibleDiv = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  width: ${({ flexWidth }) => flexWidth || "100%"};
  height: ${({ flexHeight }) => flexHeight || "100%"};
  text-align: ${({ textAlign }) => textAlign || "center"};
  flex-wrap: ${({ flexWrap }) => flexWrap || "wrap"};
  flex-direction: ${({ flexDir }) => flexDir || "row"};
`;
