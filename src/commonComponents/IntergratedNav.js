// IntegratedNavbar.js
import React, { useState, useEffect, useRef } from "react";
import withRouter from "./withRouter";
import lightLogo from "../assets/images/main-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleDown, FaHome } from "react-icons/fa";
import "../assets/scss/header.scss";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { signOutAsync } from "../store/reducers/auth.reducer";
import { GetUserProfileAsync } from "../../src/store/reducers/auth.reducer";
// import { useLanguage } from "../store/reducers/languageContext.js";
import {toast} from "react-toastify"
import i18next from "i18next";
import { useTranslation } from "react-i18next";
const changeLang = (l) => {
  return () => {
    i18next.changeLanguage(l);
    localStorage.setItem('lang', l);
  }
}

const IntegratedNavbar = () => {
const [isBarsMenuOpen, setBarsMenuOpen] = useState(false);

  const toggleBarsMenu = () => {
    setBarsMenuOpen(!isBarsMenuOpen);
  };

   const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => setIsOpen(!isOpen);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const currentLanguage = localStorage.getItem('lang') || "ar"; // Default to 'ar' if no language is set

   const {t} = useTranslation();
  const [userCountry, setUserCountry] = useState("Loading...");
  const countryFlagContainerRef = useRef();

  useEffect(() => {
    // Fetch user's IP address information
    fetch("https://ipinfo.io?token=05eab31960567f")
      .then((response) => response.json())
      .then((data) => {
        const countryCode = data.country || "Unknown";
        setUserCountry(countryCode);

        // Update the flag dynamically
        if (countryFlagContainerRef.current) {
          const flagUrl = `https://flagsapi.com/${countryCode}/flat/32.png`;
          countryFlagContainerRef.current.innerHTML = `<img src="${flagUrl}" alt="${countryCode} Flag"/>`;
        }
      })
      .catch((error) => {
        console.error("Error fetching IP address information:", error);
        setUserCountry("Unknown");
      });
  }, []);

  return (
    <>
      <Navbar className="mobile-navbar">
        <div>
          <span ref={countryFlagContainerRef}></span>
          <span> </span>
          <span>{t("your_country")}</span>
        </div>
        <div>
          <a href="/" className="navbar-brand">
            <img src={lightLogo} alt="" />
          </a>
        </div>
        <NavbarToggler onClick={toggleMenu} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle
                  style={{
                    background: "transparent",
                    border: "none",
                    boxShadow: "none",
                    color: "#000",
                  }}
                >
                  
                  {t("languages")}
                  <FaAngleDown />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                    onClick={changeLang("ar")}
                    className={`dropdown-item notify-item language ${
                      currentLanguage === "ar" ? "active" : ""
                    }`}
                    data-lang="ar"
                  >
                    <span className="align-middle">عربي</span>
                  </DropdownItem>
                  <DropdownItem
                    onClick={changeLang("en")}
                    className={`dropdown-item notify-item language ${
                      currentLanguage === "en" ? "active" : ""
                    }`}
                    data-lang="en"
                  >
                    <span className="align-middle">English</span>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavItem>
            <NavItem>
              <button className="signup">
                <NavLink href="/signup">
                  <span>{t("signin_sign_up")}</span>
                </NavLink>
              </button>
            </NavItem>
            <NavItem>
              <button className="signin">
                <NavLink href="/signin">{t("signin_button")}</NavLink>
              </button>
            </NavItem>
            <NavItem>
              <NavLink href="/">{t("home")}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">{t("about")}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/blogs">{t("blog")}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">{t("contact")}</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      <nav className="desktop-navbar">
        <div>
          <ul className="quick-links">
            <li className="nav-items">
              <span ref={countryFlagContainerRef}></span>
              <span>Your Country</span>
            </li>

            <li>
              <Link to="/about">{t("about")}</Link>
            </li>
            <li>
              <Link to="/blogs">{t("blog")}</Link>
            </li>
            <li>
              <Link to="/contact">{t("contact")}</Link>
            </li>
          </ul>
        </div>
        <div>
          <a href="/" className="navbar-brand">
            <img src={lightLogo} alt="" />
          </a>
        </div>
        <div>
          <ul className="auth">
            <li>
              <Link to="/">
                <FaHome />
              </Link>
            </li>
            <li>
              <button className="signin">
                <Link to="/signin">{t("signin_button")}</Link>
              </button>
            </li>
            <li>
              <button className="signup">
                <Link to="/signup">{t("signin_sign_up")}</Link>
              </button>
            </li>
            <li>
              <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle
                  style={{
                    background: "transparent",
                    border: "none",
                    boxShadow: "none",
                    color: "#000",
                  }}
                >
                  Language
                  <FaAngleDown />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                    onClick={() => changeLang("ar")}
                    className={`dropdown-item notify-item language ${
                      currentLanguage === "ar" ? "active" : ""
                    }`}
                    data-lang="ar"
                  >
                    <span className="align-middle">عربي</span>
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => changeLang("en")}
                    className={`dropdown-item notify-item language ${
                      currentLanguage === "en" ? "active" : ""
                    }`}
                    data-lang="en"
                  >
                    <span className="align-middle">English</span>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default withRouter(IntegratedNavbar);