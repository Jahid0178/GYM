import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./Pricing.css";

const Pricing = () => {
  const tick = <FontAwesomeIcon icon={faCheck} />;
  return (
    <div className="pricing-container p-5">
      <h2 className="py-5 text-center pricing-title">Pricing</h2>
      <Row>
        <Col lg={4} md={12} sm={12} className="my-2">
          <Card className="card-container">
            <Card.Body className="d-flex align-items-center">
              <div className="text-white">
                <Card.Title className="fs-1">6 Month</Card.Title>
                <Card.Title className="fs-3">
                  $ 30/ M <span>(Single Class)</span>
                </Card.Title>
                <Card.Text>
                  <ul>
                    <li>
                      <span>{tick}</span> Free Riding
                    </li>
                    <li>
                      <span>{tick}</span> Unlimited Equipments
                    </li>
                    <li>
                      <span>{tick}</span> Personal Trainer
                    </li>
                    <li>
                      <span>{tick}</span> Weight Losing Classes
                    </li>
                    <li>
                      <span>{tick}</span> Month To Month
                    </li>
                  </ul>
                  <Button className="btn btn-warning">Join Now</Button>
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={12} sm={12} className="my-2">
          <Card className="card-container">
            <Card.Body className="d-flex align-items-center">
              <div className="text-white">
                <Card.Title className="fs-1">6 Month</Card.Title>
                <Card.Title className="fs-3">
                  $ 30/ M <span>(Single Class)</span>
                </Card.Title>
                <Card.Text>
                  <ul>
                    <li>
                      <span>{tick}</span> Free Riding
                    </li>
                    <li>
                      <span>{tick}</span> Unlimited Equipments
                    </li>
                    <li>
                      <span>{tick}</span> Personal Trainer
                    </li>
                    <li>
                      <span>{tick}</span> Weight Losing Classes
                    </li>
                    <li>
                      <span>{tick}</span> Month To Month
                    </li>
                  </ul>
                  <Button className="btn btn-warning">Join Now</Button>
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={12} sm={12}>
          <Card className="card-container">
            <Card.Body className="d-flex align-items-center">
              <div className="text-white">
                <Card.Title className="fs-1">6 Month</Card.Title>
                <Card.Title className="fs-3">
                  $ 30/ M <span>(Single Class)</span>
                </Card.Title>
                <Card.Text>
                  <ul>
                    <li>
                      <span>{tick}</span> Free Riding
                    </li>
                    <li>
                      <span>{tick}</span> Unlimited Equipments
                    </li>
                    <li>
                      <span>{tick}</span> Personal Trainer
                    </li>
                    <li>
                      <span>{tick}</span> Weight Losing Classes
                    </li>
                    <li>
                      <span>{tick}</span> Month To Month
                    </li>
                  </ul>
                  <Button className="btn btn-warning">Join Now</Button>
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Pricing;
