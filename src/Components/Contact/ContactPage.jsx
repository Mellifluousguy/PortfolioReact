import React, { useState } from "react";
import emailjs from "emailjs-com";
import SocialMedia from "./SocialMedia";
import { Link } from "react-router-dom";
import { Snackbar } from "@mui/joy";
import "./style.css"

const ContactPage = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [color, setColor] = useState("");

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wecpxs9",
        "template_qnb0eml",
        e.target,
        "Qo14J9B7pZBIzA_IA"
      )
      .then(
        (result) => {
          setSnackbarMessage("Message Sent Successfully!!!");
          setSnackbarSeverity("success");
          setSnackbarOpen(true);
          setColor("success");
        },
        (error) => {
          setSnackbarMessage(`Message sending failed!!`);
          setSnackbarSeverity("error");
          setSnackbarOpen(true);
          console.error("Email sending failed:", error);
          setColor("danger");
        }
      );
    e.target.reset();
  };

  return (
    <div id="contactPage">
      <div className="graphicsContainer">
        <div className="graphics">
          <div className="content">
            <div className="message">
              <div>
                <h2>Contact Me</h2>
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      rows="4"
                      required
                    ></textarea>
                  </div>
                  <button type="submit">Send Message</button>
                </form>
              </div>
            </div>
            <div className="SocialMedia">
              <SocialMedia
                title="Instagram"
                img="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                link="https://instagram.com/mellifluousguy_"
              />
              <SocialMedia
                title="Twitter"
                img="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1719619200&semt=ais_user"
                link="https://twitter.com/mellifluousguy_"
              />
              <SocialMedia
                title="LinkedIn"
                img="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png"
                link="https://www.linkedin.com/in/mellifluousguy/"
              />
              <SocialMedia
                title="GitHub"
                img="https://static-00.iconduck.com/assets.00/github-icon-2048x2048-qlv5m092.png"
                link="https://github.com/mellifluousguy"
              />
            </div>
          </div>
          <Link to="/about">
            <li>{"About Me ≻"}</li>
          </Link>
        </div>
      </div>
      <Snackbar className="Notification"
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        variant="solid"
        color={color}
      >
        {snackbarMessage}
      </Snackbar>
    </div>
  );
};

export default ContactPage;
