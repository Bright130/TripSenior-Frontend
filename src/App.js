
import React, { Component } from 'react';
import Homepage from './pagedraw/homepage'
import Summarypage from './pagedraw/summarypage'
import Customize from './pagedraw/customize'
import { Router, Route, IndexRoute} from 'react-router'
import { renderRoutes } from "react-router-config";
import createBrowserHistory from 'history/es/createBrowserHistory'

const history = createBrowserHistory()

class App extends Component {

  render() {

    return (
    <Router history={createBrowserHistory()}>
      <Route path='/' component={Homepage}>
        <Route path='sum' component={Summarypage} />
        <Route path='custom' component={Customize} />
      </Route>
  </Router>
    );

  }

}
export default App;
