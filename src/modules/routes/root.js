import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import authHOC from "@utils/auth";
// import { getTimeOutToRefreshToken } from "@utils/auth";
import { createStore } from "redux";
import rootReducer from "../../reducers";
// import { SnackbarProvider } from "notistack";
import Login from "@containers/Login";
// import Maintenance from "@containers/Main/Maintenance";
// import Layout from "@containers/Main";

let store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// getTimeOutToRefreshToken();

function root() {
    return (
        <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/login" component={authHOC(Login)} />
                        {/* <Route path="/maintenance" component={Maintenance} /> */}
                        {/* <Route path="/" component={authHOC(Layout)} /> */}
                    </Switch>
                </BrowserRouter>
        </Provider>
    );
}

export default root;
