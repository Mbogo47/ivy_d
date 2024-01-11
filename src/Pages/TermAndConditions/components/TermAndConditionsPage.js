import React from "react";
import { Container, Row, Col } from "reactstrap";
import { useTranslation } from "react-i18next";

const TermAndConditionsPage = () => {
  
  const { t } = useTranslation();

  const privacyandpolicyPage = [
    {
      id: 1,
      policyTitle: t("term_title"),
      policyRules: [
        {
          id: 1,
          policyInnerRule: t("term_content_line_1")
        },
        {
          id: 2,
          policyInnerRule: t("term_content_line_2")
        },
        {
          id: 3,
        policyInnerRule: t("term_content_line_3")
        },
        {
          id: 4,
          policyInnerRule: t("term_content_line_4")
        },
        {
          id: 5,
         policyInnerRule: t("term_content_line_5")
        },
        {
          id: 6,
           policyInnerRule: t("term_content_line_6")
        },
        {
          id: 7,
        policyInnerRule: t("term_content_line_7")
        },
        {
          id: 8,
           policyInnerRule: t("term_content_line_8")
        },
        {
          id: 9,
          policyInnerRule: t("term_content_line_9")
        },
        {
          id: 10,
         policyInnerRule: t("term_content_line_10")
        },
        {
          id: 11,
           policyInnerRule: t("term_content_line_11")
        },
        {
          id: 12,
          policyInnerRule: t("term_content_line_12")
        },
        {
          id: 13,
           policyInnerRule: t("term_content_line_13")
        },
        {
          id: 14,
           policyInnerRule: t("term_content_line_14")
        },
        {
          id: 15,
           policyInnerRule: t("term_content_line_15")
        },
        {
          id: 16,
          policyInnerRule: t("term_content_line_16")
        }
      ]
    },
   
  ];
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="justify-content-center">
            {privacyandpolicyPage.map((privacyandpolicyDetails, key) => (
              <Col lg={12} key={key}>
                <h5 className="mb-4">{privacyandpolicyDetails.policyTitle}</h5>
                <ul className="about-list list-unstyled text-muted mb-4 pb-2">
                  {privacyandpolicyDetails.policyRules.map(
                    (privacyandpolicyInner, key) => (
                      <li key={key}>{privacyandpolicyInner.policyInnerRule}</li>
                    )
                  )}
                </ul>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default TermAndConditionsPage;
