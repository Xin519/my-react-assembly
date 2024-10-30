import { createContext } from "react";

export const ConfigContext = createContext({});

export const ConfigProvider = (props) => {
    const {
        space,
        children
    } = props;

    return (
        <ConfigContext.Provider value={{ space }}>
            {children}
        </ConfigContext.Provider>
    )
}
