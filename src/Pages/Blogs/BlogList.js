import React from "react";
import { Container, Row, Col } from "reactstrap";
import PageTitle from "./components/PageTitle";
import BlogCard from "./components/BlogCard";
import BlogCategory from "./components/BlogCategory";
// import Archives from "../../Blog/BlogGrid/Archives";
import Tags from "./components/Tags";
import SocialConnect from "./components/SocialConnect";

const BlogGrid = () => {
  document.title = "Blogs | Petshelpful";

  return (
    <React.Fragment>
      <PageTitle />
      <section className="section">
        <Container>
          <Row>
            <Col lg={8} md={7}>
              <div className="blog-post">
                <BlogCard />
              </div>
            </Col>
            <Col lg={4} md={5}>
              <div className="sidebar ms-lg-4 ps-lg-4 mt-5 mt-lg-0">
                <BlogCategory />
                <Tags />
                {/*<SocialConnect />*/}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default BlogGrid;
