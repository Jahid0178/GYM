import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./ProductDetails.css";
import { Card, CardGroup, Button } from "react-bootstrap";
import fakeData from "../../fakeData";

const ProductDetails = () => {
  const [detail, setDetail] = useState({});
  const [data, setData] = useState([]);

  const { productId } = useParams();

  useEffect(() => {
    setData(fakeData);
  }, []);

  useEffect(() => {
    if (data.length == 0) {
    } else {
      const pDetail = data.find((data) => data.id == productId);
      setDetail(pDetail);
    }
  }, [data]);
  return (
    <div className="product-container py-5">
      <CardGroup style={{ width: 352 }}>
        <Card>
          <Card.Img variant="top" src={detail.img} />
          <Card.Body className="text-white">
            <Card.Title>Name: {detail?.name}</Card.Title>
            <Card.Text>Brand: {detail?.brand}</Card.Text>
            <Card.Text>Goal: {detail?.goal}</Card.Text>
            <Card.Text>Price: {detail?.price}</Card.Text>
            <Card.Text>Rating: {detail?.rating}</Card.Text>
            <Button className="btn btn-warning">Purchase Now</Button>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default ProductDetails;
