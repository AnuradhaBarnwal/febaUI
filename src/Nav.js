import React, { Component } from 'react';
import logo from './assets/img/logo.png'
import './Nav.css'

class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <div className="ham">
                    <svg width="30px" height="30px" className="hamIcon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
                        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="#111"></path>
                    </svg>
                </div>
                <div className="logo">
                    <img src={logo} alt="feba-logo" />
                    <span className="logoText">Feba</span>
                </div>
            </div>
        );
    }
}

export default Nav;