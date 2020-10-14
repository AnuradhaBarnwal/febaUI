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
            <div className="filters">
                <button className="citybtn"><label className="labelbtn">City : All</label></button>
                <button className="categorybtn"><label className="labelbtn">Category: Bridal Makeup Artist</label></button>
            </div>
        </div>
    );
}

export default Filter;