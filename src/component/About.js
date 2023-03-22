import React from "react";
const About = () => {
  return (
    <section id="about">
      <h1 className="fw-600 text-center">
        KNOW <span style={{ color: "#1E6AB5" }}>ME MORE</span>
      </h1>
      <div class="main-containt">
        <div className="left-div mt-200 ">
          {" "}
          <h3>I'm a Freelance UI/UX Designer and Developer</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            consequuntur facilis reiciendis maiores commodi voluptate
            perferendis, quod obcaecati aperiam eius. Earum velit accusamus
            debitis praesentium tenetur sequi excepturi repellat distinctio.
          </p>
        </div>
        <div className="right-div">
          <div className="contact-detail">
            <span style={{ color: "#000000", fontWeight: "200" }}>Name</span>
            :Tenzin Lhamo
            <br />{" "}
            <span style={{ color: "#000000", fontWeight: "200" }}>Email</span>
            :tenxin2016@gmail.Com <br />{" "}
            <span style={{ color: "#000000", fontWeight: "200" }}>From</span>
            :Kathmandu,Nepal
            <br />
          </div>
          <button type="button" className="btn btn-primary">
            download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
