import React from "react";
import TitleImage from "../img/icon-recognize-blue.svg";

class Recognize extends React.Component {
  render() {
    return (
      <div>
        <div className="container pb-5">
          <div className="text-center py-5">
            <img src={TitleImage} height="50" className="m-3" alt="Title" />
            <h1 className="text-primary">Recognize a Scam</h1>
            <div className="fs-5 text-muted">
              Once you understand how to recognize a scam, you'll be able <span className="text-nowrap">to avoid them in the future.</span>
            </div>
          </div>
          <div className="py-5 my-5">
            <div className="fw-lighter text-center">Content...</div>
          </div>
        </div>
        {/* <div className="d-flex justify-content-center align-items-center text-center flex-column bg-success text-white px-4 py-5">
          <div className="p-2 fs-2">
            <span className="fw-lighter">You might be chosen as a </span>
            <span className="fw-bolder text-uppercase">target </span>
            <span className="fw-lighter">but you don't </span>
            <span className="text-nowrap">
              <span className="fw-lighter">have to be a </span>
              <span className="fw-bolder text-uppercase">victim</span>
              <span className="fw-lighter">.</span>
            </span>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Recognize;
