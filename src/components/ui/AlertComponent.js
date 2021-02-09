import React from "react";

export const AlertComponent = ({ typeAlert, msg }) => {
  return (
    <div className={`alert ${typeAlert}`} role="alert">
      { msg }
    </div>
  );
};
