import React from "react";
import { FormattedMessage } from "react-intl";
import "./Contributions.css";
import Slide from "./Slide/Slide";

const Contributions = () => {
    return (
        <div>
            <div className="contributions-title">
                <FormattedMessage id="Contributions" />
            </div>
            <div>
                <Slide />
            </div>
        </div>
    );
};

export default Contributions;
