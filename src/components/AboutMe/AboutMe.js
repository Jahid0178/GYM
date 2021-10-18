import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./AboutMe.css";
import aboutMe from "../../images/about/about-me.webp";

const AboutMe = () => {
  return (
    <div className="about-me-container py-3">
      <Container fluid>
        <Row>
          <Col
            lg={6}
            md={12}
            sm={12}
            className="d-flex justify-content-center align-items-center"
          >
            <img
              style={{ width: 600 }}
              src={aboutMe}
              alt=""
              className="img-fluid m-3"
            />
          </Col>
          <Col className="d-flex align-items-center" lg={6} md={12} sm={12}>
            <div>
              <h1 className="about-me-heading d-inline px-2 rounded">
                About Me
              </h1>
              <p className="mt-3 text-white">
                You’ll look at graphs and charts in Task One, how to approach
                the task and the language needed for a successful answer. You’ll
                examine Task Two questions and learn how to plan, write and
                check academic essays.
              </p>
              <p className="text-white">
                Task One, how to approach the task and the language needed for a
                successful answer. You’ll examine Task Two questions and learn
                how to plan, write and check academic essays.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutMe;
