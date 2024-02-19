import React from "react";
import { Link } from 'react-scroll'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Start</Link></li>
                <li><Link to="/WhatsGoingOn">O co chodzi?</Link></li>
                <li><Link to="/About">O nas</Link></li>
                <li><Link to="/Fundations">Fundacje i organizacje</Link></li>
                <li><Link to="/Contact">Kontakt</Link></li>
            </ul>
        </nav>
    )
};

export default Navbar;