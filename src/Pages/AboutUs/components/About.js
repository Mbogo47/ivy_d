import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//Import Images
import AboutImage from "../../../assets/images/about/img-01.jpg";
import { useTranslation } from "react-i18next";

const About = () => {
  const {t} = useTranslation();
  return (
    <React.Fragment>
      <section className="section overflow-hidden">
        <Container>
          <Row className="align-items-center g-0">
            <Col lg={6}>
              <div className="section-title me-lg-5">
                <h6 className="sub-title">{t("about")}</h6>
               
                <p className="text-muted">
                  {t("about_text")}
                </p>

               { /*<Row mt={4} pt={2}>
                  <Col md={6}>
                    <ul className="list-unstyled about-list text-muted mb-0 mb-md-3">
                      <li> Sell Pets</li>
                      <li> Sell Pets</li>
                      <li> Sell Pets</li>
                      <li> Sell Pets</li>
                    </ul>
                  </Col>
                  <Col md={6}>
                    <ul className="list-unstyled about-list text-muted">
                      <li> Sell Pets</li>
                      <li> Sell Pets</li>
                      <li> Sell Pets</li>
                      <li> and more...</li>
                    </ul>
                  </Col>
                </Row>
                <div className="mt-3">
                  <Link to="#" className="btn btn-primary btn-hover">
                    Learn More{" "}
                    <i className="uil uil-angle-right-b align-middle"></i>
                  </Link>
  </div>*/}
              </div>
            </Col>
            <Col lg={6}>
              <div className="about-img mt-4 mt-lg-0">
                <img src={AboutImage} alt="" className="img-fluid rounded" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default About;
