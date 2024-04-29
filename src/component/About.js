import React from "react";
import profileImg from "../assets/images/Tenzin.png";
import useTheme from "../hooks/useTheme";
const About = () => {
  const { mode } = useTheme();

  return (
    <section id="about" className={` ${mode}`}>
      <div className="py-6 bg-lgt">
        <div className="container">
          <div className="row">
            <h2 className="text-center">
              KNOW <span className="colorTitle">ME </span> MORE
            </h2>
          </div>
          <div className="row py-3">
            <div className="col-sm-8 col-md-6">
              <p>
                "Hello! I'm Tenzin, a Frontend Developer with 1+ years of
                experience building web applications using modern technologies
                such as React, Angular. I specialize in creating interactive,
                responsive, and user-friendly interfaces that deliver results
                for businesses. I am a problem solver and a team player who
                enjoys collaborating with designers, backend developers, and
                other stakeholders. My mission is to create web experiences that
                delight users and exceed client expectations. I am always on the
                lookout for exciting new projects, and I would love to work with
                you. Feel free to explore my portfolio and get in touch to
                discuss your project needs."
              </p>
              <span className="fw-600 me-2">Name</span> : Tenzin Thakuri
              <br />
              <span className="fw-600 me-2">Email</span> : tenzin.thakuri01@gmail.Com
              <br />
              <span className="fw-600 me-2">From</span> : New York, USA
              <br />
              <div className="py-3">
                {/* <button
                  type="button"
                  className="button btn btn-primary rounded-pill"
                >
                  download CV
                </button> */}

                <a href="/FEresume-3.pdf" download >
                  <button type="button" className="button btn btn-primary rounded-pill">
                    Download CV
                  </button>
                </a>
              </div>
            </div>
            <div className="col-sm-4 d-flex justify-content-end">
              <img className="img-fluid" src={profileImg} alt="profile" height="300" width="300"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
