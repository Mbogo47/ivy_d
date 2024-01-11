import React, { useState, useRef, useEffect } from "react";
import { useDispatch} from "react-redux";
import { toast } from "react-toastify";
import {
  Col,
  Row,
  TabContent,
  TabPane,
  Card,
  Input,
  CardBody,
  Label
} from "reactstrap";

//Images Import
import userImage2 from "../../../../assets/images/user/img-02.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Component
import { UpdateUserProfileAsync, GetUserProfileAsync } from "../../../../store/reducers/auth.reducer";
import { countryOptions } from "../../../../../src/commonComponents/options"

const RightSideContent = ({ profileData }) => {
  const [activeTab, setActiveTab] = useState("1");
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { t } = useTranslation();
  const accountOptions = [
    { value: "0", label: "seller" },
    { value: "1", label: "buyer" },]

  const handleUpdateProfile = async  (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    try {
      const sendData = {
        profile: formDataObject
      }
      await dispatch(UpdateUserProfileAsync(sendData));
      toast.success("User profile updated successfully");
      navigate("/myprofile");
    } catch (error) {
      console.log("Error On Profile Form:", error);
      console.log('erorr-----------------------', error?.response?.data?.error);
      toast.error(error?.response?.data?.error);
    } finally {
      setLoading(false);
    }

    console.log(' the value of all fileds-----------', formDataObject);

  }

  function handleImageChange(event) {
    const fileInput = event.target;
    const profileImage = document.getElementById("profile-img");
  
    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();
  
      reader.onload = function (e) {
        profileImage.src = e.target.result;
      };
  
      reader.readAsDataURL(fileInput.files[0]);
    }
  }

  return (
    <React.Fragment>
      <Col lg={8}>
        <Card className="profile-content-page mt-4 mt-lg-0">
          <CardBody className="p-4">
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <form ref={formRef} action="#">
                  <div>
                    <h5 className="fs-17 fw-semibold mb-3 mb-0">{t("my_account")}</h5>
                    <div className="text-center">
                      <div className="mb-4 profile-user">
                        <img
                          src={profileData?.profile_image ? profileData.profile_image : userImage2}
                          className="rounded-circle img-thumbnail profile-img"
                          id="profile-img"
                          alt=""
                        />
                        <div className="p-0 rounded-circle profile-photo-edit">
                          <Input
                            id="profile-img-file-input"
                            type="file"
                            className="profile-img-file-input"
                            onChange={handleImageChange}
                            name="profile_image"
                          />
                          <Label
                            htmlFor="profile-img-file-input"
                            className="profile-photo-edit avatar-xs"
                          >
                            <i className="uil uil-edit"></i>
                          </Label>
                        </div>
                      </div>
                    </div>
                    <Row>
                      <Col lg={6}>
                        <div className="mb-3">
                          <label htmlFor="firstName" className="form-label">
                            {t("first_name")}
                          </label>
                          <Input
                            type="text"
                            className="form-control"
                            id="firstName"
                            name="first_name"
                            defaultValue={profileData?.first_name}
                          />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Label htmlFor="lastName" className="form-label">
                            {t("last_name")}
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="lastName"
                            name="last_name"
                            defaultValue={profileData?.last_name}
                          />
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className="mb-3">
                          <label
                            htmlFor="choices-single-categories"
                            className="form-label"
                          >
                            {t("account_type")}
                          </label>
                          {/* <select
                            className="form-select"
                            data-trigger
                            name="account_type"
                            id="choices-single-categories"
                            aria-label="Default select example"
                            defaultValue={profileData?.account_type}
                          >
                            {accountOptions.map((option) => (
                              <option key={option.value} value={option.label} defaultValue={profileData?.account_type}>
                                {option.label}
                              </option>
                            ))}
                          </select> */}
                          <select
                            className="form-select"
                            data-trigger
                            name="account_type"
                            id="choices-single-categories"
                            aria-label="Default select example"
                          >
                            {accountOptions.map((option) => (
                              <option key={option.value} value={option.label} selected={profileData?.account_type === option.label}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Label htmlFor="phone_number" className="form-label">
                            {t("simple_phone_number")}
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="phone_number"
                            name="phone_number"
                            defaultValue={profileData?.phone_number}
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>

                  <div className="mt-4">
                    <h5 className="fs-17 fw-semibold mb-3">{t("profile")}</h5>
                    <Row>
                      <Col lg={12}>
                        <div className="mb-3">
                          <Label
                            htmlFor="exampleFormControlTextarea1"
                            className="form-label"
                          >
                            {t("introduce_yourself")}
                          </Label>
                          <textarea className="form-control" rows="5" name="bio" value={profileData.bio} >
                          </textarea>
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className="mb-3">
                          <Label htmlFor="languages" className="form-label">
                            {t("languages")}
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="languages"
                            name="language"
                            defaultValue={profileData?.language}
                          />
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className="mb-3">
                          <label
                            htmlFor="choices-single-location"
                            className="form-label"
                          >
                            {t("location")}
                          </label>
                          <select
                            className="form-select"
                            data-trigger
                            name="location"
                            id="choices-single-location"
                            aria-label="Default select example"
                            defaultValue={profileData?.location}
                          >
                            {countryOptions.map((option) => (
                              <option key={option.value} value={option.label}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </Col>
                    </Row>
                  </div>

                  <div className="mt-4">
                    <h5 className="fs-17 fw-semibold mb-3">{t("social_media")}</h5>
                    <Row>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Label htmlFor="facebook" className="form-label">
                          Facebook
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="facebook"
                            to="https://www.facebook.com"
                            name="facebook_url"
                            defaultValue={profileData?.facebook_url}
                          />
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className="mb-3">
                          <Label htmlFor="twitter" className="form-label">
                            Twitter
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="twitter"
                            to="https://www.twitter.com"
                            name="twitter_url"
                            defaultValue={profileData?.twitter_url}
                          />
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className="mb-3">
                          <Label htmlFor="linkedin" className="form-label">
                            Linkedin
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="linkedin"
                            to="https://www.linkedin.com"
                            name="linkedin_url"
                            defaultValue={profileData?.linkedin_url}
                          />
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className="mb-3">
                          <Label htmlFor="whatsapp" className="form-label">
                            WhatsApp
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            id="whatsapp"
                            to="https://www.whatsapp.com"
                            name="whatsapp_url"
                            defaultValue={profileData?.whatsapp_url}
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>

                  <div className="mt-4">
                    <h5 className="fs-17 fw-semibold mb-3 mb-3">
                      {t("change_password")}
                    </h5>
                    <Row>
                      <Col lg={12}>
                        <div className="mb-3">
                          <Label
                            htmlFor="current-password-input"
                            className="form-label"
                          >
                            {t("current_password")}
                          </Label>
                          <Input
                            type="password"
                            className="form-control"
                            placeholder={t("current_password")}
                            id="current-password-input"
                          />
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className="mb-3">
                          <Label
                            htmlFor="new-password-input"
                            className="form-label"
                          >
                            {t("new_password")}
                          </Label>
                          <Input
                            type="password"
                            className="form-control"
                            placeholder={t("new_password")}
                            id="new-password-input"
                          />
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className="mb-3">
                          <Label
                            htmlFor="confirm-password-input"
                            className="form-label"
                          >
                            {t("confirm_password")}
                          </Label>
                          <Input
                            type="password"
                            className="form-control"
                            placeholder={t("confirm_password")}
                            id="confirm-password-input"
                          />
                        </div>
                      </Col>

                      <Col lg={12}>
                        <div className="form-check">
                          <Input
                            className="form-check-input"
                            type="checkbox"
                            id="verification"
                          />
                          <Label
                            className="form-check-label"
                            htmlFor="verification"
                          >
                            {t("enable_verification")}
                          </Label>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className="mt-4 text-end">
                  <Link to="#" onClick={handleUpdateProfile} className="btn btn-primary">
                      {t("update")}
                    </Link>
                  </div>
                </form>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  )
};

export default RightSideContent;
