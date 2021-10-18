import React from "react";
import { Col, Row } from "react-bootstrap";
import "./AboutIntro.css";

const AboutIntro = () => {
  return (
    <div className="p-3 about-intro">
      <div>
        <Row>
          <Col
            lg={6}
            md={12}
            sm={12}
            className="text-white d-flex align-items-center"
          >
            <div>
              <h5>Welcome</h5>
              <h1>Welcome To Crossfit GYM </h1>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth. Far far
                away, behind the word mountains, far from the countries Vokalia
                and Consonantia, there live the blind texts. Separated they live
                in Bookmarksgrove right at the coast of the Semantics, a large
                language ocean.
              </p>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12}>
            <iframe
              max-width="553"
              width="100%"
              height="380"
              src="https://www.youtube.com/embed/2OgSOxyIl6I"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutIntro;
