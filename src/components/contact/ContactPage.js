import React from 'react';
import {Link} from 'react-router';
import FormContact from './FormContact';

class ContactPage extends  React.Component {
  render(){
    return(
      <div>
        <h1 id="contact-page">Contact Page</h1>
        <p>React, Redux</p>
        <Link to="/" className="btn btn-primary btn-lg">Back to Home Page</Link>
        <FormContact/>
      </div>
    );
  }
}

export default ContactPage;
