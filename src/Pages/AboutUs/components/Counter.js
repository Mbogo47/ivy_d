import React from "react";
import { Container, Row, Col } from "reactstrap";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";

const Counter = () => {
  const {t} = useTranslation();
  return (
    <React.Fragment>
      <section className="section bg-light">
        <Container>
          <Row>
            <Col lg={4} md={6}>
              <div className="counter-box mt-3">
                <div className="counters counter_custom text-center">
                  <CountUp
                    end={3000}
                    duration={1}
                    className="counter mb-0"
                  ></CountUp>
                  <h6 className="fs-16 mt-3 ">{t("available_pets")}</h6>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="counter-box mt-3">
                <div className="counters counter_custom text-center">
                  <CountUp
                    end={8.85}
                    decimals={2}
                    duration={1}
                    className="counter mb-0"
                  ></CountUp>
                  <h6 className="fs-16 mt-3">{t("positive_feedback")}</h6>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="counter-box mt-3">
                <div className="counters counter_custom text-center">
                  <CountUp
                    end={30000}
                    duration={1}
                    className="counter mb-0"
                  ></CountUp>
                  <h6 className="fs-16 mt-3">{t("members")}</h6>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Counter;
