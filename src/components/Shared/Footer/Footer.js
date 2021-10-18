import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Footer.css";
import logo from "../../../images/logo.webp";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container p-3">
      <Container>
        <Row>
          <Col sm={6} lg={3} md={6}>
            <img src={logo} alt="" className="footer-logo" />
            <p>7770 Myfield Rd. Montgomery Village, MD 20886</p>
            <p>Support@gym.com</p>
          </Col>
          <Col sm={6} lg={3} md={6}>
            <h3>My Account</h3>
            <ul>
              <li>
                <Link className="links">About US</Link>
              </li>
              <li>
                <Link className="links">Contact US</Link>
              </li>
              <li>
                <Link className="links">Service</Link>
              </li>
              <li>
                <Link className="links">Privacy Policy</Link>
              </li>
            </ul>
          </Col>
          <Col sm={6} lg={3} md={6}>
            <h3>Policies</h3>
            <ul>
              <li>
                <Link className="links">Gift Vouchers</Link>
              </li>
              <li>
                <Link className="links">Support Center</Link>
              </li>
              <li>
                <Link className="links">Delivery Information</Link>
              </li>
              <li>
                <Link className="links">Terms & Condition</Link>
              </li>
              <li>
                <Link className="links">Returns</Link>
              </li>
            </ul>
          </Col>
          <Col sm={6} lg={3} md={6}>
            <h3>Information</h3>
            <ul>
              <li>
                <Link className="links">Careers</Link>
              </li>
              <li>
                <Link className="links">Fitness</Link>
              </li>
              <li>
                <Link className="links">Tracking</Link>
              </li>
              <li>
                <Link className="links">Help and Advice</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
