import React from "react";

export const FormComponent = () => {
  return (
    <form className="mt-1 d-flex">
      <input
        type="search"
        className="form-control me-2"
        placeholder="Enter your name project"
        aria-label="Search"
      />
      <input
        type="date"
        className="form-control me-2"
        placeholder="Enter your date project"
        aria-label="Search"
      />
      <button className="btn btn-success" type="submit">
        Search
      </button>
    </form>
  );
};
