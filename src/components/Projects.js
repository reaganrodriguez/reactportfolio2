import React from "react";
import { Link ,Navigate,useNavigate} from "react-router-dom";
import { BrowserRouter ,Route, Routes } from "react-router-dom";
import Project from "./Project";
function Projects(props) {
  const projectList = props.name.map((project) => (
    <div key={project.id}>
      <h2>{project.title}</h2>
      <img src={project.imageUrl} alt={project.title} />
      <br/>
      {/* <p>ID: {project.id}</p> */}
      <Link to={`/projects/${project.id}`}>View Project</Link>
    </div>
  ));

  return (
    <>
      {projectList}

    </>
  );
}

export default Projects;
