import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/style.scss";

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
    <section id="contact" className={` ${mode}`}>
      <div className="py-4">
        <div className="container">
          <h2 className="text-center">
            KNOW <span className="colorTitle">ME </span> MORE
          </h2>
          <div className="d-flex justify-content-center">
            <form
              ref={form}
              onSubmit={sendEmail}
              className={`contact-form ${mode} `}
            >
              <p>
                Feel free to Contact me by submitting the form below and I will
                get back to you as soon as possible
              </p>
              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="formGroupExampleInput" className="form-label">
                    Name*
                  </label>
                  <input
                    type="text"
                    className={`form-control ${mode}`}
                    placeholder=""
                    required
                    name="user_name"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="formGroupExampleInput" className="form-label">
                    Email*
                  </label>
                  <input
                    type="email"
                    className={`form-control ${mode}`}
                    placeholder=""
                    required
                    name="user_email"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Subject*
                </label>
                <input
                  type="text"
                  className={`form-control ${mode}`}
                  placeholder=""
                  required
                  name="subject"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Description*
                </label>
                <textarea
                  className={`form-control ${mode}`}
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
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
