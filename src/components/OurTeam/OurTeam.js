import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./OurTeam.css";
import team1 from "../../images/team/team1.jpg";
import team2 from "../../images/team/team2.jpg";
import team3 from "../../images/team/team3.jpg";
import team4 from "../../images/team/team4.jpg";

const OurTeam = () => {
  return (
    <div className="our-team-container">
      <Container fluid>
        <h2 className="fs-1 text-center py-3 text-white">Our Team</h2>
        <Row className="d-flex justify-content-center py-3">
          <Col lg={3} md={6} sm={12}>
            <Card
              style={{ maxWidth: "300px", width: "100%" }}
              className="m-1 border bg-transparent team-card"
            >
              <Card.Img variant="top" src={team1} />
              <Card.Body className="text-center text-white">
                <Card.Title>ISAAC HELLYER</Card.Title>
                <Card.Text>Personal Trainer</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <Card
              style={{ maxWidth: "300px", width: "100%" }}
              className="m-1 border bg-transparent team-card"
            >
              <Card.Img variant="top" src={team2} />
              <Card.Body className="text-center text-white">
                <Card.Title>SOPHIE ROMILLY</Card.Title>
                <Card.Text>Personal Trainer</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <Card
              style={{ maxWidth: "300px", width: "100%" }}
              className="m-1 border bg-transparent team-card"
            >
              <Card.Img variant="top" src={team3} />
              <Card.Body className="text-center text-white">
                <Card.Title>AARON BAKER</Card.Title>
                <Card.Text>Personal Trainer</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <Card
              style={{ maxWidth: "300px", width: "100%" }}
              className="m-1 border bg-transparent team-card"
            >
              <Card.Img variant="top" src={team4} />
              <Card.Body className="text-center text-white">
                <Card.Title>MARIA SULIS</Card.Title>
                <Card.Text>Personal Trainer</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurTeam;
