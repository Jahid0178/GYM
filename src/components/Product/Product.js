import React from "react";
import { Card, CardGroup, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = (props) => {
  const { id, name, price, img, rating } = props.product;
  return (
    <>
      <Col lg={4} md={6} sm={12} className="my-3">
        <Container fluid>
          <CardGroup className="mx-2">
            <Card className="card-container">
              <Card.Img
                variant="top"
                src={img}
                style={{ width: 250 }}
                className="mx-auto"
              />
              <Card.Body className="text-center card-body text-white">
                <Card.Title>Name: {name}</Card.Title>
                <Card.Text>Price: {price}</Card.Text>
                <Card.Text>Rating: {rating}</Card.Text>
                <Link to={`/product/${id}`}>
                  <Button className="btn detail-btn">Purchase</Button>
                </Link>
              </Card.Body>
            </Card>
          </CardGroup>
        </Container>
      </Col>
    </>
  );
};

export default Product;
