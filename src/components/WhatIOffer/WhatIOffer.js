import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./WhatIOffer.css";
import offerImg1 from "../../images/offer/offer1.webp";
import offerImg2 from "../../images/offer/offer2.webp";
import offerImg3 from "../../images/offer/offer3.webp";

const WhatIOffer = () => {
  return (
    <div className="offer-container p-5">
      <Container>
        <h1 className="offer-heading py-3 text-center text-white mb-3">
          What I Offer
        </h1>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }} className="card-container">
              <Card.Img variant="top" src={offerImg1} className="offer-img" />
              <Card.Body className="offer-content text-center">
                <Card.Title className="fs-3">Body Building</Card.Title>
                <Card.Text>
                  You’ll look at graphs and charts in Task One, how to approach
                  the task
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }} className="card-container">
              <Card.Img variant="top" src={offerImg2} className="offer-img" />
              <Card.Body className="offer-content text-center">
                <Card.Title className="fs-3">Muscle Gain</Card.Title>
                <Card.Text>
                  You’ll look at graphs and charts in Task One, how to approach
                  the task
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }} className="card-container">
              <Card.Img variant="top" src={offerImg3} className="offer-img" />
              <Card.Body className="offer-content text-center">
                <Card.Title className="fs-3">Weight Loss</Card.Title>
                <Card.Text>
                  You’ll look at graphs and charts in Task One, how to approach
                  the task
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhatIOffer;
