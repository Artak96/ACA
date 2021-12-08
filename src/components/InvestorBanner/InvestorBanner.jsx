import React from "react";
import "./InvestorBanner.css";

const InvestorBanner = () => {
    let value = "Karen Abgaryan";
    let date = new Date().getFullYear();
    let b = false;

    return (
        <div>
            <div className="banner-bg">
                <div className="investor_data">{value}</div>
                <div className="invest_date">{date}</div>
            </div>
        </div>
    );
};

export default InvestorBanner;
