import React from "react";
import { Container, Image, Row } from "react-bootstrap";
import MissionStatement from "../../components/MissionStatement/MissionStatement";
import NavbarComp from "../../components/Navbar/NavbarComp";
import "./HomePage.css";
import Banner from "../../assets/Images/banner_bg.svg";
import { FormattedMessage } from "react-intl";
import WaysToContribute from "../../components/WaysToContribute/WaysToContribute";
import Contributions from "../../components/Contributions/Contributions";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
    return (
        <div>
            <Container fluid>
                <NavbarComp />
                <MissionStatement />
                <div className="banner-bg">
                    <div>Asatryan Armen</div>
                    <div>february 25,2021</div>
                </div>
                <WaysToContribute />
                <Contributions />
                <GetInTouch />
                <div style={{ height: "900px" }}></div>
                <Footer />
            </Container>
           
        </div>
    );
};

export default HomePage;
