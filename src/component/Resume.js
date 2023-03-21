import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Resume = () => {
  const downloadCV = () => {};
  return (
    <section id="resume">
      <h1 className="fw-600 text-center">
        MY <span style={{ color: "#154c79" }}>RESUME</span>
      </h1>

      <Card>
        <Card.Body>
          <Card.Title>Resume</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">John Doe</Card.Subtitle>
          <Card.Text>
            Here you can provide a brief summary of your resume or your
            professional background.
          </Card.Text>
          <Button variant="primary" href="path/to/resume.pdf" target="_blank">
            Download
          </Button>
        </Card.Body>
      </Card>
    </section>
  );
};

export default Resume;
