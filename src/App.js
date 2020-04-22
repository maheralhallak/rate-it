import React from "react";
import "./App.scss";

import 'bootstrap/dist/css/bootstrap.min.css';
//import SignIn from "./components/signin/Signin";
//import SignUp from "./components/register/Register";
import HomePage from "./components/homePage/HomePage";
import Navbar from './components/navbar/NavBar'
function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      {/* <SignIn />
      <SignUp /> */}
    </div>
  );
}

export default App;
