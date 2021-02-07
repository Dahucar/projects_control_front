import React, { useEffect, useState } from "react";
import { DetailProject } from "./components/DetailProject";
import { FormComponent } from "./components/FormComponent";
import { NavbarComponent } from "./components/NavbarComponent";
import { ProjectsList } from "./components/ProjectsList";
import { getProject } from "./helpers/getProjects";

const initialState = {
  loading: true,
  msg: '',
  projectName: '',
  projectList: [],
}
export const AppComponent = () => {
  const [project, setProject] = useState(initialState);
  const processFetch = async () => {
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
    setTimeout(() => {
      processFetch(); 
    }, 5000); 
  }, [ ]);

  const { loading, msg, projectName, projectList } = project;
  return (
    <div>
      <NavbarComponent />
      <section className="container-fluid">
        <FormComponent setProject={setProject} loading={ loading } />
        <div className="card mt-1">
          <div className="card-body">
            {
              !loading ? (
                <div className="row">
                  <div className="col-4">
                      <ProjectsList 
                        loading={ loading } 
                        projectName={ projectName }
                        projectList={ projectList } 
                      />
                  </div>
                  <div className="col-8">
                    <DetailProject projects={ projectList }/>
                  </div>
                </div>
              ) :
              (
                <h3>Cargando...</h3>
              )
            }
          </div>
        </div>
      </section>
    </div>
  );
};
