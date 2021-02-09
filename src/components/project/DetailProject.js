import React, { useContext } from "react";
import { TimeLineItem } from "./TimeLineItem";
import { ProjectContex } from "../../projectContext/ProjectContex";
import "../../styles/timeline.css";

export const DetailProject = () => {
  const { projectState } = useContext(ProjectContex);
  const { projectList } = projectState;

  let dateList = [];
  const showSubProject = (project, key = 0) => {
    let dateSubP = project.timestamp;
    const dateTime = dateSubP.split(" ", 1);
    const existDate = dateList.includes(dateTime[0]);
    let styleDate = null; // objeto con el estilo del elemento
    if (existDate == false) {
      dateList.push(dateTime[0]);
      styleDate = applyStyle(project.estatus);
    } else {
      styleDate = applyStyle(project.estatus, 2);
    }
    return (
      <TimeLineItem
        key={key}
        subproyecto={project.subproyecto}
        styleDate={styleDate}
      />
    );
  };

  const applyStyle = (estatus, multiply = 0) => {
    if (multiply != 0) {
      return { background: "yellow" };
    }
    if (estatus == 1) {
      return { background: "green" };
    }
    if (estatus == 0) {
      return { background: "red" };
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="timeline-content">
            {projectList.map((item, i) => showSubProject(item, i))}
          </div>
        </div>
      </div>
    </div>
  );
};
