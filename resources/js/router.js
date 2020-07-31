import Vue from "vue";
import VueRouter from "vue-router";
import RegisterComponent from "./components/RegisterComponent";
import LoginComponent from "./components/LoginComponent";
import Home from "./components/Home";
Vue.use(VueRouter);
const routes = [
    {
        path: "/",
        redirect: "/login"
    },
    {
        path: "/login",
        component: LoginComponent,
        name: "Login",
        beforeEnter: (to, from, next) => {
            if (localStorage.getItem("ACCESS_TOKEN")) {
                next("/home");
            } else {
                next();
            }
        }
    },
    {
        path: "/register",
        component: RegisterComponent,
        beforeEnter: (to, from, next) => {
            if (localStorage.getItem("ACCESS_TOKEN")) {
                next("/home");
            } else {
                next();
            }
        }
    },
    {
        path: "/home",
        component: Home,
        name: "Home",
        beforeEnter: (to, from, next) => {
            axios
                .get("api/user")
                .then(res => {
                    console.log(res);
                    next();
                })
                .catch(err => {
                    next("/login");
                });
        }
    }
];

const router = new VueRouter({ routes });
router.beforeEach((to, from, next) => {
    const access_token = localStorage.getItem("ACCESS_TOKEN") || null;
    console.log("token is " + access_token);

    window.axios.defaults.headers["Authorization"] = "Bearer " + access_token;
    console.log(axios.defaults.headers.Authorization);
    next();
});

export default router;
