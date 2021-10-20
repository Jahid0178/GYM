import React from "react";
import { Col, Container, Form, Row, Table, Button } from "react-bootstrap";
import "./BmiChart.css";

const BmiChart = () => {
  return (
    <div className="bmi-container py-5">
      <Container>
        <Row>
          <Col lg={6} md={12} sm={12}>
            <h2 className="text-white">
              BMI <span className="bmi-header">CHART</span>
            </h2>
            <Table className="text-center" striped bordered hover size="sm">
              <thead className="text-white">
                <tr>
                  <th>BMI</th>
                  <th>WEIGHT STATUS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Below 18.5</td>
                  <td>Underweight</td>
                </tr>
                <tr>
                  <td>18.5-24.9</td>
                  <td>Healthy</td>
                </tr>
                <tr>
                  <td>25.0-29.9</td>
                  <td>Overweight</td>
                </tr>
                <tr>
                  <td>30 and Above</td>
                  <td>Obese</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col lg={6} md={12} sm={12}>
            <h2 className="text-white">
              CALCULATE <span className="bmi-header">YOUR BMI</span>
            </h2>
            <Form>
              <Row className="mb-3 mt-4">
                <Form.Group as={Col} controlId="formGridText">
                  <Form.Label className="text-white">Height/cm</Form.Label>
                  <Form.Control
                    type="text"
                    className="bg-transparent text-white"
                    placeholder="Enter your height"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridText">
                  <Form.Label className="text-white">Height/kg</Form.Label>
                  <Form.Control
                    type="text"
                    className="bg-transparent text-white"
                    placeholder="Enter your weight"
                  />
                </Form.Group>
              </Row>

              <Form.Group as={Col} className="mb-3" controlId="formGridAge">
                <Form.Label className="text-white">Age</Form.Label>
                <Form.Control
                  className="bg-transparent text-white"
                  placeholder="Enter your age"
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Check
                  inline
                  type="radio"
                  aria-label="radio 1"
                  name="gender"
                  label="Male"
                  className="text-white"
                />
                <Form.Check
                  inline
                  type="radio"
                  aria-label="radio 1"
                  name="gender"
                  label="Female"
                  className="text-white"
                />
                <Form.Check
                  inline
                  type="radio"
                  aria-label="radio 1"
                  name="gender"
                  label="Other"
                  className="text-white"
                />
              </Form.Group>

              <Button className="btn calculate-btn" type="submit">
                Calculate
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BmiChart;
