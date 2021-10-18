import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./fakeData.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="shop-container">
      <Row>
        {products.map((product) => (
          <Product product={product} key={product.id}></Product>
        ))}
      </Row>
    </div>
  );
};

export default Shop;
