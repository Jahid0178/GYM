import {
  faFacebook,
  faGooglePlusG,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  const envelop = <FontAwesomeIcon icon={faEnvelope} />;
  const phone = <FontAwesomeIcon icon={faPhoneAlt} />;
  const facebook = <FontAwesomeIcon icon={faFacebook} />;
  const twitter = <FontAwesomeIcon icon={faTwitter} />;
  const googlePlus = <FontAwesomeIcon icon={faGooglePlusG} />;
  const youtube = <FontAwesomeIcon icon={faYoutube} />;
  return (
    <div className="banner-container p-1 text-white d-flex justify-content-between">
      <div>
        <h5 className="d-inline">{envelop} Contact@gym.com</h5>
        <h5 className="d-inline ms-2">{phone} Troll Free: +1 212-212-2376</h5>
      </div>
      <div>
        <Link to="#" className="icons">
          {facebook}
        </Link>
        <Link to="#" className="icons">
          {twitter}
        </Link>
        <Link to="#" className="icons">
          {googlePlus}
        </Link>
        <Link to="#" className="icons">
          {youtube}
        </Link>
      </div>
    </div>
  );
};

export default Banner;
