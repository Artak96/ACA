import React, { useState } from "react";
import {
    Button,
    Container,
    Form,
    FormControl,
    Nav,
    NavDropdown,
    Navbar,
} from "react-bootstrap";
import LanguageMenu from "../../elements/LanguageMenu";
import MainLogo from "../MainLogo/MainLogo";
import AttributeNav from "../Navs/AttributeNav";
import dataNav from "../../data/Navbar/nav-appstyle-dta.json";
import buttonNav from "../../data/Navbar/navbar-button.json";
import "./NavbarComp.css";
import acabcLogo from "../../assets/Images/acabc_logo.png";
import AboutUs from "../AboutUs/AboutUs";
import Gallery from "../Gallery/Gallery";
import Radio from "../Radio/Radio";
import Scoralship from "../Scoralship/Scoralship";
import { FormattedMessage } from "react-intl";

const NavbarComp = () => {
    const [navbarIcon, setNavbarIcon] = useState(false);

    const hiddenIcon = () => {
        if (window.scrollY < 40) {
            setNavbarIcon(true);
        } else {
            setNavbarIcon(false);
        }
    };

    window.addEventListener("scroll", hiddenIcon);

    return (
        <div>
            <Navbar
                bg="#FFFFF"
                expand="lg"
                className={"fixed-top navbar-comp" + (navbarIcon ? " " : "")}
            >
                <Container fluid>
                    {/* <Navbar.Brand href="">Navbar scroll</Navbar.Brand> */}
                    <div className="main-logo">
                        <MainLogo />
                    </div>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <div className="divLeft">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: "100px" }}
                                navbarScroll
                            >
                                {dataNav.map((item) => (
                                    <Nav.Link
                                        as={item.link}
                                        to={item.to}
                                        className="nav-iteam-color"
                                    >
                                        <FormattedMessage id={item.title} />
                                    </Nav.Link>
                                ))}
                                <AttributeNav>
                                    <LanguageMenu />
                                </AttributeNav>
                            </Nav>
                        </div>
                        <div className="divRight">
                            {buttonNav.map((item) => (
                                <Button
                                    variant="primary"
                                    size="lg"
                                    style={{
                                        backgroundColor: `${item.backgroundcolor}`,
                                    }}
                                    className="rounded-pill border border-light iteam-button"
                                >
                                    <FormattedMessage id={item.title} />
                                </Button>
                            ))}
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavbarComp;
