import React from "react";
import TitleImage from "../img/icon-resources-blue.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import ResourceLink01 from "../resources/quick-reference.pdf";

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
          <div className="py-5">
            <div className="row row-cols-1 row-cols-md-2 g-5 justify-content-center">
              <div className="col">
                <div className="">
                  <div className="">
                    <div className="fs-3 fw-bold">Recognize a Scam</div>
                    <div>PDF - Printable Quick Reference</div>
                    <div className="fw-bold fs-5 py-2">
                      <FontAwesomeIcon icon={faFilePdf} className="text-primary me-2" />
                      <a href={ResourceLink01} target="_blank" rel="noreferrer">Open/Download</a>
                    </div>
                    <p>Save and print this quick reference page and keep it next to your phone and computer.  When you're on the phone or receive an email that you aren't sure about, run through the questions on this sheet to help you determine if it might be a scam.</p>
                  </div>
                </div>
              </div>
            </div>
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
