import React from "react";
import "./Footer.css";
import { Col, Image, Row } from "react-bootstrap";
import FooterLogo from "../../assets/Images/acabc_logo@2x.png";

const Footer = () => (
  <div className="footer-copyright">
    <Row>
      <Col>
        <div className="footer-main-logo">
          <Image src={FooterLogo} className="footer-logo" />
        </div>
      </Col>
      <Col>
        <div className="footer-title">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </Col>
    </Row>
  </div>
);

export default Footer;
