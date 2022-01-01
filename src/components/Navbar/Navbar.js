import React from 'react';
import Blahbble from '../../assets/blahbble-logo.png';
import './Navbar.css';

function Navbar() {

    function handleClick(e) {
        let sectionName = e.target.innerText.toLowerCase();
        window.location.pathname = `/topstories/${sectionName}`
    }


    return (
        <div className="navbar">
            <a href="/" className="navbar__logo--container">
                <img src={Blahbble} alt="" />
                <h1>News</h1>
            </a>
            <div className="navbar__sections">
                <div className="navbar__section1">
                    <p onClick={(e) => {handleClick(e)}}>World</p>
                    <p onClick={(e) => {handleClick(e)}}>US</p>
                    <p onClick={(e) => {handleClick(e)}}>Politics</p>
                    <p onClick={(e) => {handleClick(e)}}>Automobiles</p>
                    <p onClick={(e) => {handleClick(e)}}>Business</p>
                    <p onClick={(e) => {handleClick(e)}}>Opinion</p>
                    <p onClick={(e) => {handleClick(e)}}>Technology</p>
                    <p onClick={(e) => {handleClick(e)}}>Science</p>
                    <p onClick={(e) => {handleClick(e)}}>Health</p>
                </div>
                <div className="navbar__section2">
                    <p onClick={(e) => {handleClick(e)}}>Sports</p>
                    <p onClick={(e) => {handleClick(e)}}>Arts</p>
                    <p onClick={(e) => {handleClick(e)}}>Books</p>
                    <p onClick={(e) => {handleClick(e)}}>Movies</p>
                    <p onClick={(e) => {handleClick(e)}}>Food</p>
                    <p onClick={(e) => {handleClick(e)}}>Travel</p>
                    <p onClick={(e) => {handleClick(e)}}>Magazine</p>
                    <p onClick={(e) => {handleClick(e)}}>Theater</p>
                    <p onClick={(e) => {handleClick(e)}}>NYregion</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar;