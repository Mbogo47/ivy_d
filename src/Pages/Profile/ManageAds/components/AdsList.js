import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Modal, ModalBody, Row } from "reactstrap";


import Pagination from "./Pagination";

//Import Images

import adImage1 from "../../../../assets/images/pet-ad.jpg";
import { useTranslation } from "react-i18next";

const JobListing = () => {
  //Delete Modal
  const [modal, setModal] = useState(false);

  const openModal = () => setModal(!modal);
  const {t}= useTranslation();
 
  const petAdList = [
    {
      id: 1,
      name: "Buddy",
      description: "Friendly and energetic dog.",
      gender: "Male",
      age: 3,
      pet_type: "Dog",
      ad_type: "Adoption",
      price: 50,
      city: "Los Angeles",
      zipcode: "90001",
      latitude: 34.0522,
      longitude: -118.2437,
      mainImage:
        "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/20/7902031/1.jpg",
      otherImages: [
        "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/20/7902031/1.jpg",
        "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/20/7902031/1.jpg",
        "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/20/7902031/1.jpg",
      ],
    },
    {
      id: 2,
      name: "Whiskers",
      description: "Cuddly and playful cat.",
      gender: "Female",
      age: 2,
      pet_type: "Cat",
      ad_type: "Sale",
      price: 75,
      city: "New York",
      zipcode: "10001",
      latitude: 40.7128,
      longitude: -74.006,
      mainImage:
        "https://asherkids.co.ke/wp-content/uploads/2020/09/warm-romper.jpeg",
      otherImages: [
        "https://asherkids.co.ke/wp-content/uploads/2020/09/warm-romper.jpeg",
        "https://asherkids.co.ke/wp-content/uploads/2020/09/warm-romper.jpeg",
        "https://asherkids.co.ke/wp-content/uploads/2020/09/warm-romper.jpeg",
      ],
    },
    {
      id: 3,
      name: "Rocky",
      description: "Adventurous and loving hamster.",
      gender: "Male",
      age: 1,
      pet_type: "Hamster",
      ad_type: "Adoption",
      price: 20,
      city: "Chicago",
      zipcode: "60601",
      latitude: 41.8781,
      longitude: -87.6298,
      mainImage:
        "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/63/586465/1.jpg?9630",
      otherImages: [
        "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/63/586465/1.jpg?9630",
        "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/63/586465/1.jpg?9630",
        "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/63/586465/1.jpg?9630",
      ],
    },
    {
      id: 4,
      name: "Tweety",
      description: "Chirpy and colorful parrot.",
      gender: "Male",
      age: 5,
      pet_type: "Parrot",
      ad_type: "Free rescue",
      price: 0,
      city: "San Francisco",
      zipcode: "94105",
      latitude: 37.7749,
      longitude: -122.4194,
      mainImage:
        "https://pictures-kenya.jijistatic.com/40196155_NjIwLTkzMC0zZGRkZWNmYTE4LTE.webp",
      otherImages: [
        "https://pictures-kenya.jijistatic.com/40196155_NjIwLTkzMC0zZGRkZWNmYTE4LTE.webp",
        "https://pictures-kenya.jijistatic.com/40196155_NjIwLTkzMC0zZGRkZWNmYTE4LTE.webp",
        "https://pictures-kenya.jijistatic.com/40196155_NjIwLTkzMC0zZGRkZWNmYTE4LTE.webp",
      ],
    },
    {
      id: 5,
      name: "Snowball",
      description: "Fluffy and adorable bunny.",
      gender: "Female",
      age: 1,
      pet_type: "Rabbit",
      ad_type: "Adoption",
      price: 30,
      city: "Miami",
      zipcode: "33101",
      latitude: 25.7617,
      longitude: -80.1918,
      mainImage:
        "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/32/846103/1.jpg",
      otherImages: [
        "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/32/846103/1.jpg",
        "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/32/846103/1.jpg",
        "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/32/846103/1.jpg",
      ],
    },
  ];
  return (
    <React.Fragment>
      <Row>
        <Col lg={12}>
          {petAdList.map((petAdDetail, key) => (
            <Card className="job-box card mt-4" key={key}>
              <CardBody className="p-4">
                <Row className="align-items-center">
                  <Col md={2}>
                    <div className="text-center mb-4 mb-md-0">
                      <img
                        src={petAdDetail.mainImage}
                        alt=""
                        className="img-fluid rounded-3"
                        style={{ height: "95px" }}
                      />
                    </div>
                  </Col>

                  <Col md={3}>
                    <div className="mb-2 mb-md-0">
                      <h5 className="fs-18 mb-0">
                        <Link to="/AdDetails" className="text-dark">
                          {petAdDetail.name}
                        </Link>
                      </h5>
                      <p className="text-muted fs-14 mb-0">
                        {petAdDetail.ad_type}
                      </p>
                    </div>
                  </Col>

                  <Col md={3}>
                    <div className="d-flex mb-2">
                      <div className="flex-shrink-0">
                        <i className="mdi mdi-map-marker text-primary me-1"></i>
                      </div>
                      <p className="text-muted mb-0">{petAdDetail.city}</p>
                    </div>
                  </Col>

                  <Col md={2}>
                    <div className="d-flex mb-0">
                      <div className="flex-shrink-0">
                        <i className="uil uil-wallet text-primary me-1"></i>
                      </div>
                      <p className="text-muted mb-0">{petAdDetail.price}</p>
                    </div>
                  </Col>

                  <Col md={2} className="align-self-center">
                    <ul className="list-inline mt-3 mb-0">
                      <li
                        className="list-inline-item"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Edit"
                      >
                        <Link
                          to={`/edit/${petAdDetail.id}`}
                          className="avatar-sm bg-success-subtle text-success d-inline-block text-center rounded-circle fs-18"
                        >
                          <i className="uil uil-edit"></i>
                        </Link>
                      </li>
                      <li
                        className="list-inline-item"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Delete"
                      >
                        <Link
                          onClick={openModal}
                          to="#"
                          className="avatar-sm bg-danger-subtle text-danger d-inline-block text-center rounded-circle fs-18"
                        >
                          <i className="uil uil-trash-alt"></i>
                        </Link>
                      </li>
                    </ul>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col md={12}>
                    <p className="text-muted fs-14">
                      {petAdDetail.description}
                    </p>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col md={12}>
                    <Link to="/AdDetails" className="btn btn-primary btn-sm">
                      View Details
                    </Link>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          ))}
        </Col>
        <Pagination />
      </Row>

      <div
        className="modal fade"
        id="deleteModal"
        tabIndex="-1"
        aria-labelledby="deleteModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <Modal isOpen={modal} toggle={openModal} centered tabIndex="-1">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                {t("delete_ad")}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={openModal}
              ></button>
            </div>
            <ModalBody>
              <div>
                <h6 className="text-danger">
                  <i className="uil uil-exclamation-triangle"></i>
                  {t("delete_ad_subtitle")}
                </h6>
                <p className="text-muted">{t("delete_ad_text")}</p>
              </div>
            </ModalBody>
            <div className="modal-footer">
              <button
                type="button"
                onClick={openModal}
                className="btn btn-primary btn-sm"
              >
                {t("cancel")}
              </button>
              <button type="button" className="btn btn-danger btn-sm">
                {t("yes_delete")}
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </React.Fragment>
  );
};

export default JobListing;
