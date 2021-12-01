import React from "react";
import { Carousel } from "react-bootstrap";

const Slide = () => {
    return (
        <div style={{ backgroundColor: "grey", marginTop: "50px" }}>
            <Carousel
                variant="light"
                controls={false}
                interval={null}
                style={{ color: "red", height: "400px" }}
            >
                <Carousel.Item>
                    
                </Carousel.Item>
                <Carousel.Item></Carousel.Item>
                <Carousel.Item></Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slide;
