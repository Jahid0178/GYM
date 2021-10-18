import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./Register.css";
import registerImg from "../../images/register.svg";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    signInUsingGoogle,
    signInUsingGithub,
    handleEmailChange,
    handlePasswordChange,
    handleRegister,
    error,
  } = useAuth();
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
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onBlur={handleEmailChange}
                type="email"
                placeholder="Enter email"
                required
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onBlur={handlePasswordChange}
                type="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            <p className="text-danger">{error}</p>
            <Button onClick={handleRegister} className="reg-btn" type="submit">
              Register
            </Button>
            <Link className="ms-2 back-login" to="/login">
              Already have account?
            </Link>
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
