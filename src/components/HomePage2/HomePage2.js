import React ,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './homepage2.css'
import {Carousel} from 'react-bootstrap';
import Img0 from './assets/01.jpg';
import Img1 from './assets/02.jpg';
import Img2 from './assets/03.jpg';
import Img3 from './assets/04.jpg';
export default function HomePage2() {


  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    
    return (
        <div>
          <section class="announce-voice">
              
          <div class="announce-detail">
            <div class="row fRow">
              <div class="col-md-6 img"></div>
              <div class="col-md-6">
                <div class="details">
                  <h1 class="details-h1">
                  The only address where your complaint is precious!
                  </h1>
                  <p class="details-p">
                  Write your complaint, make your voice heard.
                  </p>
                  <a href="/brands" target="_self">Write a Complaint</a>
                </div>
              </div>
            </div>
                  
              <div class=" online-box">
                <h1 class="online-h text-typing">
                Safe, easy and fast...  at home 
                </h1>
                <div class="online-img"></div>
              </div>
              <div class="row sRow col-md-12">
                <div class="col-md-6 img3"></div>
                <div class="details col-md-6">
                    <h1 class="details2-h1 mt-5">
                    Say <span class="no">no!</span>  to the service that does not meet your needs and share your <span class="yes">Experince <br/>&#9733; &#9733; &#9733;  </span> &#9733; &#9733;
                    </h1>
                </div>
              </div>
            </div>
            <h1 className="proccess">How Does the Complaint Process Work?</h1>
            <div class="Carousel">
              
              <br/>
            <Carousel  activeIndex={index} onSelect={handleSelect} >
              <Carousel.Item>
                <img
                  className="d-block "
                  src={Img0}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>1: New Complaint</h3>
           
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block  "
                  src={Img1}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>2: Auditing the Complaint</h3>
                  
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className=" d-block "
                  src={Img2}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>3: Controlling Content</h3>
                  
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block "
                  src={Img3}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>4: Brand Notification</h3>
                  
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            </div>
    
            
               
        </section>
    </div>
    )
}


