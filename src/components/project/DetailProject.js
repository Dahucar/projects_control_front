import React from "react";
import "../../styles/timeline.css";

const initialData = {
  proyecto: "",
  subproyecto: "",
  estatus: 0,
  timestamp: "",
};

export const DetailProject = ({ projects = [] }) => {
  let dateList = [];
  const showSubProject = (project = initialData, key = 0) => {
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
      <div
        key={key}
        className="project-item badge rounded-pill"
        style={styleDate}
      >
        <h4>{project.subproyecto}</h4>
      </div>
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

  // createDateList(projects);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title mb-5">Horizontal Timeline</h4>
              <div className="timeline-content">
                {projects.map((item, i) => showSubProject(item, i))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
