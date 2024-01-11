import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";

//Import Images
import { Link } from "react-router-dom";
import AdSwiper from "./AdSwiper";

const JobDetailsDescription = () => {
  return (
    <React.Fragment>
      <Card className="job-detail overflow-hidden">
        <div>
         
          <AdSwiper/>
        </div>
        <CardBody className="p-4">
          <div>
            <Row>
              <Col md={8}>
                <h5 className="mb-1">Pet Name</h5>
                <ul className="list-inline text-muted mb-0">
                  <li className="list-inline-item">
                    <i className="mdi mdi-account"></i> Owner Name
                  </li>
                
                </ul>
              </Col>
              <Col lg={4}>
                <ul className="list-inline mb-0 text-lg-end mt-3 mt-lg-0">
                  <li className="list-inline-item">
                    <div className="favorite-icon">
                      <Link to="#">
                        <i className="uil uil-heart-alt"></i>
                      </Link>
                    </div>
                  </li>
                  
                </ul>
              </Col>
            </Row>
          </div>

          {/* <div className="mt-4">
            <Row className="g-2">
              <Col lg={3}>
                <div className="border rounded-start p-3">
                  <p className="text-muted mb-0 fs-13">Experience</p>
                  <p className="fw-medium fs-15 mb-0">Minimum 1 Year</p>
                </div>
              </Col>
              <Col lg={3}>
                <div className="border p-3">
                  <p className="text-muted fs-13 mb-0">Employee type</p>
                  <p className="fw-medium mb-0">Full Time</p>
                </div>
              </Col>
              <Col lg={3}>
                <div className="border p-3">
                  <p className="text-muted fs-13 mb-0">Position</p>
                  <p className="fw-medium mb-0">Senior</p>
                </div>
              </Col>
              <Col lg={3}>
                <div className="border rounded-end p-3">
                  <p className="text-muted fs-13 mb-0">Offer Salary</p>
                  <p className="fw-medium mb-0">$2150/ Month</p>
                </div>
              </Col>
            </Row>
          </div> */}

          <div className="mt-4">
            <h5 className="mb-3">Ad Description</h5>
            <div className="job-detail-desc">
              <p className="text-muted mb-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
              </p>
            </div>
          </div>

          

          

       

          <div className="mt-4 pt-3">
            <ul className="list-inline mb-0">
              <li className="list-inline-item mt-1">Share this Ad:</li>
              <li className="list-inline-item mt-1">
                <Link to="#" className="btn btn-primary btn-hover">
                  <i className="uil uil-facebook-f"></i> Facebook
                </Link>
              </li>
              <li className="list-inline-item mt-1">
                <Link to="#" className="btn btn-danger btn-hover">
                  <i className="uil uil-google"></i> Google+
                </Link>
              </li>
              <li className="list-inline-item mt-1">
                <Link to="#" className="btn btn-success btn-hover">
                  <i className="uil uil-linkedin-alt"></i> linkedin
                </Link>
              </li>
            </ul>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default JobDetailsDescription;
