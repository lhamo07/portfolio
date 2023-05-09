import React from "react";
import profileImg from "../assets/images/me.png";
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
          <div className="row">
            <div className="col-sm-9 col-md-6">
              <div className="col">
                <p className="text-justify">
                  "Hello! I'm John, a Frontend Developer with 6+ years of
                  experience building high-quality websites and web applications
                  using modern technologies such as React, Angular, and VueJS. I
                  specialize in creating interactive, responsive, and
                  user-friendly interfaces that deliver results for businesses.
                  I have worked with clients across industries and take pride in
                  my ability to understand their requirements and communicate
                  effectively. I am a problem solver and a team player who
                  enjoys collaborating with designers, backend developers, and
                  other stakeholders. My mission is to create web experiences
                  that delight users and exceed client expectations. I am always
                  on the lookout for exciting new projects, and I would love to
                  work with you. Feel free to explore my portfolio and get in
                  touch to discuss your project needs."
                </p>
              </div>
              <div className="col">
                {" "}
                <span>Name</span> : Tenzin Lhamo
                <br />
                <span>Email</span> : tenxin2016@gmail.Com
                <br />
                <span>From</span> : Kathmandu,Nepal
                <br />
                <button type="button" className="btn btn-secondary">
                  download CV
                </button>
              </div>
            </div>
            <div className="col-sm-3 col-md-6 ps-4 pe-4 text-end">
              <img className=" img-fluid" src={profileImg} alt="profile" />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="py-10 bg-lgt">
        <div className="container">
          {" "}
          <h1 className="fw-600 text-center">
            KNOW <span style={{ color: "#107cdb" }}>ME MORE</span>
          </h1>
          <img className="profile-image " src={profileImg} alt="profile" />
          <div class="main-containt">
            <div className="left-div mt-200 ">
              {" "}
              <h3>I'm Tenzin Lhamo, a web Developer</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                consequuntur facilis reiciendis maiores commodi voluptate
                perferendis, quod obcaecati aperiam eius. Earum velit accusamus
                debitis praesentium tenetur sequi excepturi repellat distinctio.
              </p>
            </div>
            <div className="right-div">
              <div className="my-detail">
                <span>Name</span> : Tenzin Lhamo
                <br /> <span>Email</span> : tenxin2016@gmail.Com <br />{" "}
                <span>From</span> : Kathmandu,Nepal
                <br />
              </div>
              <div className="pt-4">
                <button type="button " className="btn btn-primary">
                  download CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default About;
