import React from "react";

export const ProjectsList = ({ projectName, projectList = [] }) => {
  return (
    <div className="content-project mb-2">
      <div className="project">{projectName}</div>
      {projectList.map((item, i) => (
        <div key={i} className="subproject">
          {item.subproyecto}
        </div>
      ))}
    </div>
  )
}
