import React from "react";
import { Link } from "react-router-dom";
import IconResources from "../img/icon-resources-blue.svg";
import IconRules from "../img/icon-rules-blue.svg";
import IconMission from "../img/icon-mission-blue.svg";
import IconCaution from "../img/icon-caution-blue.svg";

class Home extends React.Component {
  splashtext = {
    maxWidth: 600,
    fontSize: 32,
  };
  cardsection = {
    maxWidth: 800,
  };
  render() {
    return (
      <div>
        <div className="container pt-4">
          <div className="d-flex justify-content-center align-items-center text-center flex-column px-4">
            <div className="p-2" style={this.splashtext}>
              <span className="fw-light text-muted">You can </span>
              <span className="fw-bolder text-uppercase">protect </span>
              <span className="fw-light text-muted">yourself from </span>
              <span className="fw-bold fst-italic text-muted">scams </span>
              <span className="fw-light text-muted">by being </span>
              <span className="fw-bolder text-uppercase">aware </span>
              <span className="text-nowrap">
                <span className="fw-light text-muted">of how they work.</span>
              </span>
            </div>
          </div>
        </div>
        <div className="container-fluid px-3 py-5 px-md-5">
          <div className="row row-cols-2 row-cols-sm-2 g-5 justify-content-center text-center py-5">
            <div className="col">
              <Link to="/rules" className="fs-3">
                <div>
                  <img src={IconRules} height="40" alt="Title" />
                </div>
                <div>Rules</div>
              </Link>            
            </div>
            <div className="col">
              <Link to="/caution" className="fs-3">
                <div>
                  <img src={IconCaution} height="40" alt="Title" />
                </div>
                <div>Caution</div>
              </Link>              
            </div>
            <div className="col">
              <Link to="/resources" className="fs-3">
                <div>
                  <img src={IconResources} height="40" alt="Title" />
                </div>
                <div>Resources</div>
              </Link>
            </div>
            <div className="col">
              <Link to="/mission" className="fs-3">
                <div>
                  <img src={IconMission} height="40" alt="Title" />
                </div>
                <div>Mission</div>
              </Link>
            </div>
          </div>
          {/* <div className="row row-cols-1 row-cols-md-2 g-5 mx-auto" style={this.cardsection}>
            <div className="col">
              <Link to="/recognize">
                <div className="card border-0 h-100">
                  <div className="card-body text-center">
                    <div>
                      <img src={IconRecognize} width="40" alt="Title" />
                    </div>
                    <div className="fs-4 fw-bolder">Recognize a Scam</div>
                    <div className="fs-6 mt-2">Learn how to recognize when you might be the target of a scam.</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col">
              <Link to="/recognize">
                <div className="card border-0 h-100">
                  <div className="card-body text-center">
                    <div>
                      <img src={IconRules} width="40" alt="Title" />
                    </div>
                    <div className="fs-4 fw-bolder">Rules to Live By</div>
                    <div className="fs-6 mt-2">Following a few simple rules can save you from being scammed.</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col">
              <Link to="/recognize">
                <div className="card border-0 h-100">
                  <div className="card-body text-center">
                    <div>
                      <img src={IconCaution} width="40" alt="Title" />
                    </div>
                    <div className="fs-4 fw-bolder">Words of Caution</div>
                    <div className="fs-6 mt-2">There are a few things you should know about scammers themselves.</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col">
              <Link to="/recognize">
                <div className="card border-0 h-100">
                  <div className="card-body text-center">
                    <div>
                      <img src={IconResources} width="40" alt="Title" />
                    </div>
                    <div className="fs-4 fw-bolder">More Resources</div>
                    <div className="fs-6 mt-2">Feel free to share, print and read through all of these resources.</div>
                  </div>
                </div>
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Home;
