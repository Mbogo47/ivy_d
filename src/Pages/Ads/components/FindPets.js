import React, { useState, useEffect, useRef } from "react";
import { FaAngleUp, FaAngleDown, FaSearch } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
import "../../../assets/scss/heroswiper.scss";
// import { useLanguage } from "../../../store/reducers/languageContext.js";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Input,
  Collapse
} from "reactstrap";
import FilterModalComponent from "./FilterModalComponent";
import { useTranslation } from "react-i18next";

const FindPets = () => {
  const [dropdown, setDropdown] = useState(false);
  const [dropdownAge, setDropDownAge] = useState(false)
  // const { language } = useLanguage();

  const toggle = () => setDropdown((prevState) => !prevState);
  const [isOpen, setIsOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const { t } = useTranslation();
  const modalRef = useRef();
  const openModal = () => {
    setIsOpen(true);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      const isDropdownClicked =
        dropdownRef.current && dropdownRef.current.contains(event.target);
      if (!isDropdownClicked && isModalOpen) {
        // Close the modal if clicked outside the dropdown
        setIsModalOpen(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [isModalOpen]);

  const toggleDropdown = () => setDropdown((prevState) => !prevState);
  const toggleModal = () => setIsModalOpen((prevState) => !prevState);

  const handleSearch = () => {
    console.log("Filtered Pets:");
  };

  return (
    <>
      {/* Desktop version */}
      <div className="desktop find-pets">
        <div className="find-pets-container">
          <p className="find-pets">{t("findpets")}</p>
          <div className="search-bar">
            <div className="filler-job-form">
              <div className="search-container">
                <FaSearch className="search-icon" />
                <Input
                  type="search"
                  className="form-control filter-input-box"
                  id="exampleFormControlInput1"
                  placeholder={t("search")}
                />
              </div>
            </div>

            <Dropdown isOpen={dropdown} toggle={toggle}>
              <UncontrolledDropdown className="me-2" direction="up">
                <DropdownToggle className="dropdown-style">
                  {t("Typeofad")} <FaAngleUp />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>{t("missing")}</DropdownItem>
                  <DropdownItem>{t("temporary_adoption_fee")}</DropdownItem>
                  <DropdownItem>{t("marriage_fee")}</DropdownItem>
                  <DropdownItem>{t("free_rescue")}</DropdownItem>
                  <DropdownItem>{t("sale_fee")}</DropdownItem>
                  <DropdownItem>{t("adoption_fee")}</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Dropdown>
            <Dropdown isOpen={dropdown} toggle={toggle}>
              <UncontrolledDropdown className="me-2" direction="up">
                <DropdownToggle className="dropdown-style">
                  {t("gender")}
                  <FaAngleUp />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>{t("female")}</DropdownItem>
                  <DropdownItem>{t("male")}</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Dropdown>
            <Dropdown isOpen={dropdown} toggle={toggle}>
              <UncontrolledDropdown className="me-2" direction="up">
                <DropdownToggle className="dropdown-style">
                  {t("age")}
                  <FaAngleUp />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>{t("0-3_years")}</DropdownItem>
                  <DropdownItem>{t("3-6_years")}</DropdownItem>
                  <DropdownItem>{t("more_than_6_years")}</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Dropdown>
            <Dropdown isOpen={dropdown} toggle={toggle}>
              <UncontrolledDropdown className="me-2" direction="up">
                <DropdownToggle className="dropdown-style">
                  {t("pettype")}
                  <FaAngleUp />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>{t("dogs")}</DropdownItem>
                  <DropdownItem>{t("sheep")}</DropdownItem>
                  <DropdownItem>{t("goats")}</DropdownItem>
                  <DropdownItem>{t("parrots")}</DropdownItem>
                  <DropdownItem>{t("cats")}</DropdownItem>
                  <DropdownItem>{t("chickens")}</DropdownItem>
                  <DropdownItem>{t("horses")}</DropdownItem>
                  <DropdownItem>{t("cows")}</DropdownItem>
                  <DropdownItem>{t("fish_and_turtles")}</DropdownItem>
                  <DropdownItem>{t("rabbits")}</DropdownItem>
                  <DropdownItem>{t("ducks")}</DropdownItem>
                  <DropdownItem>{t("squirrels")}</DropdownItem>
                  <DropdownItem>{t("hamsters")}</DropdownItem>
                  <DropdownItem>{t("pigeons")}</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Dropdown>
            <Dropdown isOpen={dropdown} toggle={toggle}>
              <UncontrolledDropdown className="me-2" direction="up">
                <DropdownToggle className="dropdown-style">
                  {t("price")} <FaAngleUp />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Header</DropdownItem>
                  <DropdownItem>Action</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Dropdown>
            <button className="search-button" onClick={handleSearch}>
              {t("entertext")}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE VERSION */}
      <div className="mobile find-pets">
        {/* Mobile version */}
        <div className="find-pets-container">
          <ul>
            {/* <Collapse isOpen={isFilterOpen} vertical> */}
              <Dropdown isOpen={dropdown} toggle={toggle}>
                <UncontrolledDropdown className="me-2" direction="down">
                  <DropdownToggle className="dropdown-style">
                    Gender
                    <FaAngleDown />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <Input type="checkbox" />
                      Male
                    </DropdownItem>
                    <DropdownItem>
                      <Input type="checkbox" />
                      Female
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Dropdown>
              <Dropdown isOpen={dropdown} toggle={toggle}>
                <UncontrolledDropdown className="me-2" direction="down">
                  <DropdownToggle className="dropdown-style">
                    Age
                    <FaAngleDown />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <Input type="checkbox" />
                      0-3 years
                    </DropdownItem>
                    <DropdownItem>
                      <Input type="checkbox" />
                      3-6 years
                    </DropdownItem>
                    <DropdownItem>
                      <Input type="checkbox" />
                      more than 6 years
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Dropdown>
              <Dropdown isOpen={dropdown} toggle={toggle}>
                <UncontrolledDropdown className="me-2" direction="down">
                  <DropdownToggle className="dropdown-style">
                    Price
                    <FaAngleDown />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <Input
                        type="range"
                        min="50"
                        max="5000"
                        className="slider"
                      />
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Dropdown>
            {/* </Collapse> */}
            <IoFilter
              style={{ fontSize: "2rem", color: "#a6652c" }}
              onClick={toggleFilter}
            />
            <li>
              <div className="search-container">
                <FaSearch className="search-icon" />
                <Input
                  type="search"
                  className="form-control filter-input-box"
                  id="exampleFormControlInput1"
                  placeholder="Search"
                />
              </div>
            </li>
            <li>
              <Dropdown isOpen={dropdown} toggle={toggle}>
                <UncontrolledDropdown className="me-2" direction="up">
                  <DropdownToggle className="dropdown-style">
                    {t("pettype")}
                    <FaAngleUp />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>{t("dog")}</DropdownItem>
                    <DropdownItem>{t("Sheep")}</DropdownItem>
                    <DropdownItem>{t("Goat")}</DropdownItem>
                    <DropdownItem>{t("Parrot")}</DropdownItem>
                    <DropdownItem>{t("cat")}</DropdownItem>
                    <DropdownItem>{t("chicken")}</DropdownItem>
                    <DropdownItem>{t("horse")}</DropdownItem>
                    <DropdownItem>{t("cow")}</DropdownItem>
                    <DropdownItem>{t("fishandturtle")}</DropdownItem>
                    <DropdownItem>{t("rabbit")}</DropdownItem>
                    <DropdownItem>{t("duck")}</DropdownItem>
                    <DropdownItem>{t("squirrel")}</DropdownItem>
                    <DropdownItem>{t("hamster")}</DropdownItem>
                    <DropdownItem>{t("pigeon")}</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Dropdown>
            </li>
          </ul>
          <div>
            <Dropdown isOpen={dropdown} toggle={toggle}>
              <UncontrolledDropdown className="me-2" direction="up">
                <DropdownToggle className="dropdown-style">
                  {t("adtype")} <FaAngleUp />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>{t("missing")}</DropdownItem>
                  <DropdownItem>{t("temporaryAdoption")}</DropdownItem>
                  <DropdownItem>{t("mating")}</DropdownItem>
                  <DropdownItem>{t("rescue")}</DropdownItem>
                  <DropdownItem>{t("sale")}</DropdownItem>
                  <DropdownItem>{t("adoption")}</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Dropdown>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindPets;
