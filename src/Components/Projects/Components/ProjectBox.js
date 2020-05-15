/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./ProjectBox.css";
import { Container, Row, Col } from "react-grid-system";

function ProjectBox({ list }) {
  return (
    <Container>
      <Row className="Box">
        <Col md={4}>
          {list.name === "MukBank(먹뱅크)" ? (
            <img
              className="projectImg"
              src={require("./ProjectsImg/MukBank.png")}
            />
          ) : (
            <img
              className="projectImg"
              src={require("./ProjectsImg/WordMon.png")}
            />
          )}
        </Col>
        <Col md={8}>
          <div className="textDiv">
            <div className="name">{list.name}</div>
            <div className="position">position | {list.position}</div>
            <p className="term">{list.term}</p>
            <div className="detail">{list.detail}</div>

            {list.name === "MukBank(먹뱅크)" ? (
              <div>
                <a href="https://github.com/ollabu3/MukBank-client">
                  <img
                    className="logoImg"
                    src={require("./ProjectsImg/github_Logo.png")}
                  />
                </a>
                <a href="https://www.notion.so/3-ToNaEat-MukBank-73a4f6f672fd456683659ab84dc02950">
                  <img
                    className="logoImg"
                    src={require("./ProjectsImg/notion_Logo.png")}
                  />
                </a>
              </div>
            ) : (
              <div>
                <a href="https://github.com/ollabu3/Wordmon">
                  <img
                    className="logoImg"
                    src={require("./ProjectsImg/github_Logo.png")}
                  />
                </a>
                <div></div>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProjectBox;
//
