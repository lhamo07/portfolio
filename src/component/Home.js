import React from "react";
import { Link } from "react-scroll";
import profileImg from "../assets/images/wallpaper.jpg";
import "../styles/style.scss";
import Typewriter from "typewriter-effect";
import useTheme from "../hooks/useTheme";

const Home = () => {
  const { mode } = useTheme();
  return (
    <section id="home" className={`${mode}`}>
      <div className="mask">
        <img className="into-img" src={profileImg} alt="" />
      </div>
      <div className="content">
        {" "}
        <p>Hello, there</p>
        <h1>
          {" "}
          <Typewriter
            options={{
              strings: ["I'm a Front End Developer.", "I'm a Designer."],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <div className="text-center mt-3">
          <button className="button btn btn-outline-primary rounded-pill mt-4">
            <Link to="contact">Hire Me</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
