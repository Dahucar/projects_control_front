import React from "react";
import { getProject } from "../helpers/getProjects";
import { useForm } from "../hooks/useForm";

export const FormComponent = ({ setProject }) => {
  const [values, handleInputChangue, resetInputsValues] = useForm({
    nameP: '',
    dateP: ''
  });

  const { nameP, dateP } = values;

  const procesFetch = async ( nameParam, dateParam ) => {
    const endpoint = nameParam != '' || dateParam != '' ? `project/${nameParam}/${dateParam}` : '';
    const response = await getProject(endpoint);
    const body = await response.json();
    if(body.code == 200){
      const { proyecto, subproyecto } = body.information;
      const values = {
        loading: false,
        projectName: proyecto,
        projectList: [ ...subproyecto ]
      }
      setProject(values);
    }else{
      setProject({loading: false, msg: body.msg, projectList: []});
    }
  }

  const handlerSubmit = (e) => {
    e.preventDefault();
    if( nameP == '' || dateP == '' ){
      return alert('Please. type the information filter.');
    }
    
    procesFetch(nameP, dateP);
    resetInputsValues();
  }
  
  return (
    <form onSubmit={ handlerSubmit } className="mt-1 d-flex">
      <input
        type="search"
        className="form-control me-2"
        placeholder="Enter your name project"
        name="nameP"
        value={ nameP }
        onChange={ handleInputChangue }
      />
      <input
        type="date"
        className="form-control me-2"
        placeholder="Enter your date project"
        name="dateP"
        value={ dateP }
        onChange={ handleInputChangue }
      />
      <button className="btn btn-success" type="submit">
        Search
      </button>
    </form>
  );
};
