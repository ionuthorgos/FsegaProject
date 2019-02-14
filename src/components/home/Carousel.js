import React from "react";
import { Carousel } from "react-responsive-carousel";
import '../../styles/carousel.css';

export default () => (
  <div id="myCarousel" className="overflow-auto">

  <Carousel autoPlay id="myCarousel" >
    <div >
      <img src="http://kinetomed.ro/wp-content/uploads/2018/05/header-grid-foam-rolling-cluj.png" />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img src="http://kinetomed.ro/wp-content/uploads/2018/05/header3-kinetomedro-900x350-1.png" />
      <p className="legend">Legend 3</p>
    </div>
    <div>
      <img src="http://kinetomed.ro/wp-content/uploads/2018/05/fizioterapie-kinetomed-cluj-napoca1-1.png" />
      <p className="legend">Legend 4</p>
    </div>
  </Carousel>
     <p align="right">This is some text in a paragraph.</p>
  </div>
);
