import React from "react";
import TitleImage from "../img/icon-caution-blue.svg";

class Caution extends React.Component {
  render() {
    return (
      <div>
        <div className="container pb-5">
          <div className="text-center py-5">
            <img src={TitleImage} height="40" className="m-3" alt="Title" />
            <h1 className="text-primary">Words of Caution</h1>
            <h4 className="fw-light">Scammers don't like it when you figure them out. <span className="text-nowrap">Be prepared for their reaction.</span></h4>
          </div>
          <div className="row row-cols-1 row-cols-md-2 g-5">
            <div className="col">
              <h4>Harsh &amp; Offensive Language</h4>
              <p>No matter what a scammer says to you, just remain calm and don't let them bother you. Once they know you've figured them out, the generally try to be as hurtful and offensive as they possibly can be. Cursing, name-calling and insults are their favourite way to try and make you feel bad. Just hang up and don't think twice about it.</p>
            </div>
            <div className="col">
              <h4>Threats &amp; Intimidation</h4>
              <p>Once discovered, many scammers will say anything they think might cause you to get upset or angry. This includes threats of violence against you and anyone they think might be close to you (friends, family, etc...). Just remember they have no power to do any of what they are saying, and they are only trying to upset you.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Caution;
