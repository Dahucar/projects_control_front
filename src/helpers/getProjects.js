const baseUrl = process.env.REACT_APP_API_URL;

export const getProject = (endpoint = "", data = [], method = "GET") => {
  const url = endpoint != "" ? `${baseUrl}/${endpoint}` : `${baseUrl}`;
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
