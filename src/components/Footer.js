import React from "react";
import { Link } from "react-router-dom";
import footerlogo from "../img/logo-inline-colour.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className="p-5 bg-dark text-white">
          <div className="d-flex justify-content-center align-items-center">
            <div className="fw-light">&copy;&nbsp;</div>
            <img src={footerlogo} height="22" alt="" />
          </div>
          <div className="d-md-flex justify-content-center align-items-center pt-4 text-center">
            <div className="p-1">
              <Link to="/">Home</Link>
            </div>
            <div className="px-2 text-muted d-none d-md-block">|</div>
            <div className="p-1">
              <Link to="/rules">Rules</Link>
            </div>
            <div className="px-2 text-muted d-none d-md-block">|</div>
            <div className="p-1">
              <Link to="/caution">Caution</Link>
            </div>
            <div className="px-2 text-muted d-none d-md-block">|</div>
            <div className="p-1">
              <Link to="/resources">Resources</Link>
            </div>
            <div className="px-2 text-muted d-none d-md-block">|</div>
            <div className="p-1">
              <Link to="/mission">Mission</Link>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center pt-4 text-center">
            <div className="p-3">
              <a href="https://twitter.com/ScamAwareCA" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} size='2x' className="text-white" /></a>
            </div>
            <div className="p-3">
              <a href="https://www.instagram.com/scamawareca" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} size='2x' className="text-white" /></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
