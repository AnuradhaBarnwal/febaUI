import React from "react";
import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => {

    return (
        <div >
            <Backdrop />
            <div className={classes.Modal}>
                {props.children}
            </div>
        </div >

    )
}

export default Modal