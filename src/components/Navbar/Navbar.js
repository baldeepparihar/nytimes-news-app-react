import React from 'react';
import Blahbble from '../../assets/blahbble-logo.png';
import './Navbar.css';

function Navbar() {

    function handleClick(e) {
        let sectionName = e.target.innerText;
        window.location.pathname = `/topstories/${sectionName}`
    }
    return (
        <div className="navbar">
            <div className="navbar__logo--container">
                <img src={Blahbble} alt="" />
                <h1>News</h1>
            </div>
            <div className="navbar__sections">
                <div className="navbar__section1">
                    <p onClick={(e) => {handleClick(e)}}>World</p>
                    <p>U.S.</p>
                    <p>Politics</p>
                    <p>N.Y.</p>
                    <p>Business</p>
                    <p>Opinion</p>
                    <p>Tech</p>
                    <p>Science</p>
                    <p>Health</p>
                    <p>Sports</p>
                </div>
                <div className="navbar__section2">
                    <p>Arts</p>
                    <p>Books</p>
                    <p>Style</p>
                    <p>Food</p>
                    <p>Travel</p>
                    <p>Magazine</p>
                    <p>T Magazine</p>
                    <p>Video</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar;