import React from "react";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <footer className="footer border-top p-4">
      <div className="container">
        <div className="copyright-txt">
          <span>
            Copyright © 2023{" "}
            <Link to="home" style={{ color: "#154c79" }}>
              Tenzin.{" "}
            </Link>
            All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
