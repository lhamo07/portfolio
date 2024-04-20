import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

const Skills = () => {
  return (
    <section id="skill">
      <div className="py-4">
        <div className="container">
          <div className="row py-3">
            <h2 className="text-center ">SKILLS</h2>
            <div className="col-sm-6 col-md-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
              quidem aliquid optio excepturi! Quaerat distinctio tempora dicta
              reiciendis dolorem magni ad nobis amet necessitatibus corrupti
              excepturi, nemo repellendus vero? Non!
            </div>
            <div className="col-sm-6 col-md-6">
              <p>JavaScript</p>
              <ProgressBar now={80} label={`${80}%`} style={{ width: "80%" }} />
              <p>HTML/CSS</p>
              <ProgressBar now={85} label={`${85}%`} style={{ width: "80%" }} />
              <p>Angular</p>
              <ProgressBar now={70} label={`${70}%`} style={{ width: "80%" }} />
              <p>React JS</p>
              <ProgressBar now={70} label={`${70}%`} style={{ width: "80%" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
