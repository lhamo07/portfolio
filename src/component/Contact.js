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
        GET <span style={{ color: "#154c79" }}>IN TOUCH</span>
      </h1>
      <div className="main-containt">
        <div className="left-div ml-2 ">
          <div className="fa contact-detail">
            <p>phone</p>
            <FaMobile size={24} />{" "}
            <span style={{ marginLeft: "10px", color: "black" }}>
              +977 9866322297{" "}
            </span>
            <br />
            <p>Email</p>
            <FaEnvelope size={24} />{" "}
            <span style={{ marginLeft: "10px", color: "black" }}>
              tenxin2016@gmail.com
            </span>
            <p> Social Profiles</p>
            <div className="fa social-profile">
              <FaInstagram size={24} />
              <a
                href="https://www.linkedin.com/in/tenzin-lhamo-91254a168/"
                rel="noreferrer"
                target={"_blank"}
              >
                {" "}
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/lhamo07"
                target={"_blank"}
                rel="noreferrer"
              >
                {" "}
                <FaGithub size={24} />
              </a>
              <FaFacebook size={24} />
            </div>
          </div>
        </div>
        <div class="right-div">
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
                    className="form-control"
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
                    className="form-control"
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
                  className="form-control"
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
                  className="form-control"
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
                  className="btn btn-primary d-grid mt-4"
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
