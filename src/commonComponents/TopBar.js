import React, { useState, useEffect } from "react";
import {
  Col,
  Container,
  Row,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOutAsync } from "../store/reducers/auth.reducer";

// Import flag images
import flagUs from "../assets/images/flags/us.jpg";
import flagAr from "../assets/images/flags/sudia.png";

import i18next from "i18next";
import { useTranslation } from "react-i18next";
const changeLang = (l) => {
  return () => {
    i18next.changeLanguage(l);
    localStorage.setItem('lang', l);
  };
};

const TopBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userCountry, setUserCountry] = useState("Loading...");

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const token = useSelector((state) => state.auth?.token);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSignOut = async () => {
    try {
      await dispatch(signOutAsync());
      toast.success("User sign out successfully");
      navigate("/signin");

    } catch (error) {
      console.log("Error Sign Up Form:", error);
      toast.error(error?.response?.data?.status?.message);
    } finally {
      setLoading(false);
    }
  }

  

  // Set "ar" as the default language
  const currentLanguage = localStorage.getItem('lang') || 'ar'; // Default to 'ar' if no language is set

  const languageFlags = {
    en: flagUs,
    ar: flagAr,
    // Add more languages and their flag images as needed
  };
const { t } = useTranslation();

  return (
    <React.Fragment>
      <div className="top-bar d-none d-md-block" style={{ zIndex: 1030 }}>
        <Container fluid className="custom-container">
          <Row className="g-0 align-items-center">
            <Col md={7}>
              <ul className="list-inline mb-0 text-center text-md-start">
                <li className="list-inline-item">
                  <p className="fs-13 mb-0">
                    {" "}
                    <i className="mdi mdi-map-marker"></i> {t('your_country')}:{" "}
                    <Link to="#" className="text-dark">
                      {userCountry}
                    </Link>
                  </p>
                </li>
              </ul>
            </Col>

            <Col md={5}>
              <ul className="list-inline mb-0 text-center text-md-end">
                {token?
                <li className="list-inline-item py-2 me-2 align-middle">
                  <Link to="/signin" onClick={handleSignOut} className="text-dark fw-medium fs-13">
                    <i className="uil uil-lock"></i>
                    Sign Out
                  </Link>
                </li>
                :
                <li className="list-inline-item py-2 me-2 align-middle">
                  <Link to="/signup" className="text-dark fw-medium fs-13">
                    <i className="uil uil-lock"></i>
                    {t("signup_sign_up")}
                  </Link>
                </li>
                }
                <li className="list-inline-item align-middle">
                  <Dropdown
                    isOpen={dropdownOpen}
                    toggle={toggle}
                    className="d-inline-block language-switch"
                  >
                    <DropdownToggle tag="button" type="button" className="btn">
                      <img src={languageFlags[currentLanguage]} alt="" height="16" />
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-end" end>
                      <DropdownItem
                        onClick={changeLang("ar")}
                        className={`dropdown-item notify-item language ${currentLanguage === 'ar' ? 'active' : ''}`}
                        data-lang="ar"
                      >
                        <img src={flagAr} alt="" className="me-1" height="12" />
                        <span className="align-middle">عربي</span>
                      </DropdownItem>
                      <DropdownItem
                        onClick={changeLang("en")}
                        className={`dropdown-item notify-item language ${currentLanguage === 'en' ? 'active' : ''}`}
                        data-lang="en"
                      >
                        <img src={flagUs} alt="" className="me-1" height="12" />
                        <span className="align-middle">English</span>
                      </DropdownItem>
                      {/* Add more languages and their corresponding dropdown items */}
                    </DropdownMenu>
                  </Dropdown>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default TopBar;
