import React from "react";
import "../../scss/_HomeHeader.scss";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const LoginHeader = () => {
    const handleButtonClick = (targetSection) => {
        window.location.href = "/";
        setTimeout(() => {
            ScrollLink.scrollTo(targetSection, {
                smooth: true,
                duration: 100,
            });
        }, 0);
    };

    return (
        <header className="header">
            <div className="container">
                <nav className="navigation">
                    <ul className="login">
                        <li>
                            <Link to="/login">Zaloguj</Link>
                        </li>
                        <li>
                            <Link to="/registration">Załóż konto</Link>
                        </li>
                    </ul>

                    <ul className="ul-nav">
                        <ScrollLink onClick={() => handleButtonClick("home")} smooth={true} duration={900}>
                            <li>Start</li>
                        </ScrollLink>
                        <ScrollLink onClick={() => handleButtonClick("simplesteps")} smooth={true} duration={900}>
                            <li>O co chodzi?</li>
                        </ScrollLink>
                        <ScrollLink onClick={() => handleButtonClick("about")} smooth={true} duration={900}>
                            <li>O nas</li>
                        </ScrollLink>
                        <ScrollLink onClick={() => handleButtonClick("whowehelp")} smooth={true} duration={900}>
                            <li>Fundacja i organizacje</li>
                        </ScrollLink>
                        <ScrollLink onClick={() => handleButtonClick("contact")} smooth={true} duration={900}>
                            <li>Kontakt</li>
                        </ScrollLink>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default LoginHeader;
