import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
//Import Image
import lightLogo from "../../assets/images/main-logo.png";
import darkLogo from "../../assets/images/main-logo.png";

import resetPasswordImage from "../../assets/images/auth/reset-password.png";
import { Card, CardBody, Col, Container, Input, Row } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { changePasswordAsync } from "../../store/reducers/auth.reducer";

const NewPassword = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const formRef = useRef(null);
  const navigate = useNavigate()

  const changePasswordHandle = async (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const password = formData.get('password');
    const confirmPassword = formData.get('confirm_password');
    const searchParams = new URLSearchParams(window.location.search);
    const resetPasswordToken = searchParams.get('reset_password_token');
    const user_email = localStorage.getItem("email");

    if (password !== confirmPassword) {
      toast.error('Password and confirm password does not matched');
      return;
    }
    setLoading(true);
    try {
      const sendData = {
        token: resetPasswordToken,
        user: {
          password: password,
          confirmPassword: confirmPassword,
          email: user_email
        }
      }
      await dispatch(changePasswordAsync(sendData));
      toast.success("Password updated successfully");
      navigate("/signin");
    } catch (error) {
      console.log("Error Forgot password Form:", error);
      toast.error(error?.response?.data?.error);
    } finally {
      setLoading(false);
    }
  }

  document.title =
    "Change Password | Pets HelpFul";
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
                      <Row className="g-0">
                        <Col lg={6} className="text-center">
                          <CardBody className="p-4">
                            <Link to="/">
                              <img
                                src={lightLogo}
                                alt=""
                                className="logo-light"
                                style={{ 
                                  height:"100px" }}
                              />
                              <img
                                src={darkLogo}
                                alt=""
                                className="logo-dark"
                                style={{ 
                              height:"100px" }}
                              />
                            </Link>
                            <div className="mt-5">
                              <img
                                src={resetPasswordImage}
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                          </CardBody>
                        </Col>
                        <Col lg={6}>
                          <CardBody className="auth-content p-5 h-100 text-white">
                            <div className="text-center mb-4">
                              <h5>Reset Password</h5>
                              <p className="text-white-50">
                                Reset your password with Jobcy.
                              </p>
                            </div>
                            <Form
                              ref={formRef}
                              className="auth-form text-white"
                            >
                              <div className="mb-4">
                                <label className="form-label" htmlFor="email">
                                  Password
                                </label>
                                <Input
                                  type="password"
                                  className="form-control"
                                  id="password"
                                  name="password"
                                  placeholder="Enter your new password"
                                />
                              </div>
                              <div className="mb-4">
                                <label className="form-label" htmlFor="email">
                                  Confirm Password
                                </label>
                                <Input
                                  type="password"
                                  className="form-control"
                                  id="confirm_password"
                                  name="confirm_password"
                                  placeholder="Enter your password again"
                                />
                              </div>
                              <div className="mt-3">
                                <button
                                  type="submit"
                                  className="btn btn-white w-100"
                                  onClick={changePasswordHandle}
                                >
                                  Change Password
                                </button>
                              </div>
                            </Form>
                            <div className="mt-5 text-center text-white-50">
                              <p>
                                Remembered It ?{" "}
                                <Link
                                  to="/signin"
                                  className="fw-medium text-white text-decoration-underline"
                                >
                                  {" "}
                                  Go to Login{" "}
                                </Link>
                              </p>
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

export default NewPassword;
