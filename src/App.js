import React from "react";
import "./scss/theme.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./scrollToTop";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Recognize from "./components/Recognize";
import Resources from "./components/Resources";
import Rules from "./components/Rules";
import Caution from "./components/Caution";
import Mission from "./components/Mission";
import Donate from "./components/Donate";

class App extends React.Component {
  topspacing = {
    marginTop: 72,
  };
  // minHeight = {
  //   minHeight: '100%',
  // };

  render() {
    return (
      <React.Fragment>
        <Router>
          <Nav />
          <div className="d-flex flex-column justify-content-stretch align-items-stretch h-100">
            <div className="d-print-none" style={this.topspacing}></div>
            <div className="flex-fill p-3">
              <ScrollToTop />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/recognize" component={Recognize} />
                <Route path="/caution" component={Caution} />
                <Route path="/rules" component={Rules} />
                <Route path="/resources" component={Resources} />
                <Route path="/mission" component={Mission} />
                <Route path="/donate" component={Donate} />
              </Switch>
            </div>
            <div>
              <Footer />
            </div>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
