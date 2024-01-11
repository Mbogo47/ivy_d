import React from "react";
import { Col, Container, Row } from "reactstrap";
import AdDetailsDescription from "./components/AdDetailsDescription";
import RelatedAd from "./components/RelatedAd";
import RightSideContent from "./components/RightSideContent";
import Section from "./components/Section";

const AdDetails = () => {
  document.title = "Ad Detail | Ad Title";
  return (
    <React.Fragment>
      <Section />
      <section className="section">
        <Container>
          <Row>
            <Col lg={8}>
              <AdDetailsDescription />
              <RelatedAd />
            </Col>
            <Col lg={4} className="mt-4 mt-lg-0">
              <RightSideContent />
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default AdDetails;
