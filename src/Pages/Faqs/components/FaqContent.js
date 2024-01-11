import React, { useState } from "react";

import {
  Col,
  Container,
  Row,
} from "reactstrap";

import { Link } from "react-router-dom";
import AccordianContentLeft from "./AccordianContentLeft";
import AccordianContentRight from "./AccordianContentRight";
import { useTranslation } from "react-i18next";

const FaqContent = () => {
  //Tab Change
  const [activeTab, setActiveTab] = useState("1");
  const TabChange = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <section className="section">
        <Container>
         
          <Row className="align-items-center mt-5">
            <Col lg={12}>
               <Row>
                    <Col lg={6}>
                      <div
                        className="accordion accordion-flush faq-box"
                        id="buying"
                      >
                        <AccordianContentLeft />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div
                        className="accordion accordion-flush faq-box"
                        id="generalTwo"
                      >
                        <AccordianContentRight />
                      </div>
                    </Col>
                  </Row>
            
            </Col>
            <Col lg={12}>
              <div className="text-center mt-5 ">
                <Link to="/contact" className="btn btn-primary btn-hover mt-2 me-5">
                  <i className="uil uil-phone"></i> {t("contact")}
                </Link>
                <Link to="mailto:info@petshelpful.com" className="btn btn-warning btn-hover mt-2 ms-md-2">
                  <i className="uil uil-envelope"></i> {t("email_now")}
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default FaqContent;
