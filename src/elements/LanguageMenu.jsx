import React from "react";
import ReactCountryFlag from "react-country-flag";
import { IntlContext } from "../utility/Internationalization.jsx";
import { FormattedMessage } from "react-intl";
import useWindowResizeListener from "../helpers/UseWindowResizeListener";
import languageData from "../data/Language/language-data.json";

const LanguageMenu = () => {
    useWindowResizeListener();

    const handleHover = (e) => {
        e.preventDefault();
        const width = window.innerWidth;
        if (width < 991) {
            const el = e.target;
            if (e.target.nextSibling) {
                console.log("parent", el.parentElement);
                if (el.parentElement.classList.contains("on")) {
                    el.nextSibling.style.display = "none";
                    el.parentElement.classList.remove("on");
                    el.nextSibling.style.opacity = 0;
                    el.nextSibling.classList.remove("fadeIn");
                } else {
                    el.parentElement.classList.add("on");
                    el.nextSibling.style.display = "block";
                    el.nextSibling.style.opacity = 1;
                    el.nextSibling.classList.add("fadeIn");
                }
            }
        }
    };

    return (
        <IntlContext.Consumer>
            {(context) => {
                console.log(context);
                return (
                    <li className="dropdown">
                        <a
                            href="!#"
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                            onClick={handleHover}
                        >
                            <ReactCountryFlag
                                className="country-flag"
                                countryCode={context?.state?.locale}
                                svg
                            />
                            <span className="ms-2 text-uppercase">
                                <FormattedMessage id="Language" />
                            </span>
                        </a>
                        <ul
                            className="dropdown-menu dropdown-item cart-list animated "
                            style={{ display: "none" }}
                        >
                            {languageData.map((item) => {
                                return (
                                    <li className="dropdown" key={item.id}>
                                        <a
                                            href="!#"
                                            className="dropdown-item"
                                            data-toggle="dropdown"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                context.switchLanguage(
                                                    item.key
                                                );
                                            }}
                                        >
                                            <ReactCountryFlag
                                                className="country-flag"
                                                countryCode={item.key}
                                                svg
                                            />
                                            <span className="ms-2 text-uppercase">
                                                {item.name}
                                            </span>
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </li>
                );
            }}
        </IntlContext.Consumer>
    );
};

export default LanguageMenu;
