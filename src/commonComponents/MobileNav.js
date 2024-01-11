import React, { useState, useEffect } from "react";
import {
  Container,
  Collapse,
  NavbarToggler,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { Link, useNavigate } from "react-router-dom";
import withRouter from "./withRouter";
import { useSelector, useDispatch } from "react-redux";

//import images
// Import flag images
import flagUs from "../assets/images/flags/us.jpg";
import flagAr from "../assets/images/flags/sudia.png";

import i18next from "i18next";
import { useTranslation } from "react-i18next";


import lightLogo from "../assets/images/main-logo.png";
import profileImage from "../assets/images/profile.jpg";
import { signOutAsync } from "../store/reducers/auth.reducer";
import { toast } from "react-toastify";

const changeLang = (l) => {
  return () => {
    i18next.changeLanguage(l);
    localStorage.setItem('lang', l);
  };
};
const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const token = useSelector((state) => state.auth?.token);

  //Notification Dropdown
  const [notification, setNotification] = useState(false);
  const dropDownnotification = () => setNotification((prevState) => !prevState);

  //user Profile Dropdown
  const [userProfile, setUserProfile] = useState(false);
  const dropDownuserprofile = () => setUserProfile((prevState) => !prevState);

  // Lanuage Drpdown
  const [dropDownlang, setDropDownlang] = useState(false);
  const dropDownlangswitcher = () => setDropDownlang((prevState) => !prevState);

  //scroll navbar
  const [navClass, setnavClass] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", scrollNavigation, true);
  });

  function scrollNavigation() {
    var scrollup = window.pageYOffset;
    if (scrollup > 0) {
      setnavClass("nav-sticky");
    } else {
      setnavClass("");
    }
  }

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

  //menu activation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const pathName = props.router.location.pathname;
    var matchingMenuItem = null;
    var ul = document.getElementById("navbarCollapse");
    var items = ul.getElementsByTagName("a");
    removeActivation(items);
    for (var i = 0; i < items.length; ++i) {
      if (pathName === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem);
    }
  }, [props.router.location.pathname]);

  const removeActivation = (items) => {
    for (var i = 0; i < items.length; ++i) {
      var item = items[i];
      const parent = items[i].parentElement;
      if (item && item.classList.contains("active")) {
        item.classList.remove("active");
      }
      if (parent) {
        if (parent.classList.contains("active")) {
          parent.classList.remove("active");
        }
      }
    }
  };

  function activateParentDropdown(item) {
    item.classList.add("active");
    const parent = item.parentElement.parentElement.parentElement;

    if (parent) {
      parent.classList.add("active"); // li
      const parent2 = parent.parentElement;
      parent2.classList.add("active"); // li
      const parent3 = parent2.parentElement;
      if (parent3) {
        parent3.classList.add("active"); // li
        const parent4 = parent3.parentElement;
        if (parent4) {
          parent4.classList.add("active"); // li
          const parent5 = parent4.parentElement;
          if (parent5) {
            parent5.classList.add("active"); // li
            const parent6 = parent5.parentElement;
            if (parent6) {
              parent6.classList.add("active"); // li
            }
          }
        }
      }
    }
    return false;
  }



 const [dropdownOpen, setDropdownOpen] = useState(false);


 
  // Set "ar" as the default language
  const currentLanguage = localStorage.getItem('lang') || 'ar'; // Default to 'ar' if no language is set

  const languageFlags = {
    en: flagUs,
    ar: flagAr,
    // Add more languages and their flag images as needed
  };

