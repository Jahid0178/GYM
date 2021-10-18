import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./Register.css";
import registerImg from "../../images/register.svg";

const Register = () => {
  return (
    <div className="m-5">
      <Row>
        <Col className="d-flex justify-content-center">
          <img
            src={registerImg}
            alt=""
            className="img-fluid"
            style={{ width: 350 }}
          />
        </Col>
        <Col>
          <h1 className="reg-title py-2">Register Your Account</h1>
          <Form>
            <Form>
              <Row>
                <Col>
                  <Form.Control placeholder="First name" />
                </Col>
                <Col>
                  <Form.Control placeholder="Last name" />
                </Col>
              </Row>
            </Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button className="reg-btn" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
