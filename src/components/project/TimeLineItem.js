import React from "react";
export const TimeLineItem = ({ styleDate, subproyecto }) => {
  return (
    <div
      className="project-item badge rounded-pill"
      style={styleDate}
    >
      <h4>{subproyecto}</h4>
    </div>
  );
};
