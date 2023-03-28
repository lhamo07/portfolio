import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/images/logo.svg";

import { Link } from "react-scroll";
const NavbarComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand>
          {" "}
          <Link to="home">
            {" "}
            <img src={logo} className="logo-home" alt="logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link
              to="home"
              className="nav-link text-lgt pe-4 cursor-pointer"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
              active
            >
              Home
            </Link>
            <Link
              to="about"
              className="nav-link text-lgt pe-4 cursor-pointer"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
            >
              About
            </Link>
            <Link
              to="projects"
              className="nav-link text-lgt pe-4 cursor-pointer"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
            >
              Projects
            </Link>
            <Link
              to="resume"
              className="nav-link text-lgt pe-4 cursor-pointer"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
            >
              Resume
            </Link>

            <Link
              to="contact"
              className="nav-link text-lgt pe-4 cursor-pointer"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
            >
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
