import React from "react";
export const SpinnerComponent = () => {
  return (
    <div className="spinner-content">   
      <div className="hijo spinner-grow text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
