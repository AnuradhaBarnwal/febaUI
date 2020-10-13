import React, { Component } from 'react';
import './Nav.css'

class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <div className="ham">
                    <svg width="30px" height="30px" class="hamIcon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
                        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                    </svg>
                </div>
                <div className="logo">
                    <img src="" alt="feba-logo" />
                </div>
            </div>
        );
    }
}

export default Nav;