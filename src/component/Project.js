import React from "react";
import useTheme from "../hooks/useTheme";
import popal from "../assets/images/popal.png";
import emailPipeline from "../assets/images/knowitall.png";
import ProjectModal from "./ProjectModal";
import portfolio from "../assets/images/gandalfInsight.png";
import popalbanner from "../assets/images/popal-bnr.png";

import { useState } from "react";
import Modal from "react-bootstrap/Modal";
const Project = () => {
  const [modalData, setModalData] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const showProjectDetail = () => {
    <ProjectModal />;
  };
  const { mode } = useTheme();
  return (
    <section id="projects" className={`bg_color ${mode}`}>
      <div className="py-4 ">
        <div className="container">
          <div className="row ">
            <h2 className="text-center">
              {" "}
              MY<span className="colorTitle">WORK</span>{" "}
            </h2>
          </div>
          <div className="row">
            <div className="col-4 rounded first-project " onClick={handleShow}>
              <img className="image img-fluid" src={popal} alt="" />
              <div className="showModal">
                <div className="text">POPal</div>
              </div>
            </div>
            <div className="col-4">
              <img className="image img-fluid" src={emailPipeline} alt="" />
            </div>
            <div className="col-4">
              <img className=" img-fluid" src={portfolio} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="py-10 bg-lgt">
        <div className="container">
          <h1 className="fw-600 text-center">
            MY <span style={{ color: "#107cdb" }}>WORKS</span>
          </h1>
          <p className="project-detail">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            architecto. Fuga minus nostrum consequatur nemo aliquam ex harum
            unde? Molestias eveniet quam est placeat quisquam animi? Facilis
            laborum optio numquam.
          </p>
        </div>
      </div> */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-center pt-3 w-100">POPal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img className=" h-100 img-fluid" src={popalbanner} alt="" />
              </div>
              <div className="col-6">
                <h3>Project Info</h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                rem explicabo dolore nulla quidem cupiditate fugiat aut ipsa
                fugit dolor id, cumque, atque quia, sapiente libero odit facilis
                error possimus.
                <h4 className="font-weight-600">Project Detail</h4>
                <ul>
                  <li>
                    <span>Client:</span>Sushil
                  </li>
                  <li>
                    <span>Technologies:</span>HTML,CSS,ReactJS,python
                  </li>
                  <li>
                    <span>Date:</span>
                  </li>
                  <li>
                    <span>URL:</span>https://popal.pro/
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>{" "}
    </section>
  );
};

export default Project;
