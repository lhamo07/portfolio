import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Resume = () => {
  const downloadCV = () => {};
  return (
    <section id="resume">
      <h1 className="fw-600 text-center">
        MY <span style={{ color: "#1e73be" }}>RESUME</span>
      </h1>

      <div class="main-containt">
        <div class="left-div ml-2">
          <h2>Education</h2>
          <Card>
            <Card.Body>
              <p className="badge bg-primary ">2017-2022</p>
              <Card.Title>Computer Science & Information Technology</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Tribhuvan University
              </Card.Subtitle>
              <Card.Text>
                Here you can provide a brief summary of your resume or your
                professional background. provide a brief summary of your resume
                or your professional background.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <p className="badge bg-primary ">2014-2016</p>
              <Card.Title>High School (+2 Science)</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Central School For Tibetans Mussoorie
              </Card.Subtitle>
              <Card.Text>
                Here you can provide a brief summary of your resume or your
                professional background.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div class="right-div">
          <h2>Experience</h2>
          <Card className="experience">
            <Card.Body>
              <p className="badge bg-primary ">2022-present</p>
              <Card.Title>Jr. Front End Developer</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Genese Solution
              </Card.Subtitle>
              <Card.Text>
                Here you can provide a brief summary of your resume or your
                professional background.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <h1>Skills</h1>
    </section>
  );
};

export default Resume;
