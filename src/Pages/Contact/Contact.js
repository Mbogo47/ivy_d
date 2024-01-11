import React from "react";
import Section from "./components/Section";
import ContactContent from "./components/ContactContent";

const Contact = () => {
  document.title = "Contact | Petshelpful";
  return (
    <React.Fragment>
      <Section />
      <ContactContent />
    </React.Fragment>
  );
};

export default Contact;
