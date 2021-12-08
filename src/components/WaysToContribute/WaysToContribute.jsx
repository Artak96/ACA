// import React from "react";
// import { Button, Col, Image, Row } from "react-bootstrap";
// import { FormattedMessage } from "react-intl";
// import "./WaysToContribute.css";
// import Donate from "../../assets/Images/donate.svg";
// import Volunteer from "../../assets/Images/Volunteer.png";

// const WaysToContribute = () => {
//     return (
//         <div>
//             <div className="ways-to-contribute">
//                 <FormattedMessage id="WaysToContribute" />
//             </div>
//             <Row>
//                 <Col className="way-contributre-donate-col">
//                     <div className="ways-to-contribute-donate">
//                         <FormattedMessage id="NavDonate" />
//                         <div className="donate-description">
//                             <FormattedMessage
//                                 id="DonateDescription"
//                                 values={{ newRow: <br /> }}
//                             />
//                         </div>
//                         <Row>
//                             <Col>
//                                 <Image src={Donate} className="image" fluid />
//                             </Col>
//                             <Col>
//                                 <Button
//                                     variant="primary"
//                                     size="lg"
//                                     className="rounded-pill border border-light iteam-button"
//                                 >
//                                     <FormattedMessage id="NavDonate" />
//                                 </Button>
//                             </Col>
//                         </Row>
//                     </div>
//                 </Col>
//                 <Col className="way-contributre-volunteer-col">
//                     <div className="ways-to-contribute-volunteer">
//                         <FormattedMessage id="Volunteer" />
//                         <div className="volunteer-description">
//                             <FormattedMessage
//                                 id="VolunteerDescription"
//                                 values={{ newRow: <br /> }}
//                             />
//                         </div>
//                         <Row>
//                             <Col>
//                                 <Button
//                                     variant="primary"
//                                     size="lg"
//                                     className="rounded-pill border border-light iteam-button"
//                                 >
//                                     <FormattedMessage id="NavBecomeAMember" />
//                                 </Button>
//                             </Col>
//                             <Col>
//                                 <div className="volunteer-image-wrapper">
//                                     <Image
//                                         src={Volunteer}
//                                         className="image"
//                                         fluid
//                                     />
//                                 </div>
//                             </Col>
//                         </Row>
//                     </div>
//                 </Col>
//             </Row>
//         </div>
//     );
// };

// export default WaysToContribute;

import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import "./WaysToContribute.css";

const WaysToContribute = () => {
    return (
        <div>
            <div className="ways-to-contribute">
                <FormattedMessage
                    id="WaysToContribute"
                    values={{ newRow: <br /> }}
                />
            </div>
            <Row className="ways-to-contribute-row">
                <Col className="way-contributre-donate-col">
                    <div className="ways-to-contribute-donate">
                        <div className="size-description">
                            <FormattedMessage id="NavDonate" />
                        </div>
                        <div
                            className="donate-description"
                            style={{ marginTop: "4%" }}
                        >
                            <div className="size-description">
                                <FormattedMessage id="DonateDescription" />
                            </div>
                            <div className="image-donate">
                                <p></p>
                                <div className="size-description">
                                    <FormattedMessage id="DonateDescription2" />
                                </div>
                                <div>
                                    <Button
                                        variant="primary"
                                        className="primary-button"
                                    >
                                        <FormattedMessage id="NavDonate" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col className="way-contributre-volunteer-col">
                    <div className="ways-to-contribute-volunteer">
                        <div className="size-description">
                            <FormattedMessage id="Volunteer" />
                        </div>
                        <div className="volunteer-description">
                            <div className="size-description">
                                <FormattedMessage
                                    id="VolunteerDescription"
                                    values={{ newRow: <br /> }}
                                />
                            </div>
                            <Row>
                                <Col xs={3}>
                                    <Button
                                        variant="primary"
                                        size="lg"
                                        className="become-member-button"
                                    >
                                        <FormattedMessage id="NavBecomeAMember" />
                                    </Button>
                                </Col>
                                <Col xs={9}>
                                    {/* <div className="image-voluntee"> */}
                                    <div className="image-voluntee-childe"></div>
                                    {/* </div> */}
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default WaysToContribute;
