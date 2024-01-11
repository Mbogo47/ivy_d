import React, { useState, useEffect } from "react";
import {
  Container,
  Collapse,
  NavbarToggler,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";

import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import withRouter from "./withRouter";
import lightLogo from "../assets/images/main-logo.png";
// import userImage2 from "../assets/images/user/img-02.jpg";
// import jobImage4 from "../assets/images/featured-job/img-04.png";
// import userImage1 from "../assets/images/user/img-01.jpg";
// import jobImage from "../assets/images/featured-job/img-01.png";
import profileImage from "../assets/images/profile.jpg";
import { signOutAsync } from "../store/reducers/auth.reducer";
import { useTranslation, initReactI18next } from "react-i18next";
import { GetUserProfileAsync } from "../../src/store/reducers/auth.reducer";

const NavBar = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const token = useSelector((state) => state.auth?.token);
  const [loading, setLoading] = useState(false);
  const [profileData, setProfileData] = useState({});

  //Notification Dropdown
  const [notification, setNotification] = useState(false);
  const dropDownnotification = () => setNotification((prevState) => !prevState);

  //user Profile Dropdown
  const [userProfile, setUserProfile] = useState(false);
  const dropDownuserprofile = () => setUserProfile((prevState) => !prevState);

  //scroll navbar
  const [navClass, setnavClass] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", scrollNavigation, true);
  });



  useEffect(() => {
    if (token) {
      getProfileDat()
    }
 }, []);

 const getProfileDat = async (event) => {
   setLoading(true);
   try {
     const response = await dispatch(GetUserProfileAsync());
     console.log(response)
     setProfileData(response)
   } catch (error) {
     toast.error(error?.response?.data?.error);
   } finally {
     setLoading(false);
   }
 }

  function scrollNavigation() {
    var scrollup = window.pageYOffset;
    if (scrollup > 0) {
      setnavClass("nav-sticky");
    } else {
      setnavClass("");
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

  const handleLogout = async () => {
    await dispatch(signOutAsync());
    navigate("/signout");
    setProfileData({})
  };

  const { t } = useTranslation();
  return (
    <React.Fragment>
      <nav
        className={"navbar navbar-expand-lg  p-0 d-none d-md-block " + navClass}
        id="navigation"
      >
        <Container fluid className="custom-container">
          <Link className="navbar-brand text-dark fw-bold me-auto" to="/">
            <img src={lightLogo} height="70" alt="" className="logo-dark" />
            {/* <img src={lightLogo} height="22" alt="" className="logo-light" /> */}
          </Link>
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
            </ul>
          </Collapse>

          <ul className="header-menu list-inline d-flex align-items-center mb-0">
            {token &&
              <Link className=" list-inline-item  me-4" to="/chat">
                <div className="header-item noti-icon position-relative">
                  <i className="mdi mdi-message-processing fs-22"></i>
                  <div className="count position-absolute">3</div>
                </div>
              </Link>
            }
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
                { profileData?.profile_image ?
                                (<img src={profileData?.profile_image ? profileData.profile_image : profileImage} alt="mdo"
                                width="35"
                                height="35"
                                className="rounded-circle me-1"/>) : <i className="uil uil-user fs-18 rounded-circle me-1"></i> }
              </DropdownToggle>
              {token &&
                <DropdownMenu
                  className="dropdown-menu-end"
                  aria-labelledby="userdropdown"
                  end
                >
                  <li>
                    <Link className="dropdown-item" to="/">
                      {t("manage_ads")}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      {t("favorite_ads")}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/myprofile">
                      {t("my_profile")}
                    </Link>
                  </li>

                  <li>
                    <button
                      type="button"
                      className="dropdown-item"
                      to=""
                      onClick={handleLogout}
                    >
                      {t("logout")}
                    </button>
                  </li>
                </DropdownMenu>
              }
            </Dropdown>
            {token &&
              <Link to="/postyourad" className="btn btn-primary w-100">
                {t("post_your_ad")}
              </Link>
            }
          </ul>
        </Container>
      </nav>
    </React.Fragment>
  );
};

export default withRouter(NavBar);
