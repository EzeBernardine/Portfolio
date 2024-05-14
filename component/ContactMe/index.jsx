import React from "react";
import { ContactMeStyle } from "./styles";
import { Flex } from "../Box/flexibleDiv.styles";
 

const ContactMe = ({ contact }) => {
 

  return (
    <ContactMeStyle ref={contact}>
      <Flex
        justifyContent="space-between"
        alignItems="stretch"
        className="main"
      >
        <div className="side text">
          <div className="right">
            <h1>Contact Me</h1>
            <p>
              Hi, am just a phone call away. Send me a mail, a text or a call,
              lets colaborate and make the world a better place.
              <span role="img" aria-label="Smiling emoji">
                😃
              </span>
            </p>
          </div>
          <div className="links">
            <ul>
              <li>+2347038065257</li>
              <li>demayous1@gmail.com</li>
              <li>demayous2@gmail.com</li>
              <li>Nigeria</li>
            </ul>
          </div>
        </div>

 
      </Flex>
    </ContactMeStyle>
  );
};
export default ContactMe;
