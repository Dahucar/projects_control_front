import React, { useContext } from "react";
// Helpers
import { getProject } from "../../helpers/getProjects";
// Hooks
import { useForm } from "../../hooks/useForm";
// Context API
import { ProjectContex } from "../../projectContext/ProjectContex";

export const FormComponent = () => {
  const { projectState, setProjectState } = useContext(ProjectContex);
  const [values, handleInputChangue, resetInputsValues] = useForm({
    nameP: "",
    dateP: "",
  });

  const { nameP, dateP } = values;
  const procesFetch = async (endpoint) => {
    const response = await getProject(endpoint);
    const body = await response.json();
    if (body.code == 200) {
      const { proyecto, subproyecto } = body.information;
      const values = {
        loading: false,
        projectName: proyecto,
        projectList: [...subproyecto],
      };
      setProjectState(values);
    } else {
      setProjectState({ loading: false, msg: body.msg, projectList: [] });
    }
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    let endpoint = null;
    if (nameP == "" && dateP == "") {
      endpoint = "";
    } else {
      endpoint = `project/${nameP == "" ? "empty" : nameP}/${
        dateP == "" ? "empty" : dateP
      }`;
    }
    procesFetch(endpoint);
    resetInputsValues();
  };

  const { loading } = projectState;
  return (
    <form onSubmit={handlerSubmit} className="mt-1 d-flex">
      <input
        type="search"
        className="form-control me-2"
        placeholder="Enter your name project"
        name="nameP"
        value={nameP}
        onChange={handleInputChangue}
        disabled={loading}
      />
      <input
        type="date"
        className="form-control me-2"
        name="dateP"
        value={dateP}
        onChange={handleInputChangue}
        disabled={loading}
      />
      <button className="btn btn-success" type="submit" disabled={loading}>
        Search
      </button>
    </form>
  );
};
