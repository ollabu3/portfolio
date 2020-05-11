import React from "react";

function ProjectBox({ list }) {
  //   console.log(list);
  return (
    <div>
      <div>{list.name}</div>
      <div>{list.position}</div>
      <p>{list.term}</p>
      <div>{list.detail}</div>
      <div></div>
    </div>
  );
}

export default ProjectBox;
