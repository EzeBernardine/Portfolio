import React from "react";
import { ContactMeStyle } from "./styles";
import { Flex } from "../Box/flexibleDiv.styles";
import Button from "../Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const ContactMe = ({ contact }) => {
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .max(16)
      .required(),
    email: yup
      .string()
      .email()
      .required(),
  });

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

        {/* <div className="side form">
          <Formik
            initialValues={{ email: "", name: "" }}
            validationSchema={validationSchema}
            onSubmit={async () => {}}
          >
            {({ handleSubmit, handlechange }) => (
              <Form className="form_class" onSubmit={handleSubmit}>
                <div className="formSub">
                  <div className="inputMain">
                    <Field
                      type="text"
                      name="name"
                      placeholder="Name"
                      handlechange={handlechange}
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="error"
                    />
                  </div>
                  <div className="inputMain">
                    <Field
                      type="text"
                      name="phoneNumber"
                      placeholder="Phone Number"
                      handlechange={handlechange}
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="error"
                    />
                  </div>

                  <div className="inputMain">
                    <Field
                      component="textarea"
                      name="message"
                      placeholder="Message"
                      handlechange={handlechange}
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="error"
                    />
                  </div>

                  <Flex className="btn" justifyContent="flex-end">
                    <Button
                      text="Hire Me"
                      bgColor="#1f2229"
                      hColor='#1a1c22'
                      size="md"
                      color="#E5E5E5"
                      type="button"
                      click={() => []}
                    />
                  </Flex>
                </div>
              </Form>
            )}
          </Formik>
        </div> */}
      </Flex>
    </ContactMeStyle>
  );
};
export default ContactMe;
