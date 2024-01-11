import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Tags = () => {
  const {t} = useTranslation();
  const tags = [
    {
      id: 1,
      tagName: "Fashion"
    },
    {
      id: 2,
      tagName: "Jobs"
    },
    {
      id: 3,
      tagName: "Business"
    },
    {
      id: 4,
      tagName: "Corporate"
    },
    {
      id: 5,
      tagName: "E-commerce"
    },
    {
      id: 6,
      tagName: "Agency"
    },
    {
      id: 7,
      tagName: "Responsive"
    }
  ];
  return (
    <React.Fragment>
      <div className="mt-4 pt-2">
        <div className="sd-title">
          <h6 className="fs-16 mb-3">{t("latest_tags")}</h6>
        </div>
        <div className="tagcloud mt-3 d-flex flex-wrap align-items-start gap-1 ">
          {tags.map((tagsDetails, key) => (
            <Link className="badge tag-cloud fs-12 mt-2" to="#" key={key}>
              {tagsDetails.tagName}
            </Link>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Tags;
