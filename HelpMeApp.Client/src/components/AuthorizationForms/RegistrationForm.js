import { useState, React } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import routingUrl from "../../constants/routingUrl";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.css";
import "./AuthorizationForms.css";
import { RegValidationschema } from "../AuthorizationValidation/RegistrationFormValidation";
import { LoginValidationschema } from "../AuthorizationValidation/LoginFormValidation";

const RegistrationForm = () => {
  const [registrationData, setRegistrationData] = useState({
    email: "",
    password: ""
  });
  const [show, setShow] = useState(false);

  const [photo, setPhoto] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="auth-form">
      <div className="header-button-wrapper">
        <Link to={routingUrl.pathToHomePage}>
          <button className="other-form-type header-button left-button">
            login
          </button>
        </Link>
        <Link to={routingUrl.pathToSignUpPage}>
          <button className="current-form-type header-button right-button">
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
          setRegistrationData(values);
          handleShow();
        }}
      >
        {(formikSmallWindow) => {
          const { errors, touched, isValid, dirty } = formikSmallWindow;
          return (
            <Form className="form">
              <div className="mb-3 row">
                <label htmlFor="email" className="col-sm-2 col-form-label up">
                  Email
                </label>

                <Field
                  id="email"
                  name="email"
                  placeholder="name@gmail.com"
                  type="email"
                  className={
                    errors.email && touched.email ? "input-error" : null
                  }
                  required
                />
              </div>
              <div className="mb-3 row">
                <ErrorMessage name="email" component="span" className="error" />{" "}
              </div>
              <br />
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
                  className={
                    errors.password && touched.password ? "input-error" : null
                  }
                  required
                />
              </div>
              <div className="mb-3 row">
                <ErrorMessage
                  name="password"
                  component="span"
                  className="error"
                />{" "}
              </div>

              <button
                className={!(dirty && isValid) ? "disabled-btn" : ""}
                disabled={!(dirty && isValid)}
                type="submit"
              >
                Next
              </button>
            </Form>
          );
        }}
      </Formik>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Fill in personal data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Formik
              initialValues={{
                name: "",
                surname: "",
                phoneNumber: "",
                info: ""
              }}
              validationSchema={RegValidationschema}
              onSubmit={async (values) => {
                const allData = {
                  email: registrationData.email,
                  password: registrationData.password,
                  name: values.name,
                  phoneNumber: values.phoneNumber,
                  info: values.info,
                  photo: photo.name
                };
                alert(JSON.stringify(allData));
                // configure form data and send post request with photo

                // const formData = new FormData();
                // formData.append("file", photo);

                // const response = await fetch('https://localhost:7048/api/Photo', {method: 'POST', body: formData});

                // add redirection
                handleClose();
              }}
            >
              {(formikBigWindow) => {
                const { errors, touched, isValid, dirty } = formikBigWindow;
                return (
                  <Form className="form">
                    <div className="mb-3 row modal-group">
                      <label htmlFor="name" className="col-sm-2 col-form-label">
                        Name
                      </label>
                      <br />

                      <Field
                        id="name"
                        name="name"
                        placeholder="John"
                        type="text"
                        className={
                          errors.name && touched.name ? "input-error" : null
                        }
                        required
                      />
                    </div>
                    <div>
                      <ErrorMessage
                        name="name"
                        component="span"
                        className="error"
                      />{" "}
                    </div>
                    <div className="mb-3 row modal-group">
                      <label
                        htmlFor="surname"
                        className="col-sm-2 col-form-label"
                      >
                        Surname
                      </label>
                      <br />

                      <Field
                        id="surname"
                        name="surname"
                        placeholder="Bobkin"
                        type="text"
                        className={
                          errors.surname && touched.surname
                            ? "input-error"
                            : null
                        }
                        required
                      />
                    </div>
                    <ErrorMessage
                      name="surname"
                      component="span"
                      className="error"
                    />{" "}
                    <div className="mb-3 row modal-group">
                      <label
                        htmlFor="phoneNumber"
                        className="col-sm-4 col-form-label"
                      >
                        Phone Number
                      </label>
                      <br />

                      <Field
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="+380000000000"
                        type="tel"
                        className={
                          errors.phoneNumber && touched.phoneNumber
                            ? "input-error"
                            : null
                        }
                        required
                      />
                    </div>
                    <ErrorMessage
                      name="phoneNumber"
                      component="span"
                      className="error"
                    />{" "}
                    <div className="mb-3 row modal-group">
                      <label htmlFor="info" className="col-sm-2 col-form-label">
                        Info
                      </label>
                      <br />

                      <Field
                        id="info"
                        name="info"
                        placeholder="Some info about you"
                        type="text"
                        className={
                          errors.info && touched.info ? "input-error" : null
                        }
                      />

                      <div className="bm-3">
                        <br />
                        <label htmlFor="photo" className="form-label">
                          Select your photo
                        </label>
                        <input
                          type="file"
                          id="photo"
                          name="photo"
                          accept="image/png, image/jpeg, image/jpg"
                          /* className={
                            errors. && touched.p ? "input-error" : null
                          } */
                          onChange={(event) => {
                            setPhoto(event.currentTarget.files[0]);
                          }}
                        ></input>
                      </div>
                    </div>
                    <br />
                    <button
                      type="submit"
                      className={!(dirty && isValid) ? "disabled-btn" : ""}
                      disabled={!(dirty && isValid)}
                    >
                      Register
                    </button>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default RegistrationForm;
