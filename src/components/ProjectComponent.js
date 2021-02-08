import React, { useEffect, useState } from "react";
import { NavbarComponent } from "./ui/NavbarComponent";
import { SpinnerComponent } from "./ui/SpinnerComponent";

import { DetailProject } from "./project/DetailProject";
import { FormComponent } from "./project/FormComponent";
import { ProjectsList } from "./project/ProjectsList";

import { getProject } from "../helpers/getProjects";

const initialState = {
  loading: true,
  msg: "",
  projectName: "",
  projectList: [],
};

export const ProjectComponent = () => {
  const [project, setProject] = useState(initialState);
  const processFetch = async () => {
    const response = await getProject();
    const body = await response.json();
    // success response
    if (body.code == 200) {
      const { proyecto, subproyecto } = body.information;
      setProject({
        loading: false,
        projectName: proyecto,
        projectList: [...subproyecto],
      });
    } else {
      setProject({
        ...initialState,
        loading: false,
        msg: body.msg,
      });
    }
  };

  useEffect(() => {
    processFetch();
  }, []);

  const { loading, projectName, projectList } = project;
  return (
    <div>
      <NavbarComponent />
      <section className="container-fluid">
        <FormComponent setProject={setProject} loading={loading} />
        <div className="card mt-1">
          <div className="card-body">
            {!loading ? (
              <div className="row">
                <div className="col-4">
                  <ProjectsList
                    projectName={projectName}
                    projectList={projectList}
                  />
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
