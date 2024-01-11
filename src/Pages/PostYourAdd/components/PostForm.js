import { useTranslation } from "react-i18next";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Input, Label, Row } from "reactstrap";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import placeholderimg from "../../../assets/images/home/hero-image-1.jpg";
import ImageUpload from "./ImageUpload.js";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import "./postform.scss";
// Components
import { createAdsAsync } from "../../../store/reducers/ads.reducer";
import { countryOptions } from "../../../../src/commonComponents/options";

const PostForm = () => {
  const { t } = useTranslation();
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  // State for latitude and longitude
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  // Constants for Google Maps initialization
  const DEFAULT_LATITUDE = 0; // Set your initial latitude
  const DEFAULT_LONGITUDE = 0; // Set your initial longitude

  // code to handle the map
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBeBlcI_0OO_dK5bJKHSGKSfQUqDivb0Ro&libraries=places`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: DEFAULT_LATITUDE, lng: DEFAULT_LONGITUDE }, // Set initial map center.
        zoom: 12, // Set initial zoom level.
      });

      const input = document.createElement("input");
      input.type = "text";
      input.id = "locationInput";
      input.placeholder = "Search for a location";
      document.body.appendChild(input);

      const searchBox = new window.google.maps.places.SearchBox(input);
      map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(input);

      map.addListener("bounds_changed", () => {
        searchBox.setBounds(map.getBounds());
      });

      let marker;

      searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces();

        if (places.length === 0) {
          return;
        }

        const place = places[0];
        map.setCenter(place.geometry.location);

        if (marker) {
          marker.setMap(null);
        }

        marker = new window.google.maps.Marker({
          map,
          position: place.geometry.location,
        });

        const newLatitude = place.geometry.location.lat();
        const newLongitude = place.geometry.location.lng();

        setLatitude(newLatitude);
        setLongitude(newLongitude);
      });
    };

    document.head.appendChild(script);

    return () => {
      const input = document.getElementById("locationInput");
      if (input) {
        document.body.removeChild(input);
      }
    };
  }, []);

  const [mainImage, setMainImage] = useState(placeholderimg);
  //confirmation
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(!modal);

  const [model, setModel] = useState(false)
  const openModel = () => setModel(!model);

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
      setImageFunction("placeholder-image.jpg");
    }
  };

  const handleAdSCreate = async (event) => {
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
      await dispatch(createAdsAsync(sendData));
      toast.success("Ad created successfully");
      // navigate("/signin");
    } catch (error) {
      function displayErrorToasts(errors) {
        errors.forEach((error, index) => {
          toast.error(error, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000, // Adjust as needed
            closeButton: true,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            progress: undefined,
            toastId: index,
          });
        });
      }
      console.log("Error On Ad Form:", error?.response?.data?.error);
      displayErrorToasts(error?.response?.data?.error);
    } finally {
      setLoading(false);
    }
  };
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
                <h5 className="mb-0 fs-17">{t("post_ad_heading")}</h5>
              </div>
            </Col>
          </Row>
          <form
            ref={formRef}
            action="#"
            className="job-post-form shadow mt-4"
            style={{ borderColor: "#A6652C" }}
          >
            <div
              className="job-post-content box-shadow-md rounded-3 p-4"
              style={{ backgroundColor: "#fff", color: "#000" }}
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
                    style={{ border: " 1px solid #A6652C", color: "#000" }}
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
                    style={{ border: " 1px solid #A6652C", color: "#00" }}
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
                      placeholder={t("pet_gender")}
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
                      name="age"
                      style={{ border: " 1px solid #A6652C", color: "#000" }}
                      required
                      placeholder={t("petAge")}
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
                      placeholder={t("pettype ")}
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
                    label={t("otherImages")}
                    onChange={(files) => handleImageChange(files, setMainImage)}
                    previewImage={mainImage}
                  />
                </Col>

                <Col lg={4}>
                  {/* Other Image 2 */}
                  <ImageUpload
                    label={t("otherImages")}
                    onChange={(files) => handleImageChange(files, setMainImage)}
                    previewImage={mainImage}
                  />
                </Col>

                <Col lg={4}>
                  {/* Other Image 3 */}
                  <ImageUpload
                    label={t("otherImages")}
                    onChange={(files) => handleImageChange(files, setMainImage)}
                    previewImage={mainImage}
                  />
                </Col>

                <Col lg={6}>
                  {/* City */}
                  <div className="mb-4">
                    <Label htmlFor="city" className="form-label">
                      {t("city_label")} *
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
                      {t("zipcode_label")}
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
                <Col lg={12}>
                  <div
                    id="map"
                    style={{ height: "400px", width: "100%" }}
                  ></div>
                  <input type="hidden" name="latitude" value={latitude} />
                  <input type="hidden" name="longitude" value={longitude} />
                </Col>
              </Row>
            </div>
            <Row>
              <Col
                lg={12}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <button
                  style={{
                    color: "#DC9354",
                    background: "transparent",
                    padding: "10px",
                    borderRadius: "10px",
                    margin: "0 10px 10px 10px",
                    border: "none",
                  }}
                >
                  {t("saveasDraft")}
                </button>
                <button
                  style={{
                    color: "#00",
                    background: "#f8f8f8",
                    border: "none",
                    padding: "10px",
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
                      color: "#fff",
                      background: "#DC9354",
                      border: "none",
                      padding: "10px",
                      borderRadius: "10px",
                      margin: "0 10px 10px 10px",
                    }}
                  >
                    {t("postandpayLater")}
                  </button>
                </Link>
                <Link onClick={openModal}>
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
                    {t("postandpay")}
                  </button>
                </Link>
              </Col>
            </Row>
            <div>
              <div className="modal-dialog modal-dialog-centered">
                <Modal isOpen={modal} toggle={openModal} centered tabIndex="-1">
                  <ModalHeader
                    toggle={openModal}
                    style={{ border: "none", textAlign: "center" }}
                  >
                    {t("adposted")}
                  </ModalHeader>
                  <ModalBody style={{ textAlign: "center" }}>
                    {t("paidAdMessage")}
                  </ModalBody>
                  <ModalFooter
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      border: "none",
                    }}
                  >
                    <button
                      onClick={openModal}
                      style={{
                        color: "#000",
                        background: "#f5f5f5",
                        border: "none",
                        padding: "10px",
                        borderRadius: "10px",
                        margin: "0 10px 10px 10px",
                      }}
                      className="secondary-btn"
                    >
                      {t("edit")}
                    </button>
                    <button
                      onclick={openModal}
                      style={{
                        margin: "0 10px 10px 10px",
                      }}
                      className="primary-btn"
                    >
                      {t("Viewads")}
                    </button>
                  </ModalFooter>
                </Modal>
              </div>
            </div>

            <div>
              <div className="modal-dialog modal-dialog-centered">
                <Modal isOpen={model} toggle={openModel} centered tabIndex="-1">
                  <ModalHeader
                    toggle={openModel}
                    style={{ border: "none", textAlign: "center" }}
                  >
                   { t("adposted")}
                  </ModalHeader>
                  <ModalBody style={{ textAlign: "center" }}>
                    {t("notpaidadmessage")}
                  </ModalBody>
                  <ModalFooter
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      border: "none",
                    }}
                  >
                    <button
                      onClick={openModel}
                      style={{
                        color: "#000",
                        background: "#f5f5f5",
                        border: "none",
                        padding: "10px",
                        borderRadius: "10px",
                        margin: "0 10px 10px 10px",
                      }}
                      className="signin"
                    >
                      {t("manageads")}
                    </button>
                    <button
                      onclick={openModel}
                      style={{
                        color: "#fff",
                        background: "#A6652C",
                        border: "none",
                        padding: "10px",
                        borderRadius: "10px",
                        margin: "0 10px 10px 10px",
                      }}
                    >
                      {t("payforad")}
                    </button>
                  </ModalFooter>
                </Modal>
              </div>
            </div>
          </form>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default PostForm;
