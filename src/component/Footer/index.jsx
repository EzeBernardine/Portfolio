import React from "react";
import { FooterStyle } from "./styles";
import { Flex } from "../Box/flexibleDiv.styles";
import { FaFacebookF, FaMediumM } from "react-icons/fa";
import { AiOutlineTwitter, AiFillGithub, AiFillGitlab } from "react-icons/ai";
import { TiSocialInstagram } from "react-icons/ti";

const Footer = () => {
  return (
    <FooterStyle>
      <p>@2020</p>
      <Flex>
        <ul>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://web.facebook.com/profile.php?id=100008556884999"
            >
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/LadyBCodes"
            >
              <AiOutlineTwitter />
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.instagram.com/ezebernardinemay/"
            >
              <TiSocialInstagram />
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://medium.com/@demayous1"
            >
              <FaMediumM />
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/EzeBernardine"
            >
              <AiFillGithub />
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://gitlab.com/EzeBernardineMay"
            >
              <AiFillGitlab />
            </a>
          </li>
        </ul>
      </Flex>
    </FooterStyle>
  );
};
export default Footer;
