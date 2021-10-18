import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./Register.css";
import registerImg from "../../images/register.svg";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const { signInUsingGoogle, signInUsingGithub } = useAuth();
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
          <Form onSubmit={(e) => e.preventDefault()}>
            <Row>
              <Col>
                <Form.Control placeholder="First name" />
              </Col>
              <Col>
                <Form.Control placeholder="Last name" />
              </Col>
            </Row>
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
          <div className="text-center my-3">-----------OR-----------</div>
          <button className="btn btn-primary me-1" onClick={signInUsingGoogle}>
            Google Sign In
          </button>
          <button className="btn btn-primary ms-1" onClick={signInUsingGithub}>
            GitHub Sign In
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
