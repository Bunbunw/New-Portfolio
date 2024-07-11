import "./Contact.css";
import React, { useState } from "react";
import { send } from "@emailjs/browser";

function Contact() {
  const [toSend, setToSend] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("DashUTSC", "template_k49135l", toSend, "qIXC7MEUv9VWPN1KE")
      .then((response) => {
        alert("Feedback Submitted Successfully!");
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        alert("There is an error occurred.");
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
            placeholder="Your name"
            value={toSend.user_name}
            onChange={handleChange}
          />
          <input
            type="email"
            className="input email"
            name="user_email"
            placeholder="Your email"
            value={toSend.user_email}
            onChange={handleChange}
          />
          <textarea
            className="input message"
            name="message"
            placeholder="Your message"
            value={toSend.message}
            onChange={handleChange}
          />
          <input type="submit" className="submit-button" value="Send" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
