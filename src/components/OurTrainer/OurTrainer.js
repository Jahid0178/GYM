import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./OurTrainer.css";
import trainer1 from "../../images/trainer/trainer1.jpg";
import trainer2 from "../../images/trainer/trainer2.jpg";
import trainer3 from "../../images/trainer/trainer3.jpg";
import trainer4 from "../../images/trainer/trainer4.jpg";
import trainer5 from "../../images/trainer/trainer5.jpg";
import trainer6 from "../../images/trainer/trainer6.jpg";
import trainer7 from "../../images/trainer/trainer7.jpg";
import trainer8 from "../../images/trainer/trainer8.jpg";

const OurTrainer = () => {
  return (
    <div className="py-3">
      <Container>
        <div className="text-center">
          <h2>
            Our <span className="short-text">Trainers</span>
          </h2>
          <p className="my-5">
            World is committed to making participation in the event a harassment
            free experience for everyone, regardless of level of experience.
          </p>
        </div>
        <div>
          <Row>
            <Col lg={3} md={6} sm={12}>
              <div className="c-container my-2 text-center ">
                <div>
                  <img src={trainer1} alt="" />
                </div>
                <div>
                  <h3>JHON STATHAM</h3>
                  <p>Lead Trainer</p>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="c-container my-2 text-center ">
                <div>
                  <img src={trainer2} alt="" />
                </div>
                <div>
                  <h3>ANA MARIE</h3>
                  <p>Trainer</p>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="c-container my-2 text-center ">
                <div>
                  <img src={trainer3} alt="" />
                </div>
                <div>
                  <h3>ROBERT DANY</h3>
                  <p>Lead Trainer</p>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="c-container my-2 text-center ">
                <div>
                  <img src={trainer4} alt="" />
                </div>
                <div>
                  <h3>ANI LISA</h3>
                  <p>Trainer</p>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="c-container my-2 text-center ">
                <div>
                  <img src={trainer5} alt="" />
                </div>
                <div>
                  <h3>DIANA MARIA</h3>
                  <p>Trainer</p>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="c-container my-2 text-center ">
                <div>
                  <img src={trainer6} alt="" />
                </div>
                <div>
                  <h3>DAVID WILLIAM</h3>
                  <p>Trainer</p>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="c-container my-2 text-center ">
                <div>
                  <img src={trainer7} alt="" />
                </div>
                <div>
                  <h3>MARIA JISA</h3>
                  <p>Trainer</p>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="c-container my-2 text-center">
                <div>
                  <img src={trainer8} alt="" />
                </div>
                <div>
                  <h3>David William</h3>
                  <p>Lead Trainer</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default OurTrainer;
