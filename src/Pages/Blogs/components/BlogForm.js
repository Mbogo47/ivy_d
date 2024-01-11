import React from "react";
import { Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Col, Input, Row } from "reactstrap";

const BlogForm = () => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <Form action="#" className="contact-form mt-5">
        <h5 className="border-bottom pb-3">{t("leave_a_message")}</h5>
        <Row className="mt-4">
          <Col lg={6}>
            <div className="position-relative mb-3">
              <label htmlFor="name" className="form-label">
                {t("form_name")}
              </label>
              <Input
                name="name"
                id="name"
                type="text"
                className="form-control"
                placeholder={t("form_plac_name")}
                required=""
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="position-relative mb-3">
              <label htmlFor="email" className="form-label">
                {t("form_email")}
              </label>
              <Input
                name="email"
                id="email"
                type="email"
                className="form-control"
                placeholder={t("form_plac_email")}
                required=""
              />
            </div>
          </Col>
          <Col lg={12}>
            <div className="position-relative mb-3">
              <label htmlFor="subject" className="form-label">
                {t("form_subject")}
              </label>
              <Input
                name="subject"
                id="subject"
                type="text"
                className="form-control"
                placeholder={t("form_plac_subject")}
              />
            </div>
          </Col>
          <Col lg={12}>
            <div className="position-relative mb-3">
              <label htmlFor="comments" className="form-label">
                {t("form_message")}
              </label>
              <textarea
                name="comments"
                id="comments"
                rows="4"
                className="form-control"
                placeholder={t("form_plac_message")}
              ></textarea>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={12} className="text-end">
            <button
              name="submit"
              type="submit"
              id="submit"
              className="btn btn-primary btn-hover"
            >
              {t("form_button")} <i className="uil uil-message ms-1"></i>
            </button>
          </Col>
        </Row>
      </Form>
    </React.Fragment>
  );
};

export default BlogForm;
