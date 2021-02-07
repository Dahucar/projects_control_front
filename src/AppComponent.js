import React, { useEffect, useState } from "react";
import { DetailProject } from "./components/DetailProject";
import { FormComponent } from "./components/FormComponent";
import { NavbarComponent } from "./components/NavbarComponent";
import { ProjectsList } from "./components/ProjectsList";
import { getProject } from "./helpers/getProjects";

export const AppComponent = () => {
  const initialState = {
    loading: true,
    msg: '',
    projectName: '',
    projectList: [],
  }
  const [project, setProject] = useState(initialState);

  const procesFetch = async () => {
    // TODO: filtrar array inicial.
    const response = await getProject();
    const body = await response.json()
    // success response
    if(body.code == 200){
      const { proyecto, subproyecto } = body.information;
      setProject({
        loading: false,
        projectName: proyecto,
        projectList: [ ...subproyecto ]
      });
    }else{
      setProject({
        ...initialState, 
        loading: false,
        msg: body.msg
      });
    }
  }
  
  useEffect(() => {
    procesFetch();    
  }, [ ]);

  const { loading, msg, projectName, projectList } = project;
  return (
    <div>
      <NavbarComponent />
      <section className="container-fluid">
        <FormComponent setProject={setProject} />
        <div className="card mt-1">
          <div className="card-body">
            <div className="row">
              <div className="col-4">
                {
                  projectList.length != 0 ? (
                    <ProjectsList 
                      loading={ loading } 
                      projectName={ projectName }
                      projectList={ projectList } 
                    />
                  ): 
                  <h3>{msg}</h3>
                }
              </div>
              <div className="col-8">
                <DetailProject projects={ projectList }/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
