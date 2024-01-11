import React from "react";
import About from "./components/About";
import Section from "./components/Section";
import Counter from "./components/Counter";
import Features from "./components/Features";
import Cta from "./components/Cta";
import CompanyTestimonal from "./components/CompanyTestimonal";

const AboutUs = () => {
  document.title = "About Us | Petshelpful";
  return (
    <React.Fragment>
      <Section />
      <About />
      <Counter />
      {/*<Features />
      <Cta />
  <CompanyTestimonal /> */}
    </React.Fragment>
  );
};

export default AboutUs;
