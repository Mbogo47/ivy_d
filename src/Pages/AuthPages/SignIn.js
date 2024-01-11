import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardBody, Col, Container, Input, Row } from "reactstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

//Import Image
import lightLogo from "../../assets/images/main-logo.png";
import darkLogo from "../../assets/images/main-logo.png";

import signInImage from "../../assets/images/auth/sign-in.png";
import { Form } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "../../utils/validations";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { Icon } from "@iconify/react";
import { signInAsync, UserAccountActivationAsync } from "../../store/reducers/auth.reducer";
import { useTranslation } from "react-i18next";


function AcountActivationModal({ isOpen, onRequestClose }) {
  return (
    <Modal show={isOpen} onHide={onRequestClose}>
    <Modal.Header>
      <Modal.Title>User account activation</Modal.Title>
    </Modal.Header>
    <Modal.Body>Please click the okay button to activate your account.</Modal.Body>
    <Modal.Footer>
      <Button variant="primary" onClick={onRequestClose}>
        Okay
      </Button>
    </Modal.Footer>
  </Modal>
  );
}

const SignIn = () => {
  document.title = "Sign In | Petshelpful";

  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(signInSchema)
  });

  const searchParams = new URLSearchParams(window.location.search);
  const userConfirmationToken = searchParams.get('confirmation_token');
  const [activeuser, setActiveUser] = useState(false);


  useEffect(() => {

    if (userConfirmationToken) {
      setActiveUser(true);
      setModalIsOpen(true);
    }
  }, []);

  const closeModal = async data =>  {
    setLoading(true);
    try {
      const userAccountActivationToken = {
        user: {
          confirmation_token: userConfirmationToken
        }
      }
      const response = await dispatch(UserAccountActivationAsync(userAccountActivationToken));
      const message = response.message;
      toast.success(message);

      navigate("/signin");
    } catch (error) {
      console.log("User Account Activation Error:", error);
      toast.error(error?.response?.data?.error);
    } finally {
      setLoading(false);
    }
    setModalIsOpen(false);
  };

  const onSubmit = async data => {

    setLoading(true);
    try {
      const sendData = {
        user: {
          email: data.username,
          password: data.password,
        }
      }
      await dispatch(signInAsync(sendData));
      toast.success("User login successfully");
    } catch (error) {
      console.log("Error Sign Up Form:", error);
      toast.error(error?.response?.data?.error);
    } finally {
      setLoading(false);
    }
  };

  const {t}= useTranslation();

  return (
    <React.Fragment>
      <div>
        <div className="main-content">
          <div className="page-content">
          {activeuser ? (
            <AcountActivationModal isOpen={modalIsOpen} onRequestClose={closeModal} />
          ) : null}
            <section className="bg-auth">
              <Container>
                <Row className="justify-content-center">
                  <Col xl={10} lg={12}>
                    <Card className="auth-box">
                      <Row className="g-0">
                        <Col lg={6} className="text-center">
                          <CardBody className="p-4">
                            <Link to="/">
                              <img
                                src={lightLogo}
                                alt=""
                                className="logo-light"
                                style={{
                                  height: "100px",
                                }}
                              />
                              <img
                                src={darkLogo}
                                alt=""
                                className="logo-dark"
                                style={{
                                  height: "100px",
                                }}
                              />
                            </Link>
                            <div className="mt-5">
                              <img
                                src={signInImage}
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                          </CardBody>
                        </Col>
                        <Col lg={6}>
                          <CardBody className="auth-content p-5 h-100 text-white">
                            <div className="w-100">
                              <div className="text-center mb-4">
                                <h5>{t("signin_heading")}</h5>
                                <p className="text-white-70">
                                  {t("signin_subheading")}
                                </p>
                              </div>
                              <div>
                                <ul className="blog-social-menu list-inline mb-0 text-center">
                                  <li className="list-inline-item">
                                    <Link
                                      to="#"
                                      className="social-link bg-primary-subtle text-primary"
                                    >
                                      <Icon icon="ri:facebook-fill" />
                                    </Link>
                                  </li>
                                  <li className="list-inline-item">
                                    <Link
                                      to="#"
                                      className="social-link bg-danger-subtle text-danger"
                                    >
                                      <Icon icon="grommet-icons:google" />
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <br />
                              <p className="text-center ">{t("signin_or")}</p>
                              <Form
                                onSubmit={handleSubmit(onSubmit)}
                                className="auth-form"
                              >
                                <div className="mb-3">
                                  <label
                                    htmlFor="usernameInput"
                                    className="form-label"
                                  >
                                    {t("signin_email_label")}
                                  </label>
                                  <Controller
                                    name="username"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                      <Input
                                        {...field}
                                        type="text"
                                        className="form-control"
                                        id="usernameInput"
                                        placeholder={t("signin_email_placeholder")}
                                      />
                                    )}
                                  />
                                  {errors?.username && <span className="">{errors?.username?.message}</span>}
                                </div>
                                <div className="mb-3">
                                  <label
                                    htmlFor="passwordInput"
                                    className="form-label"
                                  >
                                    {t("signin_password_label")}
                                  </label>
                                  <Controller
                                    name="password"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                      <Input
                                        {...field}
                                        type="password"
                                        autoComplete="true"
                                        className="form-control"
                                        id="passwordInput"
                                        placeholder={t("signin_password_placeholder")}
                                      />
                                    )}
                                  />
                                  {errors?.password && <span className="">{errors?.password?.message}</span>}
                                </div>
                                <div className="mb-4">
                                  <div className="form-check">
                                    <Controller
                                      name="remember_me"
                                      control={control}
                                      defaultValue=""
                                      render={({ field }) => (
                                        <Input
                                          {...field}
                                          className="form-check-input"
                                          type="checkbox"
                                          id="flexCheckDefault"
                                        />
                                      )}
                                    />
                                    <Link
                                      to="/resetpassword"
                                      className="float-end text-white"
                                    >
                                      {t("signin_forgot_password")}
                                    </Link>
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexCheckDefault"
                                    >
                                      {t("signin_remember_me")}
                                    </label>
                                  </div>
                                </div>
                                <div className="text-center">
                                  <button
                                    type="submit"
                                    className="btn btn-white btn-hover w-100"
                                  >
                                    {loading ? <Icon icon="svg-spinners:180-ring" color="#a6652c" fontSize={16} /> : t("signin_button")}
                                  </button>
                                </div>
                              </Form>
                              <div className="mt-4 text-center">
                                <p className="mb-0">
                                  {t("signin_no_account")}
                                  <Link
                                    to="/signup"
                                    className="fw-medium text-white text-decoration-underline"
                                  >
                                    {t("signin_sign_up")}
                                  </Link>
                                </p>
                              </div>
                            </div>
                          </CardBody>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </section>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignIn;
