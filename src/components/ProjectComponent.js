import React, { useContext, useEffect } from "react";
// UI Components
import { NavbarComponent } from "./ui/NavbarComponent";
import { SpinnerComponent } from "./ui/SpinnerComponent";
import { AlertComponent } from "./ui/AlertComponent";
// Components
import { FormComponent } from "./project/FormComponent";
import { ProjectScreen } from "./project/ProjectScreen";
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
    if(body.code != 500){
      if (body.code == 200) {
        const { proyecto, subproyecto } = body.information;
        setProjectState({
          loading: false,
          msg: '',
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
    }else{
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
