import React from "react";
import "../styles/style.scss";
import useTheme from "../hooks/useTheme";
import { Link } from "react-scroll";

import {
  FaMobile,
  FaInstagram,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";
const Footer = () => {
  const { mode } = useTheme();
  return (
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
              <FaLinkedin size={30} />
            </a>
          </span>
          <span>
            <a
              href="https://github.com/lhamo07"
              target={"_blank"}
              rel="noreferrer"
            >
              {" "}
              <FaGithub size={30} />
            </a>
          </span>
          <span>
            <a href="#">
              {" "}
              <FaInstagram size={30} />
            </a>
          </span>
          <span>
            <a href="#">
              <FaFacebook size={30} />
            </a>
          </span>
        </div>
        <div className="copyright">
          <p>
            Copyright &copy; 2023{" "}
            <span style={{ color: "#107cdb", cursor: "pointer" }}>
              <Link to="home">Tenzin Lhamo</Link>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
