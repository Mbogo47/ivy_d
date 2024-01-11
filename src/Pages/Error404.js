import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { useTranslation } from "react-i18next"; // Import the translation hook

//import Images
import Error404Image from "../assets/images/404.png";

const Error404 = () => {
  const { t } = useTranslation(); // Initialize the translation hook
  document.title = t("error404_title");

  return (
    <React.Fragment>
      <div>
        <div className="main-content">
          <div className="page-content">
            <section className="bg-error bg-auth text-dark">
              <Container>
                <Row className="justify-content-center">
                  <Col lg={6}>
                    <div className="text-center">
                      <img src={Error404Image} alt="" className="img-fluid" />
                      <div className="mt-5">
                        <h4 className="text-uppercase mt-3">
                          {t("error404_title")}
                        </h4>
                        <p className="text-muted">{t("error404_text")}</p>
                        <div className="mt-4">
                          <Link
                            className="btn btn-primary waves-effect waves-light"
                            to="/"
                          >
                            <i className="mdi mdi-home"></i>{" "}
                            {t("error404_back_to_home")}
                          </Link>
                        </div>
                      </div>
                    </div>
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

export default Error404;
