import React, { useContext, useEffect } from "react";
// UI Components
import { NavbarComponent } from "./ui/NavbarComponent";
import { SpinnerComponent } from "./ui/SpinnerComponent";
import { AlertComponent } from "./ui/AlertComponent";
// Components
import { FormComponent } from "./project/FormComponent";
import { ProjectScreen } from "./project/ProjectScreen";
// Helpers 
import { processFetch } from "../helpers/getProjects";
// Context API
import { ProjectContex } from "../projectContext/ProjectContex";

export const ProjectComponent = () => {
  const { projectState, setProjectState } = useContext(ProjectContex);
  const getProcessFetch = async () => {
    const processResponse = await processFetch();
    setProjectState(processResponse);
  }

  useEffect(() => {
    getProcessFetch();
  }, []);

  const { loading, msg } = projectState;
  return (
    <div>
      <NavbarComponent />
      <section className="container-fluid">
        <FormComponent />
        <div className="card mt-1">
          <div className="card-body">
            { 
              msg != '' && (
                <AlertComponent 
                  typeAlert="alert-danger"
                  msg={ msg }   
                />
              )
            }
            {!loading && msg == '' ? (
              <ProjectScreen />
            ) : (
              <SpinnerComponent />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
