import React, { useState } from "react";
import { Input, Form } from "reactstrap";
import { useTranslation } from "react-i18next";

const BlogCategory = () => {
  const [isChecked, setIsChecked] = useState(true);
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const { t } = useTranslation();

  const categoryTranslations = {
    sheep: t("sheep"),
    goats: t("goats"),
    parrots: t("parrots"),
    pigeons: t("pigeons"),
    cats: t("cats"),
    chickens: t("chickens"),
    apples: t("apples"),
    horses: t("horses"),
    dogs: t("dogs"),
    cows: t("cows"),
    fish_and_turtles: t("fish_and_turtles"),
    rabbits: t("rabbits"),
    ducks: t("ducks"),
    squirrels: t("squirrels"),
    hamsters: t("hamsters"),
  };

  return (
    <React.Fragment>
      <aside className="widget widget_search">
        <Form className="position-relative">
          <Input
            className="form-control"
            type="search"
            placeholder="Search..."
          />
          <button
            className="bg-transparent border-0 position-absolute top-50 end-0 translate-middle-y me-2"
            type="submit"
          >
            <span className="mdi mdi-magnify text-muted"></span>
          </button>
        </Form>
      </aside>
      <div className="mt-4 pt-2">
        <div className="sd-title">
          <h6 className="fs-16 mb-3">{t("categories")}</h6>
        </div>
        <div className="my-3">
          {Object.keys(categoryTranslations).map((category) => (
            <div className="form-check mb-2" key={category}>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id={`category-${category}`}
              />
              <label
                className="form-check-label ms-2"
                htmlFor={`category-${category}`}
              >
                {categoryTranslations[category]}
              </label>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default BlogCategory;
