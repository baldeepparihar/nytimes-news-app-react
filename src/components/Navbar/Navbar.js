import React from 'react';
import Blahbble from '../../assets/blahbble-logo.png';
import './Navbar.css';

function Navbar({ getTopArticles }) {

    function handleClick(e) {
        console.log('clicked');
        let section = JSON.stringify(e.target.innerText);
        getTopArticles(e.target.innerText);
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
                    <p onClick={(e) => {handleClick(e)}}>U.S.</p>
                    <p onClick={(e) => {handleClick(e)}}>Politics</p>
                    <p onClick={(e) => {handleClick(e)}}>N.Y.</p>
                    <p onClick={(e) => {handleClick(e)}}>Business</p>
                    <p onClick={(e) => {handleClick(e)}}>Opinion</p>
                    <p onClick={(e) => {handleClick(e)}}>Tech</p>
                    <p onClick={(e) => {handleClick(e)}}>Science</p>
                    <p onClick={(e) => {handleClick(e)}}>Health</p>
                    <p onClick={(e) => {handleClick(e)}}>Sports</p>
                </div>
                <div className="navbar__section2">
                    <p onClick={(e) => {handleClick(e)}}>Arts</p>
                    <p onClick={(e) => {handleClick(e)}}>Books</p>
                    <p onClick={(e) => {handleClick(e)}}>Style</p>
                    <p onClick={(e) => {handleClick(e)}}>Food</p>
                    <p onClick={(e) => {handleClick(e)}}>Travel</p>
                    <p onClick={(e) => {handleClick(e)}}>Magazine</p>
                    <p onClick={(e) => {handleClick(e)}}>T Magazine</p>
                    <p onClick={(e) => {handleClick(e)}}>Video</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar;