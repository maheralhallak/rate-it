import React, { Component } from "react";
import "./homePage.scss";
import mainpic13 from "./assist/mainpic13.svg";
import stars from "./assist/3.png";

export default class HomePage extends Component {
  render() {
    var lr = (
      <section className="presentation" id="presentation">
        <div className="introduction">
          <div className="intro-text">
            <div id="text" data-text="Rate it">
              Rate it
            </div>
            <p>
              Consumer review sites have been one of the Internet’s most
              persistent and valuable resources since the very beginning. This
              website allows consumers to review brands and then alerts brands
              to the feedback they’ve received.
            </p>
          </div>{" "}
          <br />
          <div className="wrapper">
            <script
              type="text/javascript"
              id="hs-script-loader"
              async
              defer
              src="//js.hs-scripts.com/7502045.js"
            ></script>
            <a className="btn1" href="#">
              <span></span>
            </a>
          </div>
        </div>

        <div className="cover">
          <img
            src={mainpic13}
            alt="stars"
            style={{ width: "100%", opacity: "0.9" }}
          />
        </div>
        <section id="section05" class="demo">
          <a href="#secondParagraph">
            <span></span>About us
          </a>
        </section>
      </section>
    );
    var see = (
      <section className="secondPara1" id="secondParagraph">
        <div className="secondPara">
          <p>
            Consumer review sites have been one of the Internet’s most
            persistent and valuable resources since the very beginning.
          </p>
          <p>
            The website allows consumers to review brands and then alerts brands
            to the feedback they’ve received.
          </p>
          <p>
            Consumers can post their Good or Bad experiences about almost
            anything known as reviews at rate-it.
          </p>
          <p>
            Com and associated brands (If Registered) will be notified instantly
            about the review which helps quickly resolve consumer complaints.
          </p>
          <p>
            As a Brand, on rate-it.com you can easily connect with your
            consumers and help them if needed or say thanks for their good
            review.
          </p>
          <p>
            All this shows to your potential buyers and they know they will get
            top notch customer service if they buy from you.
          </p>
          <p>
            The key to this site’s service is the fact that while reviews and
            brand responses are public, each review is a one-on-one
            correspondence—no third-parties or trolls can influence visitor
            opinion.
          </p>
        </div>
      </section>
    );

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
        {see}
      </div>
    );
  }
}
