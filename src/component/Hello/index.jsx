import React from "react";
import { HelloStyle } from "./styles";
import { Flex } from "../Box/flexibleDiv.styles";
import Button from "../Button";

const Hello = () => {
  return (
    <HelloStyle>
      <Flex>
        <div>
          {" "}
          <p>Have any Project in Mind?</p>
          <h1> JUST SAY HELLO</h1>
          <Flex className="btn">
            <Button
              text="Hire Me"
              bgColor="transparent"
              size="md"
              type="button"
              color="#E5E5E5"
              click={() => []}
            />
          </Flex>
        </div>
      </Flex>
    </HelloStyle>
  );
};
export default Hello;
