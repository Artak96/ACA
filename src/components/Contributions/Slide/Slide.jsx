import React from "react";
import "./Slide.css";
import { Carousel, Col, Row } from "react-bootstrap";
import contributionOne from "../../../data/ContributionsJSON/contributionOne.json";
import contributionTwo from "../../../data/ContributionsJSON/contributionTwo.json";
import contributionThree from "../../../data/ContributionsJSON/contributionThree.json";
import { FormattedMessage } from "react-intl";

const Slide = () => {
  return (
    <div style={{ backgroundColor: "grey", marginTop: "50px" }}>
      <Carousel
        variant="light"
        controls={false}
        interval={null}
        className="carousel-iteams"
      >
        <Carousel.Item>
          <Row>
            {contributionOne.map((Item) => (
              <Col className="contribution-iteam-title fw-bolder">
                <div className="arrows_icon">
                  <i className="dropdown-toggles"></i>
                </div>
                <div>
                  <FormattedMessage id={Item.title} />
                </div>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            {contributionTwo.map((Item) => (
              <Col className="contribution-iteam-title fw-bolder">
                <div className="arrows_icon">
                  <i className="dropdown-toggles"></i>
                </div>
                <div>
                  <FormattedMessage id={Item.title} />
                </div>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            {contributionThree.map((Item) => (
              <Col className="contribution-iteam-title fw-bolder">
                <div className="arrows_icon">
                  <i className="dropdown-toggles"></i>
                </div>
                <div>
                  <FormattedMessage id={Item.title} />
                </div>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slide;
