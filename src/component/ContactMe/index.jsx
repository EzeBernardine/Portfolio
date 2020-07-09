import React from "react";
import { ContactMeStyle } from "./styles";
import { FlexibleDiv } from "../Box/flexibleDiv.styles";
import Button from "../Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const ContactMe = () => {
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .max(16)
      .required(),
    email: yup
      .string()
      .email()
      .required()
  });

  return (
    <ContactMeStyle>
      <FlexibleDiv
        justifyContent="space-between"
        alignItems="stretch"
        className="main"
      >
        <div className="side text">
          <div className="right">
            <h1>Contact Me</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
              rem blanditiis ad nemo, aut sunt aspernatur dolorum quisquam qui
              deserunt nesciunt nulla vel? Aperiam iure placeat dolores.
              Exercitationem, magni consectetur!
            </p>
          </div>
          <div className="links">
            <ul>
              <li>+2347038065257</li>
              <li>demayous1@gmail.com</li>
              <li>demayous2@gmail.com</li>
              <li>Nigeria, Aba</li>
            </ul>
          </div>
        </div>

        <div className="side form">
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

                  <FlexibleDiv className="btn" justifyContent="flex-end">
                    <Button
                      text="Hire Me"
                      bgColor="transparent"
                      size="md"
                      color="#E5E5E5"
                      type="button"
                      click={() => []}
                    />
                  </FlexibleDiv>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </FlexibleDiv>
    </ContactMeStyle>
  );
};
export default ContactMe;
