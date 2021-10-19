import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [{}, storeData, setStoreData] = useAuth();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./fakeData.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setStoreData(data);
      });
  }, []);

  return (
    <div className="shop-container">
      <Row className="g-2">
        {products.map((product) => (
          <Product product={product} key={product.id}></Product>
        ))}
      </Row>
    </div>
  );
};

export default Shop;
