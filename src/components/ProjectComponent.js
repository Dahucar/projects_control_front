import React, { useContext, useEffect } from "react";
// UI Components
import { NavbarComponent } from "./ui/NavbarComponent";
import { SpinnerComponent } from "./ui/SpinnerComponent";
// Components
import { DetailProject } from "./project/DetailProject";
import { FormComponent } from "./project/FormComponent";
import { ProjectsList } from "./project/ProjectsList";
// Helpers 
import { getProject } from "../helpers/getProjects";
import { initialState } from "../helpers/initialState";
// Context API
import { ProjectContex } from "../projectContext/ProjectContex";

export const ProjectComponent = () => {
  const { projectState, setProjectState } = useContext(ProjectContex);
  const processFetch = async () => {
    const response = await getProject();
    const body = await response.json();
    // success response
    if (body.code == 200) {
      const { proyecto, subproyecto } = body.information;
      setProjectState({
        loading: false,
        projectName: proyecto,
        projectList: [...subproyecto],
      });
    } else {
      setProjectState({
        ...initialState,
        loading: false,
        msg: body.msg,
      });
    }
  };

  useEffect(() => {
    processFetch();
  }, []);

  const { loading, projectList } = projectState;
  return (
    <div>
      <NavbarComponent />
      <section className="container-fluid">
        <FormComponent />
        <div className="card mt-1">
          <div className="card-body">
            {!loading ? (
              <div className="row">
                <div className="col-4">
                  <ProjectsList />
                </div>
                <div className="col-8">
                  <DetailProject projects={projectList} />
                </div>
              </div>
            ) : (
              <SpinnerComponent />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
