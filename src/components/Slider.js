import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../images/1.jpg";
import image2 from "../images/2.png";
import image3 from "../images/3.png";
import image4 from "../images/4.png";

function Slider() {
  return (
    <>
      <Carousel style={{marginTop: "80px"}}>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={image1} alt="First slide" />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={800}>
          <img className="d-block w-100" src={image2} alt="Second slide" />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={400}>
          <img className="d-block w-100" src={image3} alt="Second slide" />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image4} alt="Third slide" />
          <Carousel.Caption>
            <h3></h3>
            <p>
              
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Slider;
