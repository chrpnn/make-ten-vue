import { createRouter, createWebHistory } from "vue-router";

import TheGame from "./components/TheGame.vue";
import TheHome from "./components/TheHome.vue";
import TheLogin from "./pages/TheLogin.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: TheHome,
    },
    {
        path: "/game",
        name: "game",
        component: TheGame,
    },
    {
        path: "/login",
        name: "login",
        component: TheLogin,
        meta: { hideHeader: true },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
