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
            "As a passionate programmer, I excel in JavaScript, ReactJS, Angular, HTML, and CSS, adeptly solving code bugs and crafting dynamic web solutions. My expertise extends to AWS services like CodeCommit, CodePipeline, S3 bucket, and Cognito for seamless deployment and secure user management. With a strong foundation in Git and GitHub, I prioritize efficient collaboration and version control. Eager to learn, I continually embrace new technologies to drive innovation and exceed expectations in the fast-paced tech industry."
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
