import React from "react";
import Card from "react-bootstrap/Card";

import certificate1 from "../assets/images/ibmcertificate.jpeg";
import certificate2 from  "../assets/images/advReact.jpeg"
import certificate3 from  "../assets/images/intro-to-frontend.jpg"

import useTheme from "../hooks/useTheme";
const Resume = () => {
  const openCertificate = () => {};
  const { mode } = useTheme();
  return (
    <section id="education" className={` bg_color ${mode}`}>
      <div className="py-2">
        <div className="container">
          <div className="row ">
            <h2 className="text-center">RESUME </h2>
            <h4>EDUCATION</h4>
            <div className="col-6">
              <Card className={`h-100 ${mode} mb-4`}>
                <Card.Body>
                  <p className="badge bg-primary ">2017-2022</p>
                  <Card.Title>
                    Computer Science & Information Technology
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Tribhuvan University
                  </Card.Subtitle>
                  <Card.Text>
                  As a graduate with a degree in Computer Science & Information Technology from Tribhuvan University, I have acquired a comprehensive understanding of both theoretical concepts and practical skills essential to the field. Through rigorous coursework, hands-on projects, and practical experiences, I have honed my abilities in areas such as programming languages, database management, networking, software engineering, and system analysis. My education has equipped me with the necessary knowledge and expertise to tackle real-world challenges in the dynamic and evolving landscape of technology.                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-6">
              <Card className={` h-100 ${mode} mb-4`} onClick={openCertificate}>
                <Card.Body>
                  <p className="badge bg-primary ">2014-2016</p>
                  <Card.Title>High School (+2 Science)</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Central School For Tibetans Mussoorie
                  </Card.Subtitle>
                  <Card.Text>
                  As a graduate of Central School for Tibetans in Mussoorie, I have a strong foundation in various subjects, including science. Throughout my high school education, I excelled academically and participated actively in extracurricular activities. My coursework not only provided me with a solid understanding of core subjects like mathematics, physics, chemistry, and biology but also cultivated critical thinking, problem-solving, and teamwork skills. Additionally, I engaged in extracurricular activities such as sports, clubs, and community service, further enhancing my leadership abilities and interpersonal skills. My time at Central School for Tibetans has prepared me to pursue higher education and excel in my chosen field.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="row">
            <h4>CERTIFICATION</h4>
            <div className="col-4 mb-4 p-4">
              <div className="certification-img text-center mb-4">
                <img
                  className="img-fluid  rounded  "
                  src={certificate3}
                  alt="profile"
                />
              </div>
            </div>
            <div className="col-4 mb-4 p-4">
              <div className="certification-img text-center mb-4">
                <img
                  className="img-fluid  rounded  "
                  src={certificate1}
                  alt="profile"
                />
              </div>
            </div>

            <div className="col-4 mb-4 p-4">
              {" "}
              <div className="certification-img text-center">
                <img
                  className="img-fluid  rounded "
                  src={certificate2}
                  alt="profile"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <h1 className="fw-600 text-center">
        MY <span style={{ color: "#107cdb" }}>RESUME</span>
      </h1>
        <div className="left-div ml-2">
          <h2>Education</h2>
          <Card className={`${mode}`}>
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
          <Card className={`${mode}`}>
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
          <Card className={`experience ${mode}`}>
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
      <h2>Skills</h2>
      <div className="main-containt">
        <div className="left-div">
          <p>JavaScript</p>80%
          <ProgressBar now={80} />
          <p>HTML/CSS</p>85%
          <ProgressBar now={85} />
        </div>
        <div className="right-div">
          {" "}
          <p>Angular</p>70%
          <ProgressBar now={70} />
          <p>React JS</p>70%
          <ProgressBar now={70} />
          <p>Bootstrap</p>90%
          <ProgressBar now={90} />
        </div>
      </div> */}
      </div>
    </section>
  );
};

export default Resume;
