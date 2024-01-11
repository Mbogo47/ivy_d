import React from "react";
import Select from "react-select";
import { useTranslation } from "react-i18next";
const Type = () => {
  const { t } = useTranslation();

  const options = [
    { label: t("sheep"), value: t("sheep") },
    { label: t("goats"), value: t("goats") },
    { label: t("parrots"), value: t("parrots") },
    { label: t("pigeons"), value: t("pigeons") },
    { label: t("cats"), value: t("cats") },
    { label: t("chickens"), value: t("chickens") },
    { label: t("apples"), value: t("apples") },
    { label: t("horses"), value: t("horses") },
    { label: t("dogs"), value: t("dogs") },
    { label: t("cows"), value: t("cows") },
    { label: t("fish_and_turtles"), value: t("fish_and_turtles") },
    { label: t("rabbits"), value: t("rabbits") },
    { label: t("ducks"), value: t("ducks") },
    { label: t("squirrels"), value: t("squirrels") },
    { label: t("hamsters"), value: t("hamsters") }
  ];
  const colourStyles = {
    control: (styles) => ({
      ...styles,
      border: 0,
      boxShadow: "none",
      padding: "12px 0 12px 40px",
      margin: "-16px -6px 0 -52px",
      borderRadius: "0"
    })
  };
  return (
    <React.Fragment>
      <Select
        options={options}
        styles={colourStyles}
        className="selectForm__inner"
        data-trigger
        defaultValue={{ label: t("pet_type"), value: 0 }}
        name="choices-single-categories"
        id="choices-single-categories"
        aria-label="Default select example"
      />
    </React.Fragment>
  );
};

export default Type;
