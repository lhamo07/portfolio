import React from "react";
import useTheme from "../hooks/useTheme";

const Project = () => {
  const { mode } = useTheme();
  return (
    <section id="projects" className={`bg_color ${mode}`}>
      <div className="py-4 ">
        <div className="container">
          <div className="row ">
            <h2 className="text-center">WORK </h2>
          </div>
          <div className="row">
            <div className="col-4 ">
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                fugiat sed eos esse ratione maxime ullam! Dolorem officia, ut
                natus tempora accusantium sit, blanditiis veniam hic ipsa
                aperiam adipisci iste.
              </p>
            </div>
            <div className="col-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                fugiat sed eos esse ratione maxime ullam! Dolorem officia, ut
                natus tempora accusantium sit, blanditiis veniam hic ipsa
                aperiam adipisci iste.
              </p>
            </div>
            <div className="col-4">
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                fugiat sed eos esse ratione maxime ullam! Dolorem officia, ut
                natus tempora accusantium sit, blanditiis veniam hic ipsa
                aperiam adipisci iste.
              </p>
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
    </section>
  );
};

export default Project;
