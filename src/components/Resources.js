import React from "react";
import TitleImage from "../img/icon-resources-blue.svg";

class Resources extends React.Component {
  render() {
    return (
      <div>
        <div className="container pb-5">
          <div className="text-center py-5">
            <img src={TitleImage} height="40" className="m-3" alt="Title" />
            <h1 className="text-primary">Resources</h1>
            <h4 className="fw-light">Use these free resources to spread the word and remind yourself <span className="text-nowrap">how to stay protected.</span></h4>
          </div>
          <div className="py-5 my-5">
            <div className="fw-lighter text-center">Please check back soon for resources...</div>
          </div>
        </div>
        {/* <div className="d-flex justify-content-center align-items-center text-center flex-column bg-info text-white px-4 py-5">
          <div className="p-2 fs-2">
            <span className="fw-lighter">A little bit of </span>
            <span className="fw-bolder text-uppercase">awareness </span>
            <span className="fw-lighter">can save you </span>
            <span className="text-nowrap">
              <span className="fw-lighter">a great deal of </span>
              <span className="fw-bolder text-uppercase">loss</span>
              <span className="fw-lighter">.</span>
            </span>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Resources;
