import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/style.scss";
import {
  FaMobile,
  FaInstagram,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";
import useTheme from "../hooks/useTheme";
const Contact = () => {
  const { mode } = useTheme();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_f77wbql",
        "template_y7rbn4b",
        form.current,
        "XHqbJU3rtUJgiBLSx"
      )
      .then(
        (result) => {
          // toast.success("Email Sent Successful", {
          //   position: toast.POSITION.TOP_RIGHT,
          //   autoClose: 1000,
          // });
          // console.log(result.text);
        },
        (error) => {
          // console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact" className={`${mode}`}>
      <h1 className="fw-600 text-center">
        GET <span style={{ color: "#107cdb" }}>IN TOUCH</span>
      </h1>
      <div className="contact-container">
        <div>
          <p className="contact-note ">
            {" "}
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </p>

          <form ref={form} onSubmit={sendEmail}>
            <div className="profile-form ">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="formGroupExampleInput" className="form-label">
                    Name*
                  </label>
                  <input
                    type="text"
                    className="form-control responsive-form"
                    placeholder=""
                    required
                    name="user_name"
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="formGroupExampleInput" class="form-label">
                    Email*
                  </label>
                  <input
                    type="email"
                    className="form-control responsive-form"
                    placeholder=""
                    required
                    name="user_email"
                  />
                </div>
              </div>

              <div className=" mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Subject*
                </label>
                <input
                  type="text"
                  className="form-control responsive-form"
                  placeholder=""
                  required
                  name="subject"
                />
              </div>

              <div className=" mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Description*
                </label>
                <textarea
                  className="form-control responsive-form"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  required
                  name="message"
                ></textarea>
              </div>
              <div className="mb-3">
                <button
                  type="submit"
                  value="Send"
                  className="btn btn-primary d-grid mt-4 responsive-form"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
