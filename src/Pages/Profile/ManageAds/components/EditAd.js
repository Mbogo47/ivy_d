import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  Col,
  Container,
  Input,
  Label,
  Row,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux"; 
import { toast } from "react-toastify";
import ImageUpload from "./ImageChange.js";
import { updateAdsAsync } from "../../../../store/reducers/ads.reducer.js";
import placeholderimg from "../../../../assets/images/placeholder.png";
import { Link } from "react-router-dom";
import "../../../PostYourAdd/components/postform.scss";
 
const EditForm = ({ modal, petAd }) => {
  const { t } = useTranslation();
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

    const ads = useSelector((state) => state.ads.ads);
    
  // State for latitude and longitude
  const [latitude, setLatitude] = useState(
    petAd ? petAd.latitude || null : null
  );
  const [longitude, setLongitude] = useState(
    petAd ? petAd.longitude || null : null
  );

  // Constants for Google Maps initialization
  const DEFAULT_LATITUDE = 0; // Set your initial latitude
    const DEFAULT_LONGITUDE = 0; // Set your initial longitude
    
const [mainImage, setMainImage] = useState(placeholderimg);

    const handleImageChange = (e, setImageFunction) => {
      const file = e.target.files[0];

      if (file) {
        const reader = new FileReader();

        reader.onload = () => {
          setImageFunction(reader.result);
        };

        reader.readAsDataURL(file);
      } else {
        // Display a placeholder image if no file is selected
        setImageFunction(placeholderimg);
      }
    };

  const handleAdSEdit = async (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    setLoading(true);
    try {
      const sendData = {
        ad: formDataObject,
      };

      // Pass the ad ID to updateAdsAsync if available
      const adId = petAd ? petAd.id : null;
      await dispatch(updateAdsAsync(sendData, adId));

      toast.success("Ad updated successfully");
    } catch (error) {
      // Handle errors
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Update form fields with data from the selectedPetAd when it changes
    if (petAd) {
      // Set form field values based on petAd data
    }
  }, [petAd]);

  const [model, setModel] = useState(false);
  const openModel = () => setModel(!model);

  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row>
            <Col lg={12}>
              <div
                className="bg-primary-subtle text-primary p-3"
                style={{ backgroundColor: "#A6652C", color: "#fff" }}
              >
                <h5 className="mb-0 fs-17">{t("Edit Ad!")}</h5>
              </div>
            </Col>
          </Row>
          <form
            ref={formRef}
            onSubmit={handleAdSEdit} // Change to your edit function
            className="job-post-form shadow mt-4"
            style={{ borderColor: "#A6652C" }}
          >
            <div
              className="job-post-content box-shadow-md rounded-3 p-4"
              style={{ backgroundColor: "#fff" }}
            >
              <Col lg={12}>
                <div className="mb-4">
                  <Label htmlFor="petName" className="form-label">
                    {t("pet_name_label")} *
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    id="jobtitle"
                    placeholder="Name"
                    name="name"
                    style={{ border: " 1px solid #A6652C", color: "#fff" }}
                    required
                  />
                </div>
              </Col>
              <Col lg={12}>
                <div className="mb-4">
                  <Label htmlFor="petDescription" className="form-label">
                    {t("pet_description_label")} *
                  </Label>
                  <textarea
                    className="form-control"
                    id="petDescription"
                    rows="10"
                    placeholder={t("pet_description_placeholder")}
                    name="description"
                    style={{ border: " 1px solid #A6652C", color: "#000" }}
                    required
                  ></textarea>
                </div>
              </Col>
              <Row className="row">
                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="petGender" className="form-label">
                      {t("pet_gender")}*
                    </Label>
                    <select
                      className="form-select form-select-lg mb-3"
                      aria-label="Large select example"
                      style={{ border: " 1px solid #A6652C", color: "#000" }}
                      name="gender"
                      required
                    >
                      <option selected>Female</option>
                      <option value="1">Male</option>
                    </select>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="petAge" className="form-label">
                      {t("petAge")}*
                    </Label>
                    <Input
                      type="number"
                      className="form-control"
                      id="petAge"
                      placeholder={t("pet_age_placeholder")}
                      name="age"
                      style={{ border: " 1px solid #A6652C", color: "#000" }}
                      required
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="petType" className="form-label">
                      {t("pettype")}*
                    </Label>
                    <select
                      className="form-select form-select-lg mb-3"
                      aria-label="Large select example"
                      style={{ border: " 1px solid #A6652C", color: "#000" }}
                      name="pet_type"
                      required
                    >
                      <option selected>{t("dogs")}</option>
                      <option value="1">{t("sheep")}</option>
                      <option value="2">{t("goats")}</option>
                      <option value="3">{t("parrots")}</option>
                      <option value="4">{t("cats")}</option>
                      <option value="5">{t("chickens")}</option>
                      <option value="6">{t("horses")}</option>
                      <option value="7">{t("cows")}</option>
                      <option value="8">{t("fish_and_turtles")}</option>
                      {/* <option value="9">Turtle</option> */}
                      <option value="10">{t("rabbits")}</option>
                      <option value="11">{t("ducks")}</option>
                      <option value="12">{t("squirrels")}</option>
                      <option value="13">{t("hamsters")}</option>
                      <option value="14">{t("pigeons")}</option>
                    </select>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mb-4">
                    <Label htmlFor="adType" className="form-label">
                      {t("ad_type_label")}*
                    </Label>
                    <select
                      className="form-select"
                      id="adType"
                      aria-label="Default select example"
                      name="ad_type"
                      style={{ border: " 1px solid #A6652C", color: "#000" }}
                      required
                    >
                      <option value="Missing">{t("ad_type_missing")}</option>
                      <option value="Temporary adoption">
                        {t("ad_type_temporary_adoption")}
                      </option>
                      <option value="Mating">{t("ad_type_mating")}</option>
                      <option value="Free rescue">
                        {t("ad_type_free_rescue")}
                      </option>
                      <option value="Sale">{t("ad_type_sale")}</option>
                      <option value="Adoption">{t("ad_type_adoption")}</option>
                    </select>
                  </div>
                </Col>
                <Col lg={6}>
                  {/* Price */}
                  <div className="mb-4">
                    <Label htmlFor="petPrice" className="form-label">
                      {t("pet_price_label")}*
                    </Label>
                    <Input
                      type="number"
                      className="form-control"
                      id="petPrice"
                      placeholder={t("pet_price_placeholder")}
                      name="price"
                      style={{ border: " 1px solid #A6652C", color: "#000" }}
                      required
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  {/* Main Image */}
                  <ImageUpload
                    label={t("mainImage")}
                    onChange={(files) => handleImageChange(files, setMainImage)}
                    previewImage={mainImage}
                  />
                </Col>

                <Col lg={4}>
                  {/* Other Image 1 */}
                  <ImageUpload
                    label={t("otherImage")}
                    onChange={(files) => handleImageChange(files, setMainImage)}
                    previewImage={mainImage}
                  />
                </Col>

                <Col lg={4}>
                  {/* Other Image 2 */}
                  <ImageUpload
                    label={t("otherImage")}
                    onChange={(files) => handleImageChange(files, setMainImage)}
                    previewImage={mainImage}
                  />
                </Col>

                <Col lg={4}>
                  {/* Other Image 3 */}
                  <ImageUpload
                    label={t("otherImage")}
                    onChange={(files) => handleImageChange(files, setMainImage)}
                    previewImage={mainImage}
                  />
                </Col>

                <Col lg={6}>
                  {/* City */}
                  <div className="mb-4">
                    <Label htmlFor="city" className="form-label">
                      {t("city_label*")}
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="city"
                      placeholder={t("city_placeholder")}
                      name="city"
                      style={{ border: " 1px solid #A6652C", color: "#000" }}
                      required
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  {/* Zip Code */}
                  <div className="mb-4">
                    <Label htmlFor="zipcode" className="form-label">
                      {t("zipcode__label")}
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="zipcode"
                      placeholder={t("zipcode_placeholder")}
                      name="zipcode"
                      style={{ border: " 1px solid #A6652C", color: "#000" }}
                    />
                  </div>
                </Col>
              </Row>
            </div>
            <Row>
              <Col
                lg={12}
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <button
                  style={{
                    color: "#8f4300",
                    background: "transparent",
                    border: "none",
                    borderRadius: "10px",
                    margin: "0 10px 10px 10px",
                  }}
                >
                  {t("previewAd")}
                </button>
              </Col>
            </Row>

            <Row>
              <Col
                lg={12}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Link onClick={openModel}>
                  <button
                    style={{
                      border: "none",
                      padding: "10px",
                      borderRadius: "10px",
                      margin: "0 10px 10px 10px",
                    }}
                    className="secondary-btn"
                  >
                    {t("cancel")}
                  </button>
                </Link>
                <button
                  style={{
                    borderRadius: "10px",
                    margin: "0 10px 10px 10px",
                  }}
                  className="primary-btn"
                >
                  {t("saveChanges")}
                </button>
              </Col>
            </Row>
            <Row>
              <>
                <div className="modal-dialog modal-dialog-centered">
                  <Modal
                    isOpen={model}
                    toggle={openModel}
                    centered
                    tabIndex="-1"
                  >
                    <ModalHeader
                      toggle={openModel}
                      style={{ border: "none", textAlign: "center" }}
                    ></ModalHeader>
                    <ModalBody style={{ textAlign: "center" }}>
                      {t("cancelMessage")}
                    </ModalBody>
                    <ModalFooter
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        border: "none",
                      }}
                    >
                      <button
                        style={{
                          color: "#000",
                          background: "#f5f5f5",
                          border: "none",
                          padding: "10px",
                          borderRadius: "10px",
                          margin: "0 10px 10px 10px",
                        }}
                      >
                        {t("goBack")}
                      </button>
                      <button
                        style={{
                          color: "#fff",
                          background: "#A6652C",
                          border: "none",
                          padding: "10px",
                          borderRadius: "10px",
                          margin: "0 10px 10px 10px",
                        }}
                      >
                        {t("understand")}
                      </button>
                    </ModalFooter>
                  </Modal>
                </div>
              </>
            </Row>
          </form>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default EditForm;
