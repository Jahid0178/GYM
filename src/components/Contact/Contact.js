import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import "./Contact.css";
import mapImg from "../../images/contact/map.png";

const Contact = () => {
  return (
    <div>
      <div className="contact-content">
        <h2>Contact</h2>
      </div>
      <Container className="my-5">
        <Row>
          <Col lg={6} md={12} sm={12}>
            <div className="d-flex align-items-center justify-content-center my-2">
              <Form onSubmit={(e) => e.preventDefault()}>
                <Row>
                  <Col>
                    <Form.Control placeholder="First name" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Last name" />
                  </Col>
                </Row>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Example textarea</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12}>
            <img src={mapImg} alt="" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
