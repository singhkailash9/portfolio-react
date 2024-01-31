import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact Me</h2>
        <p>Connect with me on GitHub and LinkedIn:</p>
        <div className="social-links">
          <a href="https://github.com/singhkailash9" target="_blank" rel="noopener noreferrer">
            GitHub
            <img src="/icons/github.png" alt="linkedin" className="icon"></img></a>
          <a href="https://www.linkedin.com/in/kailash-singh-725a10232/" target="_blank" rel="noopener noreferrer">
            LinkedIn
            <img src="/icons/linkedin.png" alt="github" className="icon"></img></a>
        </div>
      </div>
      <div className="contact-form">
        <h2>Send me a Message</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>

          <button id="submitmsg" type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

