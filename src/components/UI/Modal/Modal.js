import React from "react";
import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => {

    const classArray = [classes.Modal];
    if (props.show) {
        classArray.push(classes.ModalOpen);
    } else {
        classArray.push(classes.ModalClosed);
    }

    return (
        <div >
            {props.show && <Backdrop />}
            <div className={classArray.join(" ")}>
                {props.children}
            </div>
        </div >

    )
}

export default Modal