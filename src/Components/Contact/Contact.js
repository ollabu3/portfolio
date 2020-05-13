import React from "react";
import "./Contact.css";
import { Container, Row, Col } from "react-grid-system";

function Contact() {
  return (
    <section>
      <div className="contact" id="e">
        <div className="contact_Title">Contact</div>
        <Container className="Contatner">
          <Row>
            <Col>
              <div className="contact_name">Blog</div>
              <a href="https://velog.io/@ollabu3">
                <div className="contact_detail">velog.io/ollabu3</div>
              </a>
            </Col>
            <Col>
              <div className="contact_name">Github</div>
              <a href="https://github.com/ollabu3">
                <div className="contact_detail">github.com/ollabu3</div>
              </a>
            </Col>
            <Col>
              <div className="contact_name">Email</div>
              <a href="mailto:ollabu3@gmail.com">
                <div className="contact_detail">ollabu3@gmail.com</div>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
export default Contact;
