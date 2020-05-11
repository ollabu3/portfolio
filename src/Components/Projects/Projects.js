import React, { useState } from "react";
import "./Projects.css";
import { Container, Row, Col } from "react-grid-system";
import { ProjectsData } from "./Components/ProjectsData";
import ProjectBox from "./Components/ProjectBox";

function Projects() {
  const [projectsData] = useState(ProjectsData);
  return (
    <section className="projects_Section">
      <div className="projects">
        <div className="projects_Title">Projects</div>
      </div>
      <Container>
        {projectsData.map((list) => (
          <div key={JSON.stringify(list.id)}>
            <ProjectBox list={list} />
          </div>
        ))}
      </Container>
    </section>
  );
}

export default Projects;
