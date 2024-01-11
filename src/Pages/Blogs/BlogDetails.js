import React, { useTransition } from "react";
import { Container, Col, Row } from "reactstrap";
import BlogTitle from "./components/BlogTitle";
import BlogSwiper from "./components/BlogSwiper";
import BlogDescription from "./components/BlogDescription";
import BlogComments from "./components/BlogComments";
import BlogForm from "./components/BlogForm";
import RelatedBlogs from "./components/RelatedBlogs";
import BlogCategory from "./components/BlogCategory";
import PopularBlogs from "./components/PopularBlogs";
import Tags from "./components/Tags";
import SocialConnect from "./components/SocialConnect";

const BlogDetails = () => {
  document.title = "Blog Details ";

  return (
    <React.Fragment>
      <BlogTitle />
      <section className="section">
        <Container>
          <Row>
            <Col lg={8}>
              <div className="blog-post">
                <BlogSwiper />
                <BlogDescription />
                <BlogComments />
                <BlogForm />
                <RelatedBlogs />
              </div>
            </Col>
            <Col lg={4} md={5}>
              <div className="sidebar ms-lg-4 ps-lg-4 mt-5 mt-lg-0">
                <BlogCategory />
                <PopularBlogs />
                {/* <TextWidget /> */}
                {/* <Archives /> */}
                <Tags />
                
                {/* <SocialConnect /> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default BlogDetails;
