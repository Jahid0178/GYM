import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import {
  faDumbbell,
  faHeadset,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Benefits.css";

const Benefits = () => {
  const dumbbellIcon = <FontAwesomeIcon icon={faDumbbell} />;
  const calendarIcon = <FontAwesomeIcon icon={faCalendarAlt} />;
  const mobileIcon = <FontAwesomeIcon icon={faMobile} />;
  const support = <FontAwesomeIcon icon={faHeadset} />;
  return (
    <div className="benefits-container">
      <Container>
        <h2 className="text-center py-2 my-5 fs-1 benefits-heading">
          Benefits Our GYM Center
        </h2>
        <Row>
          <Col lg={6} sm={1} md={1} className="d-flex align-items-center">
            <div className="icon me-2">{dumbbellIcon}</div>
            <div>
              <h3>Instructional Videos</h3>
              <p>
                Gym trainers provide our printable calendars, thats give you the
                means to stay organized & motivated through each program. Cross
                of one day at a time and see how far you've come!
              </p>
            </div>
          </Col>
          <Col lg={6} sm={1} md={1} className="d-flex align-items-center">
            <div className="icon me-2">{calendarIcon}</div>
            <div>
              <h3>Training Calendars</h3>
              <p>
                No training program is complete solution without a great meal
                plan. Our Fitness care trainers provide a shopping lists,
                recipes, and even a great examples of weekly meal plans so.
              </p>
            </div>
          </Col>
          <Col lg={6} sm={1} md={1} className="d-flex align-items-center">
            <div className="icon me-2">{mobileIcon}</div>
            <div>
              <h3>Mobile App & Free WiFi</h3>
              <p>
                Choose your perfect work-out plan and track your workout with
                the press of a mobile app button, when ever u want. Finess Care
                up-coming mobile apps will make fitness fit in palm hand.
              </p>
            </div>
          </Col>
          <Col lg={6} sm={1} md={1} className="d-flex align-items-center">
            <div className="icon me-2">{support}</div>
            <div>
              <h3>Community Support</h3>
              <p>
                Find friends and like-minded fitness buffs on BodySpace! With an
                army of supporters behind you, you'll never feel like you're
                training alone. Instructions to every exercise so you never
                walk.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Benefits;
