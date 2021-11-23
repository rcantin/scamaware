import React from "react";
import { Link } from "react-router-dom";
import "bootstrap";
import logoDarkInline from "../img/logo-inline-colour.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

class TopNav extends React.Component {
  bannerlogostyle = {
    height: 30,
    padding: 0,
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top d-print-none">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand pt-0">
              <img src={logoDarkInline} style={this.bannerlogostyle} alt="ScamAware Logo" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header justify-content-between">
                <img src={logoDarkInline} height="25" alt="ScamAware Logo" />
                <button type="button" className="btn btn-link" data-bs-dismiss="offcanvas" aria-label="Close">
                  <FontAwesomeIcon icon={faTimes} size="lg" />
                </button>
              </div>
              <div className="offcanvas-body" data-bs-dismiss="offcanvas">
                <ul className="navbar-nav justify-content-center align-items-center text-center ms-auto">
                  <li className="nav-item">
                    <Link to="/" className="nav-link text-primary">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/rules" className="nav-link text-primary">
                      Rules
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/caution" className="nav-link text-primary">
                      Caution
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/resources" className="nav-link text-primary">
                      Resources
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/mission" className="nav-link text-primary">
                      Mission
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default TopNav;
