import React from "react";

export const ProjectsList = ({ loading, projectName, projectList = [] }) => {
  if (loading) {
    return (
      <div class="spinner-grow text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    )
  }

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
