import React, { Component, useEffect } from 'react';
import './Filter.css'

const Filter = () => {

    const [scrolled, setScrolled] = React.useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 65) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    let filterClasses = ['filter']

    if (scrolled) {
        filterClasses.push('fixed')
    }

    return (
        <div className={filterClasses.join(" ")}>
            <span className="city"><button class="city">City : All</button></span>
            <span className="category"></span>
        </div>
    );
}

export default Filter;