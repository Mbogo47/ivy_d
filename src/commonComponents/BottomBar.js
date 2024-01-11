import React, { useState } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  Dropdown,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "../assets/scss/header.scss";
import { FaAngleDown } from "react-icons/fa";

import { useTranslation } from "react-i18next";

const BottomBar = () => {
  const { t } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <>
      <div className="desktop-bottom-bar">
        <ul>
          <li>{t("sheep")}</li>
          <li>{t("goats")}</li>
          <li>{t("parrots")}</li>
          <li>{t("cats")}</li>
          <li>{t("chickens")}</li>
          <li>{t("horses")}</li>
          <li>{t("dogs")}</li>
          <li>{t("cows")}</li>
          <li>{t("fish_and_turtles")}</li>
          <li>{t("rabbits")}</li>
          <li>{t("ducks")}</li>
          <li>{t("squirrels")}</li>
          <li>{t("hamsters")}</li>
          <li>{t("pigeons")}</li>
        </ul>
      </div>
      <div className="mobile-bottom-bar">
        <ul>
          <li>{t("sheep")}</li>
          <li>{t("goats")}</li>
          <li>{t("parrots")}</li>
          <li className="more-pets-dropdown">
            <UncontrolledDropdown className="me-2" direction="down">
              <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle
                  style={{
                    background: "transparent",
                    border: "none",
                    boxShadow: "none",
                    color: "#000",
                  }}
                >
                  {t("morepets")}
                  <FaAngleDown />
                </DropdownToggle>
                <DropdownMenu>
                  <li>{t("cats")}</li>
                  <li>{t("chickens")}</li>
                  <li>{t("horses")}</li>
                  <li>{t("dogs")}</li>
                  <li>{t("cows")}</li>
                  <li>{t("fish_and_turtles")}</li>
                  <li>{t("rabbits")}</li>
                  <li>{t("ducks")}</li>
                  <li>{t("squirrels")}</li>
                  <li>{t("hamsters")}</li>
                  <li>{t("pigeons")}</li>
                </DropdownMenu>
              </Dropdown>
            </UncontrolledDropdown>
          </li>
        </ul>
      </div>
    </>
  );
};

export default BottomBar;
