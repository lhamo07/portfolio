import React from "react";
const About = () => {
  return (
    <section id="about">
      <div class="main-containt">
        <div class="left-div ml-2">
          {" "}
          <h3>I'm a Freelance UI/UX Designer and Developer</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            consequuntur facilis reiciendis maiores commodi voluptate
            perferendis, quod obcaecati aperiam eius. Earum velit accusamus
            debitis praesentium tenetur sequi excepturi repellat distinctio.
          </p>
        </div>
        <div class="right-div">
          {" "}
          <span style={{ color: "#000000", fontWeight: "200" }}>Name</span>
          :Tenzin Lhamo
          <br />{" "}
          <span style={{ color: "#000000", fontWeight: "200" }}>Email</span>
          :tenxin2016@gmail.Com <br />{" "}
          <span style={{ color: "#000000", fontWeight: "200" }}>From</span>
          :Kathmandu,Nepal
        </div>
      </div>
      <button type="button" className="btn btn-primary">
        download CV
      </button>
    </section>
  );
};

export default About;
