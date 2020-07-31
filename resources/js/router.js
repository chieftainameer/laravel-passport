import Vue from "vue";
import VueRouter from "vue-router";
import RegisterComponent from "./components/RegisterComponent";
import LoginComponent from "./components/LoginComponent";
Vue.use(VueRouter);
const routes = [
    {
        path: "/",
        redirect: "/login"
    },
    {
        path: "/login",
        component: LoginComponent
    },
    {
        path: "/register",
        component: RegisterComponent
    }
];

const router = new VueRouter({ routes });

export default router;
