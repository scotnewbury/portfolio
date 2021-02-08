import React from 'react';
import './ContactMe.css';

const ContactMe = () => (
    <div className="main">
      <div className="showcase">
        <h1>Contact Me</h1>
        <div className="contactform">
            <form>
              <label for="fname">First Name</label>
              <input type="text" id="fname" name="firstname" placeholder="Your first name" />
              <label for="lname">Last Name</label>
              <input type="text" id="lname" name="lastname" placeholder="Your last name" />
              <label for="subject">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="Subject line" />
              <label for="message">Message</label>
              <textarea id="message" name="message" rows="5" cols="60" placeholder="Your message?"></textarea>
              <button type="button" className="btn btn-success" type="submit">Send email</button>
            </form>
          </div>
      </div>
    </div>
);

export default ContactMe;