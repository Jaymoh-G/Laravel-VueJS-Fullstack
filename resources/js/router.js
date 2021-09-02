import Vue from "vue";
import Router from "vue-router";
import hooks from "./components/basics/hooks";
import methods from "./components/basics/methods";
import firstpage from "./components/pages/firstpage";
//project Routes
import home from "./components/pages/home";
import newRoutePage from "./components/pages/newRoutePage";
import tags from "./components/pages/tags";

Vue.use(Router);

const routes = [
    {
        path: "/",
        component: home
    },
    {
        path: "/tags",
        component: tags
    },

    //test Routes
    {
        path: "/new-route",
        component: newRoutePage
    },
    {
        path: "/firstpage",
        component: firstpage
    },
    {
        path: "/hooks",
        component: hooks
    },
    {
        path: "/methods",
        component: methods
    }
];

export default new Router({
    mode: "history",
    routes
});
