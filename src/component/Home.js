import React from "react";
import { Link } from "react-scroll";
import profileImg from "../assets/images/profile.png";
import "../styles/style.scss";
const Home = () => {
  return (
    <section id="home">
      <div className="container">
        <img className="profile-image" src={profileImg} alt="profile" />

        <h1 className="mb-2">Hi, I'm Tenzin Lhamo</h1>
        <h1 className="typing-animation">Front End Developer.</h1>
      </div>
      <div className="text-center mt-3">
        <button className="btn btn-primary mt-4">
          <Link to="contact">Hire Me</Link>
        </button>
      </div>
    </section>
  );
};

export default Home;
