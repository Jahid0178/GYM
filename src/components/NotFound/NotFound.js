import React from "react";
import "./NotFound.css";
import error from "../../images/error.jpg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="error-container d-flex justify-content-center align-items-center">
      <div>
        <div>
          <img className="error-img" src={error} alt="" />
        </div>
        <div className="text-center">
          <Link
            className="text-center text-white text-decoration-none rounded back-home-btn"
            to="/home"
          >
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
