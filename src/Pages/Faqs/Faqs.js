import React from "react";
import Section from "./components/Section";
import FaqContent from "./components/FaqContent";
import Testimonial from "./components/Testimonial";

const Faqs = () => {
  document.title = "FAQs | Petshelpful";
  return (
    <React.Fragment>
      
      <Section />
      <Testimonial/>
      <FaqContent />
    </React.Fragment>
  );
};

export default Faqs;
