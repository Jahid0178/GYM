import React from "react";
import { Card, CardGroup, Col } from "react-bootstrap";
import "./Product.css";

const Product = (props) => {
  const { name, brand, goal, price, img, rating } = props.product;
  return (
    <>
      <Col lg={4} md={6} sm={12} className="my-3">
        <CardGroup>
          <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body className="text-center">
              <Card.Title>Name: {name}</Card.Title>
              <Card.Text>Brand: {brand}</Card.Text>
              <Card.Text>Goal: {goal}</Card.Text>
              <Card.Text>Price: {price}</Card.Text>
              <Card.Text>Rating: {rating}</Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Col>
    </>
  );
};

export default Product;
