import React, { useContext } from "react";
// Helpers
import { processFetch } from "../../helpers/getProjects";
// Hooks
import { useForm } from "../../hooks/useForm";
// Context API
import { ProjectContex } from "../../projectContext/ProjectContex";

export const FormComponent = () => {
  const { projectState, setProjectState } = useContext(ProjectContex);
  const [values, handleInputChangue, resetInputsValues] = useForm({
    nameP: "",
    dateInit: "",
    dateFinish: "",
  });

  const { nameP, dateInit, dateFinish } = values;
  const getFilterFetch = async (endpoint) => {
    const result = await processFetch(endpoint);
    setProjectState(result);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    let endpoint = null;
    if (dateInit != "" && dateFinish != "") {
      endpoint = `project/${nameP == "" ? "empty" : nameP}/${dateInit == "" ? "empty" : dateInit}/${dateFinish == "" ? "empty" : dateFinish}`;
    } else {
      endpoint = "";
    }
    getFilterFetch(endpoint);
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
        name="dateInit"
        value={dateInit}
        onChange={handleInputChangue}
        disabled={loading}
      />
      <input
        type="date"
        className="form-control me-2"
        name="dateFinish"
        value={dateFinish}
        onChange={handleInputChangue}
        disabled={loading}
      />
      <button className="btn btn-success" type="submit" disabled={loading}>
        Search
      </button>
    </form>
  );
};
