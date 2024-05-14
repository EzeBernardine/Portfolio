import React from "react";
import { FooterStyle } from "./styles";
import { Flex } from "../Box/flexibleDiv.styles"; 
  
import { FacebookIcon, InstagramIcon, TwitterIcon } from "../../public/svg";

const Footer = () => {
  return (
    <FooterStyle>
      <p>@2021</p>
      <Flex>
        <ul>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://web.facebook.com/profile.php?id=100008556884999"
            >
              <FacebookIcon width={20} height={20} />
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/LadyBCodes"
            >
              <TwitterIcon width={20} height={20}  />
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.instagram.com/ezebernardinemay/"
            >
              <InstagramIcon width={20} height={20}  />
            </a>
          </li>


          {/* <li>
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
          </li> */}
        </ul>
      </Flex>
    </FooterStyle>
  );
};
export default Footer;
