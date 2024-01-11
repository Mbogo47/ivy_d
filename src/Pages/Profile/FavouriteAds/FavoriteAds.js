import React from "react";
import { Container } from "reactstrap";
import Selected from "./components/Selected";
import BookmarkJobListing from "./components/FavoriteAdsList";
import Section from "./components/Section";

const FavoriteAds = () => {
  document.title =
    "Favorite Ads | Petshelpful";
  return (
    <React.Fragment>
      <Section />
      <section className="section">
        <Container>
          <Selected />
          <BookmarkJobListing />
        </Container>
      </section>
    </React.Fragment>
  );
};

export default FavoriteAds;
