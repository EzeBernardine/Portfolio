import React, { useState, useRef, useEffect } from "react";
import { FooterStyle } from "./styles";
import { FlexibleDiv } from "../Box/flexibleDiv.styles";
import Button from "../Button";
import Scale from "../Scale";
import { FaFacebookF, FaMediumM } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { TiSocialInstagram } from "react-icons/ti";

const Footer = () => {
  return (
    <FooterStyle>
    <p>@2020</p>
      <FlexibleDiv>
        <ul>
          <li>
            <a href="">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="">
              <AiOutlineTwitter />
            </a>
          </li>
          <li>
            <a href="">
              <TiSocialInstagram />
            </a>
          </li>
          <li>
            <a href="">
              <FaMediumM />
            </a>
          </li>
        </ul>
      </FlexibleDiv>
    </FooterStyle>
  );
};
export default Footer;
