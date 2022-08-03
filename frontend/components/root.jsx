import React from "react";
import { Provider } from "react-redux";
import App from "./app";

const Root = ({store}) => {
    //Provider gives all components access to store
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

export default Root;