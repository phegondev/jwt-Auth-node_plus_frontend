import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ loggedIn, handleLogout }) => {

    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/">Products</Link>
            {!loggedIn && <Link to="/login">Login</Link>}
            {!loggedIn && <Link to="/register">Register</Link>}
            {loggedIn && <Link to="/profile">Profile</Link>}
            {loggedIn && <Link to="/logout" onClick={handleLogout}>Logout</Link>}
        </div>
    )
}
export default Navbar;