import React from "react";
import { useTranslation } from "react-i18next";
import { Col, Row } from "reactstrap";

const Selected = () => {
  const {t} = useTranslation();
  return (
    <React.Fragment>
      <Row className="align-items-center">
        <Col lg={8}>
          <div className="mb-4 mb-lg-0">
            <h6 className="mb-0"> {t("my_ads_listings")} </h6>
          </div>
        </Col>
        <Col lg={4}>
          <div className="candidate-list-widgets">
            <Row>
              <Col lg={6}>
                <div className="selection-widget">
                  <select
                    className="form-select"
                    data-trigger
                    name="choices-single-filter-orderby"
                    id="choices-single-filter-orderby"
                    aria-label="Default select example"
                  >
                <option value="df">{t('default')}</option>
                <option value="ne">{t('newest')}</option>
                <option value="od">{t('oldest')}</option>
                <option value="rd">{t('random')}</option>
                  </select>
                </div>
              </Col>
              <Col lg={6}>
                <div className="selection-widget mt-2 mt-lg-0">
                  <select
                    className="form-select"
                    data-trigger
                    name="choices-candidate-page"
                    id="choices-candidate-page"
                    aria-label="Default select example"
                  >
                     <option value="df">{t('all')}</option>
                <option value="ne">{t('last_2_months')}</option>
                <option value="ne">{t('last_6_months')}</option>
                <option value="ne">{t('last_12_months')}</option>
                <option value="ne">{t('last_2_years')}</option>
                  </select>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Selected;
