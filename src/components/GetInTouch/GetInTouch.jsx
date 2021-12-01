import React from "react";
import { Col, Form, Image, Row } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import "./GetInTouch.css";
import Group from "../../assets/Images/Group 69.svg";
import Phone from "../../assets/Images/Icon feather-phone.svg";
import Message from "../../assets/Images/Group 75.svg";
import Twitter from "../../assets/Images/Icon awesome-twitter.svg";
import Youtube from "../../assets/Images/Icon awesome-youtube.svg";
import Facebook from "../../assets/Images/Icon zocial-facebook.svg";
import SocIcons from "../../data/Social/social-data";

const GetInTouch = () => {
    return (
        <div>
            <div className="get-in-touch-title">
                <FormattedMessage id="GetInTouch" />
            </div>
            <Row className="get-in-touch">
                <Col>
                    <Form>
                        <Row>
                            <Col lg={4}>
                                <input
                                    placeholder="full name"
                                    className="get-in-touch-field"
                                ></input>
                            </Col>
                            <Col lg={4}>
                                <input
                                    placeholder="email"
                                    className="get-in-touch-field"
                                ></input>
                            </Col>
                        </Row>
                        <Row>
                            <input
                                placeholder="email"
                                className="get-in-touch-field"
                            ></input>
                        </Row>
                        <Row>
                            <textarea className="get-in-touch-field"></textarea>
                        </Row>
                    </Form>
                </Col>
                <Col className="information-banner">
                    <div>
                        <Image src={Group} className="group-svg" fluid />
                        P.O Box 2956 Station Terminal Vancouver BC V6B 3X4
                    </div>
                    <div>
                        <Image src={Phone} className="phone-svg" fluid />
                        604-298-3365
                    </div>
                    <div>
                        <Image src={Message} className="phone-svg" fluid />
                        info@acaofbc.ca
                    </div>
                    <Row>
                        {SocIcons.map((item) => {
                            console.log(item.icon);
                            return (
                                <Col
                                    lg={1}
                                    key={item.id}
                                    className="social-site"
                                >
                                    <img src={item.icon} />
                                </Col>
                            );
                        })}
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default GetInTouch;
