import React from "react";
import { Col, Form, Row, Button, Container } from "react-bootstrap";
import "./LogIn.css";
import LoginImg from "../../images/login-img.svg";
import useAuth from "../../hooks/useAuth";

const LogIn = () => {
  const { processAccount, handleEmailChange, handlePasswordChange, error } =
    useAuth();
  return (
    <div className="my-5">
      <Container>
        <Row>
          <Col>
            <img src={LoginImg} alt="" className="img-fluid" />
          </Col>
          <Col className="d-flex align-items-center">
            <Form className="w-100" onSubmit={(e) => e.preventDefault()}>
              <h1 className="login-title py-3">Log In Your Account</h1>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalEmail"
              >
                <Form.Label column sm={2}>
                  Email
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    onBlur={handleEmailChange}
                  />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalPassword"
              >
                <Form.Label column sm={2}>
                  Password
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onBlur={handlePasswordChange}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <p className="text-danger">{error}</p>
                <Col sm={{ span: 10, offset: 2 }}>
                  <Button
                    type="submit"
                    className="login-btn"
                    onClick={processAccount}
                  >
                    Log In
                  </Button>
                </Col>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LogIn;
