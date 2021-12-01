import React from "react";
import { FormattedMessage } from "react-intl";
import MainLogo from "../MainLogo/MainLogo";
import "./MissionStatement.css";

const MissionStatement = () => {
    return (
        <div className="misssion-statement">
            <MainLogo />
            <p className="misssion-statement-title">
                <label className="misssion-statement-title-1">
                    <FormattedMessage id="MissionStatement1" />
                </label>
                <label className="misssion-statement-title-2">
                    <FormattedMessage id="MissionStatement2" />
                </label>
            </p>
            <h4 className="misssion-statement-description">
                <FormattedMessage id="MissionStatementDescription" />
            </h4>
        </div>
    );
};

export default MissionStatement;
