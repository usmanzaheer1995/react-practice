import React from 'react';
import { Link } from "react-router-dom";

const Header = () => (
    <header className="header">
        <Link to="/login" className="header__login">Login</Link>
        <Link to="/register">Register</Link>
    </header>
);

export default Header;