import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Homepage from '../pagedraw/homepage'
import Summarypage from '../pagedraw/summarypage'
import Customize from '../pagedraw/customize'

export default () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/a" component={Summarypage} />
    <Route exact path="/b" component={Customize} />
  </Switch>
)