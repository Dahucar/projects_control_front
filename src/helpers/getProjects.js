import { initialState } from "./initialState";
const baseUrl = process.env.REACT_APP_API_URL;

export const getProject = (endpoint = "", data = [], method = "GET") => {
  const url = endpoint != "" ? `${baseUrl}/${endpoint}` : `${baseUrl}`;
  console.log(url);
    if (method == "GET") {
      return fetch(url, { method });
    } else {
      return fetch(url, {
        method,
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
    }
};

export const processFetch = async (endpoint = '') => {
  const response = await getProject(endpoint);
  const body = await response.json();
  // success response
  if(body.code != 500){
    if (body.code == 200) {
      const { proyecto, subproyecto } = body.information;
      return {
        loading: false,
        msg: '',
        projectName: proyecto,
        projectList: [...subproyecto],
      }
    } else {
      return {
        ...initialState,
        loading: false,
        msg: body.msg,
      }
    }
  }else{
    return {
      ...initialState,
      loading: false,
      msg: body.msg,
    }
  }
};