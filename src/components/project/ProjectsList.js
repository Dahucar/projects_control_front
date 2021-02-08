import React, { useContext } from "react";
import { ProjectContex } from "../../projectContext/ProjectContex";
import { ProjectItem } from "./ProjectItem";

export const ProjectsList = () => {
  const { projectState } = useContext(ProjectContex);
  const { projectName, projectList } = projectState;
  return (
    <div className="content-project mb-2">
      <div className="project">{projectName}</div>
      {projectList.map((item, i) => (
        <ProjectItem key={ i } subproyecto={ item.subproyecto } />
      ))}
    </div>
  )
}
