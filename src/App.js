import React from "react";
import "./App.scss";


// import SignIn from './components/Auth/Signin'
// import SignUp from './components/Auth/Register'
//import HomePage from './components/homePage/HomePage.js'


import 'bootstrap/dist/css/bootstrap.min.css';
//import SignIn from "./components/signin/Signin";
//import SignUp from "./components/register/Register";
/* import HomePage from "./components/homePage/HomePage"; */
import CommentBox from './components/comment/CommentBox'


function App() {
  return (
    <div className="App">
      <div> <CommentBox /></div>
      {/* <Navbar /> */}
      {/*  <HomePage /> */}
      {/* <SignIn />
      <SignUp /> */}
    </div>
  );
}

export default App;
