import React, { Component } from 'react';
import './Row.css'
import Cards from "../Cards/Cards";
import Modal from "../UI/Modal/Modal";
import Register from '../Register/Register';
import Page from '../Pagination/Pagination';
import { Button } from "reactstrap";

class Row extends Component {

    state = {
        isModalOpen: false,
        status: null,
        userAdded: false,
    }

    submitRegistrationStart = () => {
        this.setState({ status: null, userAdded: false });
    }

    setRegistrationMessage = (status) => {
        this.setState({ status: status, userAdded: true });
    }


    registerSuccess = () => {
        this.setState({ isModalOpen: false });
    }

    registerFailed = () => {
        this.setState({ status: null, userAdded: false });
    }

    cardClickHandler = () => {
        this.setState({ isModalOpen: true, userAdded: false });
    }

    closeModalHandler = () => {
        this.setState({ isModalOpen: false });
    }

    render() {

        var vendor = "SUPER VENDOR"

        return (
            <div>
                <Modal show={this.state.isModalOpen}>
                    {!this.state.userAdded ?
                        <Register
                            start={this.submitRegistrationStart}
                            setMessage={this.setRegistrationMessage}
                            click={this.closeModalHandler} />
                        :
                        <div className="message-box">
                            <h1>{this.state.status ? "You have been registered successfully" : "There was some error"}</h1>
                            {this.state.status ?
                                <Button onClick={this.registerSuccess}>Browse More</Button> :
                                <Button onClick={this.registerFailed}>Please Try Again</Button>}
                        </div>
                    }
                </Modal>
                <div className="wrapper">
                    <p className="heading">Bridal Makeup Artist</p>
                    <p>Showing <b>160+ results</b></p>


                    <Cards click={this.cardClickHandler} />
                    <Page />
                </div>
            </div>


        );
    }
}

export default Row;