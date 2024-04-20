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
  let currentDate = new Date();
  const year = currentDate.getFullYear();
  const { mode } = useTheme();
  return (
    <div className="footer">
      <div className="container">
        <div class="row">
          <div class="col-md-12 ">
            {" "}
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
        </div>
        <div class="row">
          <div class="col-md-12">
            <footer>
              <p>
                Copyright &copy; {year}
                <Link to="home"> Tenzin Lhamo</Link>
              </p>{" "}
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
