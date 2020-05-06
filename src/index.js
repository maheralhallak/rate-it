import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom'
import SignIn from './components/Auth/Signin'
import Register from './components/Auth/Register';
import Card from './components/cards/card';
import Product from './components/cards/Product';
import NavBar from './components/navbar/NavBar';
import HomePage from "./components/homePage/HomePage";
import Footer from './components/Footer/Footer'
import HomePage2 from './components/HomePage2/HomePage2'

const routing = (
  <Router>

    <NavBar />
    <Switch>

      {/* <Route exact path="/" component={App} /> */}
      <Route exact path="/" component={HomePage} />
      <Route path="/brands" component={Card} />
      <Route path="/signin" component={SignIn} />
      <Route path="/register" component={Register} />
      <Route path="/product/:id" component={Product} />
      <Route path="/pricing" component={HomePage2} />
      {/* <Route component={"Notfound"} /> */}

    </Switch>
   {/*  <Footer /> */}
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
