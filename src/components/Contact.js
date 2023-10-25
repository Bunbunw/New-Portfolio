import "./Contact.css";

import React, { useState } from "react";
import { send } from "@emailjs/browser";

function Contact() {
  const [toSend, setToSend] = useState({
    userName: "",
    email: "",
    message: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("Service ID", "template ID", toSend, "USER ID")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-main">
      <h2 className="contact-title">CONTACT</h2>
      <div className="contact-wrapper">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            className="input name"
            name="user_name"
            value={toSend.userName}
            onChange={handleChange}
          />
          <span className="placeholder Name">your name</span>
          <input
            type="email"
            className="input email"
            name="user_email"
            value={toSend.email}
            onChange={handleChange}
          />
          <span className="placeholder Email">your email</span>
          <textarea
            type="textarea"
            className="input message"
            name="message"
            value={toSend.message}
            onChange={handleChange}
          />
          <span className="placeholder msg">your message</span>
          <br />
          <input type="submit" className="submit-button" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
