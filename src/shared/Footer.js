import React from "react";
import "../styles/style.scss";
import useTheme from "../hooks/useTheme";
import { Link } from "react-scroll";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import {
  FaMobile,
  FaInstagram,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";
import ModalPopup from "../component/ModalPopup";
const Footer = () => {
  const [modalData, setModalData] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { mode } = useTheme();
  return (
    <div>
      {" "}
      <footer>
        <div className="footer-container">
          <div className="social-profile">
            <span>
              <a
                href="https://www.linkedin.com/in/tenzin-lhamo-91254a168/"
                rel="noreferrer"
                target={"_blank"}
              >
                {" "}
                <FaLinkedin size={35} />
              </a>
            </span>
            <span>
              <a
                href="https://github.com/lhamo07"
                target={"_blank"}
                rel="noreferrer"
              >
                {" "}
                <FaGithub size={35} />
              </a>
            </span>
            <span>
              <a href="#">
                {" "}
                <FaInstagram size={35} />
              </a>
            </span>
            <span>
              <a href="#">
                <FaFacebook size={35} />
              </a>
            </span>
          </div>
          <div className="copyright">
            <div className="copyright-footer">
              <p>
                Copyright &copy; 2023{" "}
                <span style={{ color: "#107cdb", cursor: "pointer" }}>
                  <Link to="home">Tenzin Lhamo</Link>
                </span>
              </p>
            </div>
            <div className="Privacy-policy">
              <p onClick={handleShow}>Privacy Policy</p>
            </div>
          </div>
        </div>
      </footer>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className={`${mode}`}>
          <Modal.Title>Privacy Policy</Modal.Title>
        </Modal.Header>
        <Modal.Body className={`${mode}`}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. Lisque persius interesset
          his et, in quot quidam persequeris vim, ad mea essent possim iriure.
          Quidam lisque persius interesset his et, Lisque persius interesset his
          et, in quot quidam persequeris vim, ad mea essent possim iriure. In
          quot quidam persequeris vim, ad mea essent possim iriure. Quidam
          lisque persius interesset his et. Quidam lisque persius interesset his
          et, Lisque persius interesset his et. Interesset his et, Lisque
          persius interesset his et, in quot quidam persequeris vim, ad mea
          essent possim iriure. Persius interesset his et, Lisque persius
          interesset his et, in quot quidam persequeris vim, ad mea essent
          possim iriure. Quot quidam persequeris vim Quidam lisque persius
          interesset his et, Lisque persius interesset his et, in quot quidam
          persequeris vim, ad mea essent possim iriure.
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Footer;
