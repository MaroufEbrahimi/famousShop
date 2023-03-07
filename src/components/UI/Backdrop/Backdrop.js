import React from "react";
import "./Backdrop.css";

const Backdrop = (props) => {
  return props.show ? (
    <div className="backdrop" onClick={props.removeModal}></div>
  ) : null;
};

export default Backdrop;
