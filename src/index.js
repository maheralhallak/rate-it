import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom'

import SignIn from './components/Auth/Signin'
import Register from './components/Auth/Register'

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">homePage</Link>
        </li>
        <li>
          <Link to="/signup">Login</Link>
        </li>
        <li>
          <Link to="/register">Contact</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/signin" component={SignIn} />
        <Route path="/register" component={Register} />
        <Route component={"Notfound"} />
      </Switch>
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
