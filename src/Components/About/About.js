import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about_Section">
      <div className="about_Container">
        <div className="about_Title">
          <h1 className="title">About Me</h1>
        </div>
        <div className="about_textBox">
          <div className="about_Text">
            <p>
              안녕하세요! 이윤주 입니다. 현재 프런트엔드 엔지니어를 목표로
              프로그래밍을 공부하고 있습니다.
            </p>
            항상 개발에 대한 열정을 가지며 새로운 기술을 익힐 수 있도록 노력하고
            있습니다. 또한 꾸준히 공부하여 코드 문제 해결 능력을 향상시키고,
            구성원들과의 원할한 소통능력을 갖출 수 있는 개발자가 되고 싶습니다.
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
