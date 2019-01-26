import React from 'react';
import {Link} from 'react-router';

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
      </div>
    );
  }
}

export default HomeContent;