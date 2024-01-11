import React, { useState } from "react";
import { Collapse } from "reactstrap";
import { useTranslation } from "react-i18next";

const AccordianContentRight = () => {
  const [isCollapseFourth, setIsCollapseFourth] = useState(true);
  const toggleFourth = () => setIsCollapseFourth(!isCollapseFourth);

  const [isCollapseFifth, setIsCollapseFifth] = useState(false);
  const toggleFifth = () => setIsCollapseFifth(!isCollapseFifth);

  const { t } = useTranslation();

  return (
    <React.Fragment>
      <div className="accordion-item mt-4 border-0">
        <h2 className="accordion-header" id="generalfour">
          <button
            className="accordion-button"
            onClick={toggleFourth}
            type="button"
          >
            {t("modify_or_delete_ad")}
          </button>
        </h2>
        <Collapse isOpen={isCollapseFourth} id="general-four">
          <div className="accordion-body">
            {t("modify_or_delete_ad_answer")}
          </div>
        </Collapse>
      </div>

      <div className="accordion-item mt-4 border-0">
        <h2 className="accordion-header" id="generalfive">
          <button
            className="accordion-button"
            onClick={toggleFifth}
            type="button"
          >
            {t("types_of_ads")}
          </button>
        </h2>
        <Collapse isOpen={isCollapseFifth} id="general-five">
          <div className="accordion-body">
            {t("types_of_ads_list")}
          </div>
        </Collapse>
      </div>
    </React.Fragment>
  );
};

export default AccordianContentRight;
