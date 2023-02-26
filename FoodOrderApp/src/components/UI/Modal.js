import React, { Fragment } from "react";
import  ReactDOM  from "react-dom";
import classes from "./Modal.module.css";

//we have two extra components inside the Modal component because theyre very tiny components
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onCloseCart}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

//Where to show the portal
const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onCloseCart={props.onCloseCart}/>, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};
  //This is how i would be doin it if i wasnt using react Portals
  // return <Fragment>
  //     <BackDrop/>
  //     <ModsalOverlay>{props.children}</ModsalOverlay>
  // </Fragment>


export default Modal;
