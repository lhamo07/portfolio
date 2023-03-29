import React from "react";
import useTheme from "../hooks/useTheme";

const Project = () => {
  const { mode } = useTheme();
  return (
    <section id="projects" className={`${mode}`}>
      <h1 className="fw-600 text-center">
        MY <span style={{ color: "#154c79" }}>WORKS</span>
      </h1>
    </section>
  );
};

export default Project;
