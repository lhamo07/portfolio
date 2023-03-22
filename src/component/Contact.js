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
const Contact = () => {
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
    <section id="contact">
      <h1 className="fw-600 text-center">
        GET <span style={{ color: "#154c79" }}>IN TOUCH</span>
      </h1>
      <div className="main-containt">
        <div className="left-div ml-2 ">
          <div className="contact-detail">
            <p>Contact Details</p>
            <FaMobile /> +977 9866322297 <br />
            <FaEnvelope /> tenxin2016@gmail.com
            <p> Social Profiles</p>
            <div>
              <FaInstagram />
              <a
                href="https://www.linkedin.com/in/tenzin-lhamo-91254a168/"
                rel="noreferrer"
                target={"_blank"}
              >
                {" "}
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/lhamo07"
                target={"_blank"}
                rel="noreferrer"
              >
                {" "}
                <FaGithub />
              </a>
              <FaFacebook />
            </div>
          </div>
        </div>
        <div class="right-div">
          <p className="contact-note ">
            {" "}
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </p>

          <form>
            <div className="col-md-12 mb-3">
              <label htmlFor="" className="form-label">
                {" "}
                Name*
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="your name"
                required
                name="user_name"
              />
            </div>
            <div className="col-md-12 mb-3">
              <label htmlFor="" className="form-label">
                {" "}
                Email*
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="your email"
                required
                name="user_email"
              />
            </div>

            <div className="col-md-12 mb-3">
              {" "}
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Description*
              </label>
              <textarea
                className="form-control"
                rows="5"
                required
                placeholder="your message"
                name="message"
              ></textarea>
            </div>

            <button
              type="submit"
              value="Send"
              className="btn btn-primary mt-4 "
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
