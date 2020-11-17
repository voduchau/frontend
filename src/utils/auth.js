import React, { Component, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "@api";
// import { toJson } from "@utils/json";
// import jwtDecode from "jwt-decode";
import Config from "@config";

const validate = function (history) {
    const isLoggedIn = !!window.localStorage.getItem("token");
    if (!isLoggedIn && history.location.pathname != "/login") {
        history.replace("/login");
    }
    axios.defaults.headers.common["Authorization"] =
        "Bearer " + window.localStorage.getItem("token");
    if (
        isLoggedIn &&
        (history.location.pathname == "/login" ||
            history.location.pathname == "/")
    ) {
        history.replace("/home");
        // if (getRole() == 'DEVELOPER') {
        //   history.replace("/account");
        // }
        // else if (getRole() == 'BANKER' || getRole() == 'ACCOUNTANT') {
        //   history.replace("/statistic");
        // }
        // else if (getRole() == 'COLLABORATOR') {
        //   history.replace("/lead");
        // }
        // else {
        //   history.replace("/home");
        // }
    }
};

/**
 * Higher-order component (HOC) to wrap restricted pages
 */
// export default function authHOC(BaseComponent) {
//     class Restricted extends Component {
//         UNSAFE_componentWillMount() {
//             this.checkAuthentication(this.props);
//         }
//         UNSAFE_componentWillReceiveProps(nextProps) {
//             if (nextProps.location !== this.props.location) {
//                 this.checkAuthentication(nextProps);
//             }
//         }
//         checkAuthentication(params) {
//             const { history } = params;
//             validate(history);
//         }
//         render() {
//             return <BaseComponent {...this.props} />;
//         }
//     }
//     return withRouter(Restricted);
// }

const authHoc = (BaseComponent) => {
    const Restricted = (props) => {
        useEffect(()=>{
            checkAuthentication(props)
        },[])
        const checkAuthentication = (params) => {
            const { history } = params;
            validate(history);
        }
        return <BaseComponent {...props} />
    }
    return withRouter(Restricted);
}
export default authHoc
/**
 * Store token
 */
export function storeToken(token, user = null) {
    return new Promise((resolve) => {
        // if (user != null) {
        //   window.localStorage.setItem('user', toJson(user));
        // }
        window.localStorage.setItem("token", token);
        axios.defaults.headers.common["Authorization"] = "Bearer" + token;
        return resolve(true);
    });
}
