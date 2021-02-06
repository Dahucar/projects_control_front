import React, { useState } from "react";
import { DetailProject } from "./components/DetailProject";
import { FormComponent } from "./components/FormComponent";
import { NavbarComponent } from "./components/NavbarComponent";
import { ProjectsList } from "./components/ProjectsList";

export const AppComponent = () => {
  const [project, setProject] = useState([]);

  return (
    <div>
      <NavbarComponent />
      {/* Main Content */}
      <section className="container-fluid">
        <FormComponent/>

        <div className="card mt-1">
          <div className="card-body">
            <div className="row">
              <div className="col-4">
                <ProjectsList/>
              </div>
              <div className="col-8">
                <DetailProject/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
