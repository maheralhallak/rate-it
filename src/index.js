import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import { reducer as commentsReducer } from "./redux/comments";
import "bootstrap/dist/css/bootstrap.min.css";
import * as serviceWorker from "./serviceWorker";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import SignIn from "./components/Auth/Signin";
import Register from "./components/Auth/Register";
import Card from "./components/cards/card";
import Card1 from "./components/cards/card1";
import Product from "./components/cards/Product";
import Items from "./components/cards/items/Items";
import NaviBar from "./components/navbar/NavBar";

import Footer from "./components/footer/Footer.js";
import HomePage from "./components/homePage/HomePage";
import HomePage2 from "./components/HomePage2/HomePage2";
import BrandSignUp from "./components/Auth/RegisterBrand";
/* import NotFoundPage from './components/NotFoundPage' */
import axios from "axios";

axios.defaults.headers["x-auth-token"] = localStorage.getItem("token");


/* const ComponentWithComments = withComments(
  ({id,comments,commentsActions})=> {
    const [text,setText] = React.useState('');
    if ( ! comments[id] ) return <b>Loading...</b>;
    return <div>
      <input onChange={ e => setText(e.target.value)} value={text} />
      <Button onClick={ e => commentsActions.add(id,text) }>Add</Button>
      { comments[id].map( comment => <b>{comment.userName}</b>) }
      </div>;
  }
); */

const store = createStore(
  combineReducers({
    comments: commentsReducer,
  })
);

const routing = (
  <Provider store={store}>
    {/* <ComponentWithComments id={1}/>  */}
    <Router>
      <NaviBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/welcome" component={HomePage2} />
        <Route path="/brands" component={Card} />
        <Route path="/items" component={Card1} />
        <Route path="/signin" component={SignIn} />
        <Route path="/register" component={Register} />
        <Route path="/Brand-register" component={BrandSignUp} />
        <Route path="/product/:id" component={Product} />
        <Route path="/item/:id" component={Items} />
        {/* <Route component={"Notfound"} /> */}
      </Switch>
      {/*  <Footer /> */}
    </Router>
    <Footer />
  </Provider>
);
ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.

// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
