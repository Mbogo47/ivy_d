import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, Card, Col, Input, Row, CardBody } from "reactstrap";

import lightLogo from "../../assets/images/main-logo.png";
import darkLogo from "../../assets/images/main-logo.png";

import { Icon } from "@iconify/react";
import { Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { signupSchema } from "../../utils/validations";
import signUpImage from "../../assets/images/auth/sign-up.png";
import { signUpAsync } from "../../store/reducers/auth.reducer";
import { useTranslation } from "react-i18next";
import FacebookLogin from 'react-facebook-login';
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleOAuthProvider } from '@react-oauth/google';
import LoginWithGoogle from './LoginWithGoogle';
const SignUp = () => {

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(signupSchema)
  });

  const onSubmit = async data => {
    if (data?.terms === "" || data?.terms === false) {
      toast.warning("Terms and conditions are Required");
      return
    }
    setLoading(true);
    try {
      const sendData = {
        user: {
          email: data.email,
          password: data.password,
          username: data.username
        }
      }
      await dispatch(signUpAsync(sendData));
      toast.success("User created successfully. Please check your email to activate your account. Link has been sent to your email.");
      navigate("/signin");
    } catch (error) {
      console.log("Error Sign Up Form:", error);
      toast.error(error?.response?.data?.status?.message);
    } finally {
      setLoading(false);
    }
  };
 
  const responseFacebook = (response) => {
    console.log("facebook console");
    console.log(response);
    // this.signup(response, 'facebook');
  }

  document.title = "Sign Up | Petshelpful";
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <div>
        <div className="main-content">
          <div className="page-content">
            <section className="bg-auth">
              <Container>
                <Row className="justify-content-center">
                  <Col xl={10} lg={12}>
                    <Card className="auth-box">
                      <Row className="align-items-center">
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
                                src={signUpImage}
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                          </CardBody>
                        </Col>
                        <Col lg={6}>
                          <CardBody className="auth-content p-5 text-white">
                            <div className="w-100">
                              <div className="text-center">
                                <h5>{t("signup_heading")}</h5>
                                <p className="text-white-70">
                                  {t("signup_subheading")}
                                </p>
                              </div>
                              <div>
                                <ul className="blog-social-menu list-inline mb-0 text-center">
                                  <li className="list-inline-item">
                                    <LoginSocialFacebook
                                      appId=""
                                      fields="name,email,picture"
                                      onResolve={(response) => {console.log('tttttttttttttttttttttttttttt',response)}}
                                      onReject={(error) => { console.log(error)}}
                                    >
                                      <FacebookLoginButton/>
                                    </LoginSocialFacebook>
                                    {/* <FacebookLogin
                                      appId=""
                                      autoLoad={true}
                                      fields="name,email,picture"
                                      // onClick={componentClicked}
                                      callback={responseFacebook} /> */}
                                  </li>
                                  <li className="list-inline-item">
                                    <GoogleOAuthProvider clientId="995531737791-b7ro0j22bd3ogfoa8896o80nb8gm1h3m.apps.googleusercontent.com">
                                        <React.StrictMode>
                                            <LoginWithGoogle />
                                        </React.StrictMode>
                                    </GoogleOAuthProvider>
                                  </li>
                                </ul>
                              </div>
                              <br />
                              <p className="text-center ">{t("or")}</p>

                              <Form onSubmit={handleSubmit(onSubmit)} className="auth-form">
                                <div className="mb-3">
                                  <label
                                    htmlFor="usernameInput"
                                    className="form-label"
                                  >
                                    {t("signup_username")}
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
                                        placeholder={t("signup_username")}
                                      />
                                    )}
                                  />
                                </div>
                                <div className="mb-3">
                                  <label
                                    htmlFor="emailInput"
                                    className="form-label"
                                  >
                                    {t("signup_email")}
                                  </label>
                                  <Controller
                                    name="email"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                      <Input
                                        {...field}
                                        type="email"
                                        className="form-control"
                                        id="emailInput"
                                        placeholder={t("signup_email")}
                                      />
                                    )}
                                  />
                                  {errors?.email && <span className="">{errors?.email?.message}</span>}
                                </div>
                                <div className="mb-3">
                                  <label htmlFor="passwordInput" className="form-label">
                                    {t("signup_password")}
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
                                        placeholder={t("signup_password")}
                                      />
                                    )}
                                  />
                                  {errors?.password && <span className="">{errors?.password?.message}</span>}
                                </div>
                                <div className="mb-4">
                                  <div className="form-check">
                                    <Controller
                                      name="terms"
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
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexCheckDefault"
                                    >
                                      {t("signup_terms")}
                                      <Link
                                        to="/termandconditions"
                                        className="text-white text-decoration-underline"
                                      >
                                        {t("term_&_conditions")}
                                      </Link>
                                    </label>
                                  </div>
                                </div>
                                <div className="text-center">
                                  <button
                                    type="submit"
                                    className="btn btn-white btn-hover w-100"
                                  >
                                    {loading ? <Icon icon="svg-spinners:180-ring" color="#a6652c" fontSize={16} /> : t('signup_sign_up')}
                                  </button>
                                </div>
                              </Form>
                              <div className="mt-3 text-center">
                                <p className="mb-0">
                                  {t("signup_already_member")}
                                  <Link
                                    to="/signin"
                                    className="fw-medium text-white text-decoration-underline"
                                  >
                                   {t("signup_sign_in")}
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

export default SignUp;
