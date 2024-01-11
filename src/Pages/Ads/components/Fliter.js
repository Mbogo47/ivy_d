import React, { useState } from "react";
import { Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Input, Row } from "reactstrap";
import CountryOptions from "./CountryOptions";
import Type from "./Type";
import { useTranslation } from "react-i18next";

const Fliter = () => {
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState({search_query: '', country_options: '', pet_type: ''});

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  console.log('the value of state------------------', searchValue);
  return (
    <React.Fragment>
      <div className="job-list-header">
        <Form action="#">
          <Row className="g-2">
            <Col lg={3} md={6}>
              <div className="filler-job-form">
                <i className="uil uil-search"></i>
                <Input
                  type="search"
                  className="form-control filter-input-box"
                  id="exampleFormControlInput1"
                  placeholder="Search for goods .. "
                  style={{ marginTop: "-10px" }}
                  onChange={handleInputChange}
                />
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="filler-job-form">
                <i className="uil uil-location-point"></i>
                <CountryOptions setSearchValue={setSearchValue} />
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="filler-job-form">
                {/* <i className="uil uil-clipboard-notes"></i> */}
                <i className="uil uil-exchange"></i>
                <Type />
              </div>
            </Col>
            <Col lg={3} md={6}>
              <Link to="#" className="btn btn-primary w-100">
                <i className="uil uil-filter"></i>  {t('filter')}
              </Link>
            </Col>
          </Row>
        </Form>
      </div>
    </React.Fragment>
  );
};

export default Fliter;
