import React, { useState } from "react";
import "./Projects.css";
import { ProjectsData } from "./Components/ProjectsData";
import ProjectBox from "./Components/ProjectBox";

function Projects() {
  const [projectsData] = useState(ProjectsData);

  return (
    <section className="projects_Section">
      <div className="projects">
        <div className="projects_Title">Projects</div>
      </div>
      {projectsData.map((list) => (
        <div className="ProjectBox" key={JSON.stringify(list.id)}>
          <ProjectBox list={list} />
        </div>
      ))}
    </section>
  );
}

export default Projects;
