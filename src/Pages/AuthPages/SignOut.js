import React from "react";

import lightLogo from "../../assets/images/main-logo.png";
import darkLogo from "../../assets/images/main-logo.png";

import signInImage from "../../assets/images/auth/sign-in.png";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SignOut = () => {
  document.title = "Sign Out | Petshelpful";
  const {t} = useTranslation();
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
                      <Row>
                        <Col lg={6} className="text-center">
                          <CardBody className="p-4">
                            <Link to="/">
                              <img
                                src={lightLogo}
                                alt=""
                                className="logo-light"
                                style={{ height: "100px" }}
                              />
                              <img
                                src={darkLogo}
                                alt=""
                                className="logo-dark"
                                style={{ height: "100px" }}
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
                          <div className="auth-content card-body p-5 text-white">
                            <div className="w-100">
                              <div className="text-center mb-4">
                                <h5>{t("logged_out_heading")}</h5>
                                <p className="text-white-70">
                                  {t("logged_out_subheading")}
                                </p>
                              </div>
                              <Link
                                to="/signin"
                                className="btn btn-white btn-hover w-100"
                              >
                                {t("logged_out_signin_button")}
                              </Link>
                              <div className="mt-3 text-center">
                                <p className="mb-0">
                                  {t("logged_out_no_account_question")}{" "}
                                  <Link
                                    to="/signup"
                                    className="fw-medium text-white text-decoration-underline"
                                  >
                                    {" "}
                                    {t("logged_out_signup_link")}{" "}
                                  </Link>
                                </p>
                              </div>
                            </div>
                          </div>
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

export default SignOut;
