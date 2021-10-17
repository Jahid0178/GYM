import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../images/home/home-img1.jpg";
import img2 from "../../images/home/home-img2.jpg";
import img3 from "../../images/home/home-img3.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="home-container">
      <Carousel className="carousel-container" controls={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid img"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 className="carousel-heading">
              Be <span className="short-text">Strong</span> Training Hard
            </h1>
            <p className="fs-2">Shape Your Body</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid img"
            src={img2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h1 className="carousel-heading">
              Be <span className="short-text">Strong</span> Training Hard
            </h1>
            <p className="fs-2">Shape Your Body</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid img"
            src={img3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1 className="carousel-heading">
              Be <span className="short-text">Strong</span> Training Hard
            </h1>
            <p className="fs-2">Shape Your Body</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
