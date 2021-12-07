import React from "react";
import { Col, Form, Image, Row } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import "./GetInTouch.css";
import Group from "../../assets/Images/Group 69.svg";
import Phone from "../../assets/Images/Icon feather-phone.svg";
import Message from "../../assets/Images/email.svg";
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
      {/* <Row className="get-in-touch">
                <Col>
                    <Form className="form-items">
                        <Row>
                            <Col lg={5} className="ful-name-item">
                                <input
                                    placeholder="full name"
                                    className="get-in-touch-field"
                                ></input>
                            </Col>
                            <Col lg={2}></Col>
                            <Col lg={5} className="email-item">
                                <input
                                    placeholder="email"
                                    className="get-in-touch-field"
                                ></input>
                            </Col>
                        </Row>
                        <Row>
                            <input
                                placeholder="subject"
                                className="get-in-touch-field"
                            ></input>
                        </Row>
                        <Row>
                            <textarea
                                className="get-in-touch-field"
                                placeholder="message"
                            ></textarea>
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
            </Row> */}
      <div className="get_in_touch">
        <div className="form_fields">
          <div className="full_name_email_fields">
            {" "}
            <div className="inner_full_name">
              <input
                placeholder="full name"
                className="get-in-touch-field"
              ></input>
            </div>
            <span style={{ width: "3%" }}></span>
            <div className="inner_email">
              {" "}
              <input placeholder="email" className="get-in-touch-field"></input>
            </div>
          </div>
          <div className="subject_field">
            <input placeholder="subject" className="get-in-touch-field"></input>
          </div>
          <div className="message_field">
            <textarea
              className="get-in-touch-field"
              placeholder="message"
            ></textarea>
          </div>
          <div>
            <button type="button" class="inner_send_message">
              <FormattedMessage id="SendMessage" />
            </button>
          </div>
        </div>
        {/* <div style={{ width: "4%" }}></div> */}
        <div className="info_banner">
            <div className="all_banner_item">
              <div className="group-svg">
                <div className="image_part">
                  <Image src={Group} fluid />
                </div>
                <div className="description_part">
                  <span>
                    P.O Box 2956 Station <br /> Terminal Vancouver BC V6B 3X4
                  </span>
                </div>
              </div>
              <div className="phone-svg">
                <div className="image_part">
                  <Image src={Phone} fluid />
                </div>
                <div className="description_part">604-298-3365</div>
              </div>
              <div className="message-svg">
                <div className="image_part">
                  <Image src={Message} fluid />
                </div>
                <div className="description_part">info@acaofbc.ca</div>
              </div>

              <div className="social_site_icon">
                {SocIcons.map((item) => {
                  console.log(item.icon);
                  return (
                    <div className="social-site">
                      <div key={item.id}>
                        <img src={item.icon} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
