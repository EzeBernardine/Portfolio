import React from "react";
import { FooterStyle } from "./styles";
import { FlexibleDiv } from "../Box/flexibleDiv.styles";
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
            <a href="https://web.facebook.com/profile.php?id=100008556884999">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/LadyBCodes">
              <AiOutlineTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/may_edinebernar/">
              <TiSocialInstagram />
            </a>
          </li>
          <li>
            <a href="https://medium.com/@demayous1">
              <FaMediumM />
            </a>
          </li>
        </ul>
      </FlexibleDiv>
    </FooterStyle>
  );
};
export default Footer;
