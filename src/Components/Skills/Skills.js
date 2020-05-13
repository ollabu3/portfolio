import React, { useState } from "react";
import "./Skills.css";
import SkillBox from "./Components/SkillBox";
import { SkillsData } from "./Components/SkillsData";

import { Container, Row, Col } from "react-grid-system";

function Skills() {
  const [skillsData] = useState(SkillsData);
  return (
    <section className="skills_Section" id="c">
      <div className="skills">
        <div className="sklls_Title">Skills</div>
      </div>
      <Container>
        <Row>
          {skillsData.map((list) => (
            <Col sm={4} key={JSON.stringify(list.id)}>
              <SkillBox list={list} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
