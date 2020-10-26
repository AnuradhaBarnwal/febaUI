import React, { Component } from 'react';
// import image1 from './assets/img/img1.jpg'
// import image2 from './assets/img/img2.jpg'
// import image3 from './assets/img/img3.jpg'
// import image4 from './assets/img/img4.jpg'
// import image5 from './assets/img/img5.jpg'
// import image6 from './assets/img/img6.jpg'
// import image7 from './assets/img/img7.jpg'
// import image8 from './assets/img/img8.jpg'
// import image9 from './assets/img/img9.jpg'
// import image10 from './assets/img/img10.jpg'
import './Row.css'
import Cards from "./components/Cards/Cards";
import Modal from "./components/UI/Modal/Modal";
import Register from './components/Register/Register';
import Page from './components/Pagination/Pagination';

class Row extends Component {

    state = {
        isModalOpen: false
    }

    cardClickHandler = () => {
        this.setState({ isModalOpen: true });
    }

    closeModalHandler = () => {
        this.setState({ isModalOpen: false });
    }

    render() {

        var vendor = "SUPER VENDOR"

        return (
            <div>

                {this.state.isModalOpen &&
                    <Modal>
                        <Register click={this.closeModalHandler} />
                    </Modal>}
                <div className="wrapper">
                    <p className="heading">Bridal Makeup Artist</p>
                    <p>Showing <b>160+ results</b></p>


                    <Cards click={this.cardClickHandler} />
                    <Page/>
                </div>
            </div>


        );
    }
}

export default Row;