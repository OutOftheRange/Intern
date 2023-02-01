import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import routingUrl from "../../constants/routingUrl";
import "bootstrap/dist/css/bootstrap.css";
import "./AuthorizationForms.css";
import { LoginValidationschema } from "../AuthorizationValidation/LoginFormValidation";
const LoginForm = () => {
  return (
    <div className="auth-form">
      <div className="header-button-wrapper">
        <Link to={routingUrl.pathToLoginPage}>
          <button className="current-form-type header-button left-button">
            login
          </button>
        </Link>
        <Link to={routingUrl.pathToSignUpPage}>
          <button className="other-form-type header-button right-button">
            registration
          </button>
        </Link>
      </div>
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        validationSchema={LoginValidationschema}
        onSubmit={async (values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {(formik) => {
          const { errors, touched, isValid, dirty } = formik;
          return (
            <div className="flex flex-col justify-center items-center">
              <Form className="form">
                <div className="mb-3 row">
                  <label htmlFor="email" className="col-sm-2 col-form-label up">
                    Email
                  </label>
                  <br />

                  <Field
                    id="email"
                    name="email"
                    placeholder="name@gmail.com"
                    type="email"
                    required
                    className={
                      errors.email && touched.email ? "input-error" : null
                    }
                  />
                </div>
                <div className="d-flex p-2">
                  <ErrorMessage
                    name="email"
                    component="span"
                    className="error"
                  />
                </div>
                <div className="mb-3 row">
                  <label
                    htmlFor="password"
                    className="col-sm-2 col-form-label up"
                  >
                    Password
                  </label>

                  <Field
                    id="password"
                    name="password"
                    type="password"
                    required
                    className={
                      errors.email && touched.email ? "input-error" : null
                    }
                  />
                </div>
                <div className="error">
                  <ErrorMessage
                    name="password"
                    component="span"
                    className="error"
                  />
                </div>
                <button
                  type="submit"
                  className={!(dirty && isValid) ? "disabled-btn" : ""}
                  disabled={!(dirty && isValid)}
                >
                  Submit
                </button>
              </Form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default LoginForm;
