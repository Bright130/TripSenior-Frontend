import React, { Component } from 'react';
import Homepage from './pagedraw/homepage'
import Summarypage from './pagedraw/summarypage'
import Customize from './pagedraw/customize'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/es/createBrowserHistory';
import LoginPage from './pagedraw/LoginPage';

const history = createBrowserHistory()

class App extends Component {

  render() {

    return (
      <Router>
        <div>
          <Route exact path="/" component={Homepage} />
          <Route path="/trip-custom" component={Customize} />
        </div>
      </Router>
    );

  }

}
export default App;
