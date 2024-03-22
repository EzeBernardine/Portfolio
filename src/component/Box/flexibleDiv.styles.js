import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"};
  text-align: ${({ textAlign }) => textAlign || "center"};
  flex-wrap: ${({ flexWrap }) => flexWrap || "wrap"};
  flex-direction: ${({ flexDir }) => flexDir || "row"};
  margin: ${({ margin}) => margin|| "auto"};
`;

export const Grid = styled('div')`
  display: grid;
  grid-template-columns: ${props => props.gridCol || "1fr"};
  grid-template-rows: ${props => props.gridRow || "auto"};
  grid-gap: ${props => props.gap || "10px"};
  justify-content: ${props => props.justifyContent || "center"};
  align-items: ${props => props.alignItems || "center"};
  width: 100%;
  & > * {
    min-width: 0
  }
`;