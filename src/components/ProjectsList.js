import React, { useEffect, useState } from "react";
import { getProject } from "../helpers/getProjects";

export const ProjectsList = () => {
  const [project, setProject] = useState({
    loading: true,
    projectList: []
  });

  const procesFetch = async () => {
    // TODO: filtrar array inicial.
    const response = await getProject('/');
    const body = await response.json()
    const projects = body.projects;
    if(project){
      setProject({
        loading: false,
        projectList: [ ...projects ]
      });
    }
  }
  
  useEffect(() => {
    procesFetch();    
  }, [ ]);

  const { loading, projectList } = project;
  return (
    <div>
      {
      loading ? 
          (<div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>) :
          projectList.map((item, i) => (
            <div key={i} className="content-project mb-2">
              <div className="project">{item.proyecto}</div>
              <div className="subproject">A1</div>
              <div className="subproject">A2</div>
            </div>  
          ))
      }
    </div>
  );
};
