import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Collapse, Input, Label } from "reactstrap";
import { useTranslation } from "react-i18next";
const Sidebar = () => {
  const [toggleFirst, setToggleFirst] = useState(true);
  const [toggleSecond, setToggleSecond] = useState(true);
  // const [toggleThird, setToggleThird] = useState(true);
  const [toggleFourth, setToggleFourth] = useState(true);
  const [toggleFifth, setToggleFifth] = useState(true);
  const [value, setValue] = React.useState(50);
  //CheckBox
  const [isChecked, setIsChecked] = useState(true);
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const [isDateChecked, setIsDateChecked] = useState(true);
  const handleDateOnChange = () => {
    setIsDateChecked(!isDateChecked);
  };
const {t} =useTranslation();

  return (
    <React.Fragment>
      <Col lg={3}>
        <div className="side-bar mt-5 mt-lg-0">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="locationOne">
                <Button
                  className="accordion-button"
                  onClick={(e) => {
                    e.preventDefault();
                    setToggleFirst(!toggleFirst);
                  }}
                  role="button"
                  id="collapseExample"
                >
                  {t('location')}
                </Button>
              </h2>
              <Collapse isOpen={toggleFirst}>
                <div className="accordion-body">
                  <div className="side-title">
                    <div className="mb-3">
                      <form className="position-relative">
                        <Input
                          className="form-control"
                          type="search"
                          placeholder="Search..."
                        />
                        <button
                          className="bg-transparent border-0 position-absolute top-50 end-0 translate-middle-y me-2"
                          type="submit"
                        >
                          <span className="mdi mdi-magnify text-muted"></span>
                        </button>
                      </form>
                    </div>
                    <div className="area-range slidecontainer">
                      <div className="form-label mb-4">
                        {t("range")}: {value}.00 {t("miles")}
                        <span
                          className="example-val mt-2"
                          id="slider1-span"
                        ></span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="100"
                        value={value}
                        onChange={({ target: { value } }) => setValue(value)}
                        className={`slider ${
                          value > 50 ? "slider-50" : "slider-0"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </Collapse>
            </div>

            <div className="accordion-item mt-4">
              <h2 className="accordion-header" id="experienceOne">
                <Button
                  className="accordion-button"
                  onClick={(e) => {
                    e.preventDefault();
                    setToggleSecond(!toggleSecond);
                  }}
                  role="button"
                  id="collapseExample"
                >
                  {t('pet_age')}
                </Button>
              </h2>
              <Collapse isOpen={toggleSecond}>
                <div className="accordion-body">
                  <div className="side-title">
                    <div className="form-check mt-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked1"
                      />
                      <label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="flexCheckChecked1"
                      >
                        {t("any")}
                      </label>
                    </div>
                    <div className="form-check mt-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked2"
                        checked={isChecked}
                        onChange={handleOnChange}
                      />
                      <label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="flexCheckChecked2"
                      >
                        {t("0-3_years")}
                      </label>
                    </div>
                    <div className="form-check mt-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked3"
                      />
                      <label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="flexCheckChecked3"
                      >
                        {t("3-6_years")}
                      </label>
                    </div>
                    <div className="form-check mt-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked4"
                      />
                      <label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="flexCheckChecked4"
                      >
                        {t("more_than_6_years")}
                      </label>
                    </div>
                  </div>
                </div>
              </Collapse>
            </div>

            {/* <div className="accordion-item mt-3">
              <h2 className="accordion-header" id="jobType">
                <Button
                  className="accordion-button"
                  onClick={(e) => {
                    e.preventDefault();
                    setToggleThird(!toggleThird);
                  }}
                  role="button"
                  id="collapseExample"
                >
                  Type of Pets
                </Button>
              </h2>
              <Collapse isOpen={toggleThird}>
                <div className="accordion-body">
                  <div className="side-title">
                    <div className="form-check mt-2">
                      <Input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault6"
                        defaultChecked
                      />
                      <label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="flexRadioDefault6"
                      >
                        Freelance
                      </label>
                    </div>
                    <div className="form-check mt-2">
                      <Input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                      />
                      <label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="flexRadioDefault2"
                      >
                        Full Time
                      </label>
                    </div>
                    <div className="form-check mt-2">
                      <Input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault3"
                      />
                      <label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="flexRadioDefault3"
                      >
                        Internship
                      </label>
                    </div>
                    <div className="form-check mt-2">
                      <Input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault4"
                      />
                      <label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="flexRadioDefault4"
                      >
                        Part Time
                      </label>
                    </div>
                  </div>
                </div>
              </Collapse>
            </div> */}

            <div className="accordion-item mt-3">
              <h2 className="accordion-header" id="datePosted">
                <Button
                  className="accordion-button"
                  onClick={(e) => {
                    e.preventDefault();
                    setToggleFourth(!toggleFourth);
                  }}
                  role="button"
                  id="collapseExample"
                >
                 {t('date_posted')}
                </Button>
              </h2>
              <Collapse isOpen={toggleFourth}>
                <div className="accordion-body">
                  <div className="side-title form-check-all">
                    <div className="form-check">
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        id="checkAll"
                        value=""
                      />
                      <Label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="checkAll"
                      >
                        {t("all")}
                      </Label>
                    </div>
                    <div className="form-check mt-2">
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        name="datePosted"
                        value="last"
                        id="flexCheckChecked5"
                        checked={isDateChecked}
                        onChange={handleDateOnChange}
                      />
                      <Label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="flexCheckChecked5"
                      >
                        {t("last_hour")}
                      </Label>
                    </div>
                    <div className="form-check mt-2">
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        name="datePosted"
                        value="last"
                        id="flexCheckChecked6"
                      />
                      <Label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="flexCheckChecked6"
                      >
                        {t("last_24_hours")}
                      </Label>
                    </div>
                    <div className="form-check mt-2">
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        name="datePosted"
                        value="last"
                        id="flexCheckChecked7"
                      />
                      <Label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="flexCheckChecked7"
                      >
                        {t("last_7_days")}
                      </Label>
                    </div>
                    <div className="form-check mt-2">
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        name="datePosted"
                        value="last"
                        id="flexCheckChecked8"
                      />
                      <Label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="flexCheckChecked8"
                      >
                       {t("last_14_days")}
                      </Label>
                    </div>
                    <div className="form-check mt-2">
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        name="datePosted"
                        value="last"
                        id="flexCheckChecked9"
                      />
                      <Label
                        className="form-check-label ms-2 text-muted"
                        htmlFor="flexCheckChecked9"
                      >
                        {t("last_30_days")}
                      </Label>
                    </div>
                  </div>
                </div>
              </Collapse>
            </div>

            <div className="accordion-item mt-3">
              <h2 className="accordion-header" id="tagCloud">
                <Button
                  className="accordion-button"
                  onClick={(e) => {
                    e.preventDefault();
                    setToggleFifth(!toggleFifth);
                  }}
                  role="button"
                  id="collapseExample"
                >
                  {t("tags_cloud")}
                </Button>
              </h2>
              <Collapse isOpen={toggleFifth}>
                <div className="accordion-body">
                  <div className="side-title">
                    <Link to="#" className="badge tag-cloud fs-13 mt-2">
                      Dogs
                    </Link>
                    <Link to="#" className="badge tag-cloud fs-13 mt-2">
                      Cats
                    </Link>
                    <Link to="#" className="badge tag-cloud fs-13 mt-2">
                      Cows
                    </Link>
                    <Link to="#" className="badge tag-cloud fs-13 mt-2">
                      Goats
                    </Link>
                  </div>
                </div>
              </Collapse>
            </div>
          </div>
        </div>
      </Col>
    </React.Fragment>
  );
};

export default Sidebar;
