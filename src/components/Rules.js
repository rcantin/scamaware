import React from "react";
import TitleImage from "../img/icon-rules-blue.svg";

class Rules extends React.Component {
  bulletwidth = {
    width: 150,
  };
  render() {
    return (
      <div>
        <div className="container pb-5">
          <div className="text-center py-5">
            <img src={TitleImage} height="40" className="m-3" alt="Title" />
            <h1 className="text-primary">Rules</h1>
            <h4 className="fw-light">Use these rules to help <span className="text-nowrap">recognize a scam.</span></h4>
          </div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5 justify-content-center">
            <div className="col">
              <h4>Do not give out personal information</h4>
              <p>Reputable companies, financial institutions, law enforcement and government agencies will NEVER ask you for your personal information, such as Social Insurance Number, bank account information, etc... If you are asked for this information by phone or other electronic means, do not provide it.</p>
            </div>
            <div className="col">
              <h4>Resist being pressured into quick decisions</h4>
              <p>Legitimate businesses and organizations will not try to pressure you into a quick decision. Scammers will try to rush you into a decision in hopes that you act before thinking. They may use positive pressure (you won a contest or have a refund waiting for you) or negative pressure (threat of legal action, deactivation of an account). Either way, make sure you think before you do anything.</p>
            </div>
            <div className="col">
              <h4>Be aware of the payment methods scammers use</h4>
              <p>If you are being asked to pay for something using gift cards, money transfers, or cash, it is most certainly a scam. Legitimate businesses and organizations will NEVER request money using these methods. If you are being asked to buy gift cards or send cash, it is most certainly a scam.</p>
            </div>
            <div className="col">
              <h4>Secrecy is a big indicator of a scam</h4>
              <p>Scammers will try to make you feel as if you should not tell anyone what is happening, often using fear, intimidation or embarrasment as tactics to keep you quiet. A legitimate business or organization will never ask you to hide something from friends, family, a financial institusion, etc...</p>
            </div>
            <div className="col">
              <h4>Never install unknown software or apps on your compter or mobile devices</h4>
              <p>Scammers will often ask you to install software on your computer, phone or tablet that will give them access to see your screen and use your computer, even when you aren't watching. Never install unknown software or applications on your computer or devices. If you have ever installed software or apps at the request of someone you don't know, speak to someone you trust who can help you determine if it's safe or not.</p>
            </div>
            <div className="col">
              <h4>Never click on "Ad" links in internet search results</h4>
              <p>Popular search engines such as Google allow people and businesses to pay to have an item listed at the top of the results. Scammers take advantage of this by paying to keep their scam websites at the top. For example, you may search for "Amazon support" and their Amazon scam link will be the first one you see because they have paid to keep it at the top (Google does not know it's a scam). Search engines are required to idenfify these paid results, so look for "Ad" identifiers and avoid those links.</p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center text-center flex-column bg-primary text-white px-4 py-5">
          <div className="p-2 fs-2">
            <span className="fw-lighter">Trust your own </span>
            <span className="fw-bolder text-uppercase">instincts </span>
            <span className="fw-lighter">and give yourself </span>
            <span className="text-nowrap">
              <span className="fw-lighter">time to </span>
              <span className="fw-bolder text-uppercase">listen </span>
              <span className="fw-lighter">to them.</span>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Rules;
