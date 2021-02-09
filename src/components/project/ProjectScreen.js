import React from "react";
import { DetailProject } from "./DetailProject";
import { ProjectsList } from "./ProjectsList";

export const ProjectScreen = () => {
  return (
    <div className="row">
      <div className="col-4">
        <ProjectsList />
      </div>
      <div className="col-8">
        <DetailProject />
      </div>
    </div>
  );
};
