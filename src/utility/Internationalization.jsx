import React from "react";
import { IntlProvider } from "react-intl";

import messages_hy from "../data/Locales/hy.json";
import messages_en from "../data/Locales/en.json";

const menu_messages = {
    am: messages_hy,
    us: messages_en,
};

const Context = React.createContext();

class IntlProviderWrapper extends React.Component {
    state = {
        locale: "am",
        messages: menu_messages["am"],
    };

    render() {
        const { children } = this.props;
        const { locale, messages } = this.state;
        return (
            <Context.Provider
                value={{
                    state: this.state,
                    switchLanguage: (language) => {
                        this.setState({
                            locale: language,
                            messages: menu_messages[language],
                        });
                    },
                }}
            >
                <IntlProvider
                    key={locale}
                    locale={locale}
                    messages={messages}
                    defaultLocale="am"
                >
                    {children}
                </IntlProvider>
            </Context.Provider>
        );
    }
}

export { IntlProviderWrapper, Context as IntlContext };
