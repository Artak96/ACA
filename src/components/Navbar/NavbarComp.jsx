import React, { useState } from "react";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import LanguageMenu from "../../elements/LanguageMenu";
import AttributeNav from "../Navs/AttributeNav";
import dataNav from "../../data/Navbar/nav-appstyle-dta.json";
import buttonNav from "../../data/Navbar/navbar-button.json";
import "./NavbarComp.css";
import { FormattedMessage } from "react-intl";
import MainIcon from "../../assets/Images/acabc_logo@2x.png";

const NavbarComp = () => {
    const [navbarIcon, setNavbarIcon] = useState(false);

    const hiddenIcon = () => {
        if (window.scrollY < 140) {
            setNavbarIcon(false);
        } else {
            setNavbarIcon(true);
        }
    };

    window.addEventListener("scroll", hiddenIcon);

    return (
        <div>
            <Navbar
                bg="#FFFFF"
                // expand="lg"
                className="fixed-top navbar-comp"
            >
                <Container fluid>
                    {navbarIcon ? (
                        <div className="main-logo">
                            <Image src={MainIcon} style={{ width: "70%" }} />
                        </div>
                    ) : (
                        " "
                    )}
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <div className={navbarIcon ? "" : "div-left"}>
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
                        <div className="div-right">
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
