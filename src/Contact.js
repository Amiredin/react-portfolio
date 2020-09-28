import React from "react";
import emailjs from "emailjs-com";
import { Button } from "@material-ui/core";

import "./Contact.css";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zg1l2g9",
        "template_5n509an",
        e.target,
        "user_bvxqnORkT3YUgFOWOQbKf"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="text" placeholder="Name" name="name" />

      <input type="email" placeholder="Email" name="email" />

      <input type="text" placeholder="Subject" name="subject" />

      <textarea name="message" />

      <Button
        type="Submit"
        variant="contained"
        color="primary"
        style={{ width: "200px", marginLeft: "100px", marginBottom: "10px" }}
      >
        Send
      </Button>
    </form>
  );
}
