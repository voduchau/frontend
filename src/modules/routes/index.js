import Home from "@containers/Home";
import Login from "@containers/Login";
import User from "@containers/User";

export let childRoutes = [
    {
        path: "/home",
        component: Home,
        exactly: true,
    },
    {
        path: "/login",
        component: Login,
        exactly: true,
    },
    {
        path: "/user",
        component: User,
        exactly: true,
    },
];