const {t} = useTranslation();
  const toggle2 = () => setDropdownOpen((prevState) => !prevState);
  
  return (
    <React.Fragment>
      <nav
        className={
          "navbar navbar-expand-lg d-md-none p-0 mobile-nav " + navClass
        }
        id="navigation"
      >
        <Container fluid className="custom-container">
          <Link className="navbar-brand text-dark fw-bold me-auto" to="/">
            <img src={lightLogo} height="70" alt="" className="logo-dark" />
            {/* <img src={lightLogo} height="22" alt="" className="logo-light" /> */}
          </Link>
          <ul className="header-menu list-inline d-flex align-items-center mb-0">
            <Link to="/postyourad" className="btn btn-primary w-100">
              {t("post_your_ad")}
            </Link>
          </ul>
        </Container>
        <Container fluid className="custom-container">
          <div>
            <NavbarToggler
              className="me-3"
              type="button"
              onClick={() => toggle()}
            >
              <i className="mdi mdi-menu"></i>
            </NavbarToggler>
          </div>
          <Collapse
            isOpen={isOpen}
            className="navbar-collapse"
            id="navbarCollapse"
          >
            <ul className="navbar-nav mx-auto navbar-center">
              <NavItem>
                <button>
                  <Link className="nav-link" to="/signup">
                    signup
                  </Link>
                </button>
              </NavItem>
              <NavItem>
                <button>
                  <Link className="nav-link" to="/signin">
                    Signin
                  </Link>
                </button>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/">
                  {t("home")}
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/about">
                  {t("about")}
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/blogs">
                  {t("blog")}
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/contact">
                  {t("contact")}
                </Link>
              </NavItem>
              <NavItem>
                {token ? (
                  <Link
                    to="/signin"
                    onClick={handleSignOut}
                    className="nav-link"
                  >
                    {t("logout")}
                  </Link>
                ) : (
                  <Link to="/signup" className="nav-link">
                    {t("signup_sign_up")}
                  </Link>
                )}
              </NavItem>
            </ul>
          </Collapse>

          <ul className="header-menu list-inline d-flex align-items-center mb-0">
            <Link className=" list-inline-item  me-4" to="/chat">
              <div className="header-item noti-icon position-relative">
                <i className="mdi mdi-message-processing fs-22"></i>
                <div className="count position-absolute">3</div>
              </div>
            </Link>

            <li className="list-inline-item align-middle">
              <Dropdown
                isOpen={dropdownOpen}
                toggle={toggle2}
                className="d-inline-block language-switch"
              >
                <DropdownToggle tag="button" type="button" className="btn">
                  <img
                    src={languageFlags[currentLanguage]}
                    alt=""
                    height="16"
                  />
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-end" end>
                  <DropdownItem
                    onClick={changeLang("ar")}
                    className={`dropdown-item notify-item language ${
                      currentLanguage === "ar" ? "active" : ""
                    }`}
                    data-lang="ar"
                  >
                    <img src={flagAr} alt="" className="me-1" height="12" />
                    <span className="align-middle">عربي</span>
                  </DropdownItem>
                  <DropdownItem
                    onClick={changeLang("en")}
                    className={`dropdown-item notify-item language ${
                      currentLanguage === "en" ? "active" : ""
                    }`}
                    data-lang="en"
                  >
                    <img src={flagUs} alt="" className="me-1" height="12" />
                    <span className="align-middle">English</span>
                  </DropdownItem>
                  {/* Add more languages and their corresponding dropdown items */}
                </DropdownMenu>
              </Dropdown>
            </li>

            <Dropdown
              onClick={() => setUserProfile(!userProfile)}
              isOpen={userProfile}
              toggle={dropDownuserprofile}
              className="list-inline-item"
            >
              <DropdownToggle
                to="#"
                className="header-item"
                id="userdropdown"
                type="button"
                tag="a"
                aria-expanded="false"
              >
                <img
                  src={profileImage}
                  alt="mdo"
                  width="35"
                  height="35"
                  className="rounded-circle me-1"
                />{" "}
                {/* <span className="d-none d-md-inline-block fw-medium">
                Hi, Jennifer
              </span> */}
              </DropdownToggle>
              <DropdownMenu
                className="dropdown-menu-end"
                aria-labelledby="userdropdown"
                end
              >
                <li>
                  <Link className="dropdown-item" to="/manageads">
                    {t("manage_ads")}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/favoriteads">
                    {t("favorite_ads")}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/myprofile">
                    {t("my_profile")}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/signout">
                    {t("logout")}
                  </Link>
                </li>
              </DropdownMenu>
            </Dropdown>
          </ul>
        </Container>
      </nav>
    </React.Fragment>
  );
};

export default withRouter(NavBar);
