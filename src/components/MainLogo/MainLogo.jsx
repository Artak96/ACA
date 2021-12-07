import React, { useState } from "react";
import acabcLogo from "../../assets/Images/acabc_logo.svg";

const MainLogo = ({ collapse, showMenu }) => {
    const [navbarIcon, setNavbarIcon] = useState(false);

    const hiddenIcon = () => {
        if (window.scrollY > 80) {
            setNavbarIcon(true);
        } else {
            setNavbarIcon(false);
        }
    };

    window.addEventListener("scroll", hiddenIcon);
    return (
        <div className="logo">
            <a href="/">
                <img
                    className="logo logo-display ma-logo"
                    src={acabcLogo}
                    alt=""
                />
                <img className="logo logo-scrolled" src="#" alt="" />
            </a>
        </div>
    );
};

export default MainLogo;
