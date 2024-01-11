import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col } from "reactstrap";

//Import images

import profileImage from "../../../../assets/images/profile.jpg";
import { useTranslation } from "react-i18next";

const LeftSideContent = ({ profileData }) => {
  console.log(' the value of props----------------------', profileData);
  const {t}= useTranslation();
  return (
    <React.Fragment>
      <Col lg={4}>
        <Card className="profile-sidebar me-lg-4">
          <CardBody className="p-4">
            <div className="text-center pb-4 border-bottom">
              <img
                src={profileData?.profile_image ? profileData.profile_image : profileImage}
                alt=""
                className="avatar-lg img-thumbnail rounded-circle mb-4"
              />
              <h5 className="mb-0">{profileData?.first_name} {profileData?.last_name}</h5>
              <p className="text-muted">{profileData?.account_type}</p>
              
              <ul className="candidate-detail-social-menu list-inline mb-0">
                <li className="list-inline-item">
                  <Link
                    to="#"
                    className="social-link rounded-3 btn-soft-primary"
                  >
                    <i className="uil uil-facebook-f"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#" className="social-link rounded-3 btn-soft-info">
                    <i className="uil uil-twitter-alt"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link
                    to="#"
                    className="social-link rounded-3 btn-soft-success"
                  >
                    <i className="uil uil-whatsapp"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link
                    to="#"
                    className="social-link rounded-3 btn-soft-danger"
                  >
                    <i className="uil uil-phone-alt"></i>
                  </Link>
                </li>
              </ul>
            </div>


            <div className="mt-4">
              <h5 className="fs-17 fw-bold mb-3">{t("contact")}</h5>
              <div className="profile-contact">
                <ul className="list-unstyled mb-0">
                  <li>
                    <div className="d-flex">
                      <label>{t("simple_email")}</label>
                      <div>
                        <p className="text-muted text-break mb-0">
                          {profileData?.email}
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex">
                      <label>{t("simple_phone_number")}</label>
                      <div>
                        <p className="text-muted mb-0">{profileData?.phone_number}</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex">
                      <label>{t("simple_location")}</label>
                      <div>
                        <p className="text-muted mb-0">{profileData?.location}</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default LeftSideContent;
