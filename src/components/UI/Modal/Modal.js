import React from "react";

import "./Modal.css";
import Wrapper from "../../../HOC/Wrapper";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => {
  return (
    <Wrapper>
      <Backdrop show={props.show} removeModal={props.closeModal} />
      <div className="modal">{props.children}</div>
    </Wrapper>
  );
};

export default Modal;
