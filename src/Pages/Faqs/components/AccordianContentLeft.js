import React, { useState } from "react";
import { Collapse } from "reactstrap";
import { useTranslation } from "react-i18next";

const AccordianContentLeft = () => {
  const [isCollapseFirst, setIsCollapseFirst] = useState(true);
  const toggleFirst = () => setIsCollapseFirst(!isCollapseFirst);

  const [isCollapseSecond, setIsCollapseSecond] = useState(false);
  const toggleSecond = () => setIsCollapseSecond(!isCollapseSecond);

  const { t } = useTranslation();

  return (
    <React.Fragment>
      <div className="accordion-item mt-4 border-0">
        <h2 className="accordion-header" id="buyingone">
          <button
            className="accordion-button"
            onClick={toggleFirst}
            type="button"
          >
            {t("how_much_advertising_fees")}
          </button>
        </h2>
        <Collapse isOpen={isCollapseFirst} id="buying-one">
          <div className="accordion-body">
            {t("missing")} <br />
            {t("temporary_adoption_fee")} <br />
            {t("marriage_fee")} <br />
            {t("free_rescue")} <br />
            {t("sale_fee")} <br />
            {t("adoption_fee")} <br />
          </div>
        </Collapse>
      </div>

      <div className="accordion-item mt-4 border-0">
        <h2 className="accordion-header" id="buyingtwo">
          <button
            className="accordion-button"
            onClick={toggleSecond}
            type="button"
          >
            {t("how_to_post_ad")}
          </button>
        </h2>
        <Collapse isOpen={isCollapseSecond} id="buying-two">
          <div className="accordion-body">
            {t("post_ad_instruction")}
          </div>
        </Collapse>
      </div>
    </React.Fragment>
  );
};

export default AccordianContentLeft;
