import React from "react";
import { Card, CardGroup, Container } from "react-bootstrap";
import "./LeadTrainer.css";
import LeadTrainer1 from "../../images/trainer/lead-trainer1.jpg";
import LeadTrainer2 from "../../images/trainer/lead-trainer2.jpg";
import LeadTrainer3 from "../../images/trainer/lead-trainer3.jpg";

const LeadTrainer = () => {
  return (
    <div>
      <div className="trainer-banner">
        <h2 className="text-white fs-1">
          Our <span className="short-text"> Trainer</span>
        </h2>
      </div>
      <Container>
        <div className="text-center">
          <h1 className="py-3">
            Lead <span className="short-text">Trainer</span>
          </h1>
          <p className="py-3">
            World is committed to making participation in the event a harassment
            free experience for everyone, regardless of level of experience.
          </p>
        </div>
        <CardGroup className="my-3">
          <Card>
            <Card.Img variant="top" src={LeadTrainer1} />
            <Card.Body className="text-white text-center">
              <Card.Title>JHON STATHAM</Card.Title>
              <Card.Text>Trainer</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={LeadTrainer2} />
            <Card.Body className="text-white text-center">
              <Card.Title>DAVID WILLIAM</Card.Title>
              <Card.Text>Trainer</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={LeadTrainer3} />
            <Card.Body className="text-white text-center">
              <Card.Title>ROBERT DANY</Card.Title>
              <Card.Text>Trainer</Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
};

export default LeadTrainer;
