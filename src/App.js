import React, { Component } from "react";
import Homepage from "./mainpages/home/homepage";
import Summarypage from "./mainpages/summary/summarypage";
import Customize from "./mainpages/customize/customize";
import Detailpage from "./mainpages/detail/detailpage";
import RESDetailpage from "./mainpages/detail/RESdetailpage";
import Trippage from "./mainpages/personal/trippage";
import Profilepage from "./mainpages/personal/profilepage";
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
          <Route path="/res/:id" component={RESDetailpage} />
          <Route path="/trip-custom" component={Customize} />
          <Route path="/summary/:id" component={Summarypage} />
          <Route path="/mytrip/" component={Trippage} />
          <Route path="/myprofile/" component={Profilepage} />
        </div>
      </Router>
    );
  }
}
export default App;
