
import React from "react";
import "./App.css";


import SignIn from './components/signin/Signin'
import SignUp from './components/register/Register'
import HomePage from './components/homePage/HomePage'


function App() {

  return (
    <div className="App">

      <HomePage />

      {/* <SignIn />
      <SignUp /> */} 
    </div>
  );
}

export default App;



