import React from "react";
import useTheme from "../hooks/useTheme";

const Project = () => {
  const { mode } = useTheme();
  return (
    <section id="projects" className={`${mode}`}>
      <h1 className="fw-600 text-center">
        MY <span style={{ color: "#107cdb" }}>WORKS</span>
      </h1>
      <p className="project-detail">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
        architecto. Fuga minus nostrum consequatur nemo aliquam ex harum unde?
        Molestias eveniet quam est placeat quisquam animi? Facilis laborum optio
        numquam.
      </p>
    </section>
  );
};

export default Project;
