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
    height: 72,
  };

  render() {
    return (
      <React.Fragment>
        <Router>
          <div className="d-print-none" style={this.topspacing}></div>
            <Nav />
            <div className="p-4">
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
            <Footer />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
