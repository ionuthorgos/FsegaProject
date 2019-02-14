import React from 'react';
import '../../styles/contact.css';
import FormPage from './FormContact';

class ContactPage extends  React.Component {
  render(){
    return(
      <div>
        <h1 id="contact-page">Contact Page</h1>
        <p id="contact-page">React, Redux</p>
        <FormPage/>
      </div>
    );
  }
}

export default ContactPage;
