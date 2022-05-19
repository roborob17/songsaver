import React from "react";
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <nav className="navBar">
                <h1 className="pageTitle">The SongSaver App</h1>
                <NavLink className="navItem" to="/">The Playlist</NavLink>
                <NavLink className="navItem" to="/About">About Us</NavLink>
            </nav>
        </div>
    );
}

export default Header;