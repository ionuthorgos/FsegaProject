import React from 'react';
import {Link} from 'react-router';
import '../../styles/homeContent.css';
import Carousel from './Carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class HomeContent extends  React.Component {
  render(){
    return(
      <div>
        <div className="jumbotron">

          <h1>Horgos Project</h1>
          <p>React, Redux</p>
          <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
          { "   "}
          <Link to="contact" className="btn btn-primary btn-lg">Contact page</Link>

        </div>
        <Carousel/>
      </div>
    );
  }
}

export default HomeContent;
