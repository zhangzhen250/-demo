import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home/Home.vue";
import setting from "./views/setting/Setting.vue";
import sub from "./views/sub/Sub.vue";
import nav from "./views/nav/Nav.vue";
import article from "./views/article/Article.vue";
import product from "./views/product/Product.vue";
import page from "./views/page/Page.vue";
import generate from "./views/generate/Generate.vue";
import message from "./views/message/Message.vue";

import basic from "./views/setting/childroute/Basic.vue";
import host from "./views/setting/childroute/Host.vue";
import site from "./views/setting/childroute/Site.vue";
import banner from "./views/setting/childroute/Banner.vue";
import words from "./views/setting/childroute/Words.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/setting",
            name: "setting",
            component: setting,
            children: [
                { path: "/setting/", name: "basic", component: basic },
                { path: "/setting/host", name: "host", component: host },
                { path: "/setting/site", name: "site", component: site },
                { path: "/setting/banner", name: "banner", component: banner },
                { path: "/setting/words", name: "words", component: words }
            ]
        },
        {
            path: "/sub",
            name: "sub",
            component: sub
        },
        {
            path: "/nav",
            name: "nav",
            component: nav
        },
        {
            path: "/article",
            name: "article",
            component: article
        },
        {
            path: "/product",
            name: "product",
            component: product
        },
        {
            path: "/page",
            name: "page",
            component: page
        },
        {
            path: "/generate",
            name: "generate",
            component: generate
        },
        {
            path: "/message",
            name: "message",
            component: message
        },

        {
            path: "/about",
            name: "about",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ "./views/About.vue")
        },
        {
            path: "/signin",
            name: "signin",
            component: () => import(/* webpackChunkName: "signin" */ "./views/Signin.vue")
        }
    ]
});
