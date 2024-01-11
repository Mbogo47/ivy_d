import React, { useState, useEffect } from "react";
import {
  Collapse,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Input,
} from "reactstrap";
import { FaAngleDown } from "react-icons/fa";

const FilterModalComponent = () => {
  const [dropdown, setDropdown] = useState(false);
  const toggle = () => setDropdown((prevState) => !prevState);

  return (
    <div>
      <Collapse horizontal>
        <Dropdown isOpen={dropdown} toggle={toggle}>
          <UncontrolledDropdown className="me-2" direction="up">
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
      </Collapse>
    </div>
  );
};

export default FilterModalComponent;
