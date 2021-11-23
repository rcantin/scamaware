import React from "react";
// import TitleImage from "../img/icon-mission-blue.svg";

class Donate extends React.Component {
  render() {
    return (
      <div>
        <div className="container pb-5">
          <div className="text-center py-5">
            {/* <img src={TitleImage} height="50" className="mx-3" alt="Title" /> */}
            <h1 className="text-primary">Donate</h1>
            <div className="fs-5 text-muted">
              Thank you for considering making a <span className="text-nowrap">donation to ScamAware.</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Donate;
