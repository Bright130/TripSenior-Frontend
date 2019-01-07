import React, { Component } from "react";
import Homepage from "./mainpages/home/homepage";
import Summarypage from "./mainpages/summary/summarypage";
import Customize from "./mainpages/customize/customize";
import Detailpage from "./mainpages/detail/detailpage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import createBrowserHistory from "history/es/createBrowserHistory";

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Homepage} />
          <Route path="/place/:id" component={Detailpage} />
          <Route path="/trip-custom" component={Customize} />
          <Route path="/summary" component={Summarypage} />
          <Route
            path="/p/:id"
            render={() => (
              <p>
                {" "}
                I want this text to show up for all routes other than '/',
                '/products' and '/category'{" "}
              </p>
            )}
          />
        </div>
      </Router>
    );
  }
}
export default App;
