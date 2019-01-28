import React from "react";
import { Carousel } from "react-responsive-carousel";
import '../../styles/carousel.css';

export default () => (
  <div >
  <Carousel autoPlay className="carousel">
    <div >
      <img src="../img/img1.jpg" />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img src="http://lorempixel.com/125/125/sports/7/cc/" />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
      <p className="legend">Legend 3</p>
    </div>
    <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" />
      <p className="legend">Legend 4</p>
    </div>
    <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg" />
      <p className="legend">Legend 5</p>
    </div>
    <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-6.jpg" />
      <p className="legend">Legend 6</p>
    </div>
    <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-7.jpg" />
      <p className="legend">Legend 7</p>
    </div>
    <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-8.jpg" />
      <p className="legend">Legend 8</p>
    </div>
  </Carousel>
  </div>
);
