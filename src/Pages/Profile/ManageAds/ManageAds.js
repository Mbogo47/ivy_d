import React, {useState} from "react";
import { Container } from "reactstrap";
import AdsList from "./components/AdsList";
import Section from "./components/Section";
import Selected from "./components/Selected";
import AdPreviewnotpaid from "../../PostYourAdd/components/AdPreviewnotpaid.js";
import AdPreviewpaid from "../../PostYourAdd/components/AdPreviewpaid.js";
import {
  UncontrolledDropdown,
  DropdownToggle,
  Dropdown,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { FaAngleUp } from "react-icons/fa";
import "../../PostYourAdd/components/postform.scss";

const ManageAds = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const toggle2 = () => setDropdownOpen2((prevState) => !prevState);
  document.title = "Manage Ads | Petshelpful";
  return (
    <React.Fragment>
      <p className="title">My Ads</p>
      <div className="status">
        <UncontrolledDropdown className="me-2" direction="up">
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle
              style={{
                background: "transparent",
                border: "none",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                color: "#000",
              }}
            >
              Newest <FaAngleUp />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Last Week</DropdownItem>
              <DropdownItem>Last Month</DropdownItem>
              <DropdownItem>Last 3 Months</DropdownItem>
              <DropdownItem>Last 6 Months</DropdownItem>
              <DropdownItem>Last year</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </UncontrolledDropdown>
        <UncontrolledDropdown className="me-2" direction="up">
          <Dropdown isOpen={dropdownOpen2} toggle={toggle2}>
            <DropdownToggle
              style={{
                background: "transparent",
                border: "none",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                color: "#000",
              }}
            >
              Published
              <FaAngleUp />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Published</DropdownItem>
              <DropdownItem>Drafts</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </UncontrolledDropdown>
        <button className="search-button">Filter</button>
      </div>
      {/* <Section />
      <section className="section">
        <Container>
          <Selected />
          <AdsList />
        </Container>
      </section> */}
      <div className="preview">
        <AdPreviewnotpaid />
        <AdPreviewpaid />
      </div>
    </React.Fragment>
  );
};

export default ManageAds;
