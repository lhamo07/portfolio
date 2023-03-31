import React from "react";
import profileImg from "../assets/images/profile.png";
import useTheme from "../hooks/useTheme";
const About = () => {
  const { mode } = useTheme();

  return (
    <section id="about" className={`${mode}`}>
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
    </section>
  );
};

export default About;
