import React, { Component } from "react";
import "./homePage.css";
import mainpic13 from "./assist/mainpic13.svg";
import stars from "./assist/3.png";



export default class HomePage extends Component {
    
  render() {
    

    
    var lr = <section className="presentation" id="presentation">
    <div className="introduction">
      <div className="intro-text">
      <div id="text" data-text="Rate it">Rate it</div>
        <p>
          Consumer review sites have been one of the Internet’s most
          persistent and valuable resources since the very beginning.
          This website allows consumers to review brands and then alerts
          brands to the feedback they’ve received.
        </p>
      </div>
      <br />

      <div className="wrapper">
        <a className="btn1" href="#">
          <span>CONTACT</span>
        </a>
      </div>
    </div>

    <div className="cover">
      <img
        src={mainpic13}
        alt="stars"
        style={{width: "100%", opacity: "0.8"}}
      />
    </div>
  </section>
    window.addEventListener("", () => {
    var newone = lr.cloneNode(true);
    lr.parentNode.replaceChild(newone, lr);
    lr = newone;
    });
    return (
      <div>
        <main>
          {lr}

          <img className="big-star" src={stars} alt="" />
          <img className="mid-icon" src={stars} alt="" />
        </main>
      </div>
    );
  }
}
