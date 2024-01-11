import React from "react";
import Section from "./components/Section";
import PrivacyAndPolicyPage from "./components/TermAndConditionsPage";

const TermAndConditions = () => {
  document.title =
    "Term & Conditions | Petshelpful";
  return (
    <React.Fragment>
      <Section />
      <PrivacyAndPolicyPage />
    </React.Fragment>
  );
};
export default TermAndConditions;
