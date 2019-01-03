import React from 'react';

import ReactDOM from 'react-dom';

import App from './App';

const AppWithRouter = () => (
    <BrowserRouter >
        <Route path="/" component={App}/>
    </BrowserRouter>
  )

ReactDOM.render(<App/>, document.getElementById('trip'));