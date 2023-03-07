import React from "react";

import "./Modal.css";
import Wrapper from "../../../HOC/Wrapper";

const Modal = (props) => {
  return (
    <Wrapper>
      <div className="modal">{props.children}</div>
    </Wrapper>
  );
};

export default Modal;
