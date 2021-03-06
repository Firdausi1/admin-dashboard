/* eslint-disable */

import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Team from "./views/Team.vue";
import Manage from "./views/Manage.vue";
import Movies from "./views/Movies.vue";
import AddMovie from "./views/AddMovie.vue";
import editMovie from "./views/editMovie.vue";
import viewMovie from "./views/viewMovie.vue";
import View from "./views/View.vue";
import SignIn from "./views/SignInFlow/SignIn.vue";
import Request from "./views/SignInFlow/Request.vue";
import Recover from "./views/SignInFlow/Recover.vue";
import * as netlifyIdentityWidget from "netlify-identity-widget";

Vue.use(Router);

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
            path: "/",
            name: "home",
            component: Home,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: "/team",
            name: "team",
            component: Team,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: "/view",
            name: "view",
            component: View,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: "/addMovie",
            name: "addMovie",
            component: AddMovie,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: "/editMovie",
            name: "editMovie",
            component: editMovie,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: "/viewMovie",
            name: "viewMovie",
            component: viewMovie,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: "/manage",
            name: "manage",
            component: Manage,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: "/movies",
            name: "movies",
            component: Movies,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: "/signin",
            name: "signin",
            component: SignIn
        },
        {
            path: "/request",
            name: "request",
            component: Request
        },
        {
            path: "/recover",
            name: "recover",
            component: Recover
        }
    ]
});

router.beforeEach((to, from, next) => {
    const currentUser = netlifyIdentityWidget.currentUser();
    const requiresAuth = to.matched.some(record => {
        return record.meta.requiresAuth;
    });
    if (requiresAuth && !currentUser) {
        next("signin");
    } else {
        next();
    }
});
export default router;