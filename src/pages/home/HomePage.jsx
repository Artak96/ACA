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
import InvestorBanner from "../../components/InvestorBanner/InvestorBanner";

const HomePage = () => {
    return (
        <Container fluid className="main_container">
            <NavbarComp />
            <MissionStatement />
            <InvestorBanner />
            <WaysToContribute />
            <Contributions />
            <GetInTouch />
            <div style={{ height: "900px" }}></div>
            <Footer />
        </Container>
    );
};

export default HomePage;
