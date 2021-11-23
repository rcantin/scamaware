import React from "react";
import TitleImage from "../img/icon-mission-blue.svg";

class Mission extends React.Component {
  render() {
    return (
      <div>
        <div className="container pb-5">
          <div className="text-center py-5">
            <img src={TitleImage} height="40" className="m-3" alt="Title" />
            <h1 className="text-primary">The Mission</h1>
            <h4 className="fw-light">Anyone can be the target of a scam, but with a bit of awareness, <span className="text-nowrap">you don't have to be a victim.</span></h4>
          </div>
          <div className="row row-cols-1 row-cols-md-2 g-5 justify-content-center">
            <div className="col">
              <p>
                Years ago, I started watching YouTube videos where people known as "scam baiters" would convince scammers that their scam was working and they would be able to steal their money. At first, it was simply entertainment (it's rather enjoyable to hear the frustration in the scammer's
                voice when they realize they've been fooled). From time to time, these scam baiters manage to contact real people that are the targets of scams and help them realize what's going on, quite literally saving the people from a scam in progress. Hearing the voices of these people as
                they're being scammed and listening to the tactics used by scammers, I realized a couple of things.
              </p>
              <ol className="spaced">
                <li>Scammers can be absolutely heartless, extracting every last dollar they can from their victim.</li>
                <li>These scams are incredibly effective when the right target is found, taking advantage of limited technical knowledge and peoples' trusting nature.</li>
                <li>The vast majority of scams are done using the same tactics and script, so if enough people can be made aware of how the scams work, they would be out of business.</li>
              </ol>
              <p>I decided to put myself to work building a source for information about how to stop scammers from making you a victim. I'm completely independent and do this simply because I felt compelled to help people avoid being a victim of these scams.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Mission;
