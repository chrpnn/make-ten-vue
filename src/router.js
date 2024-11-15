import { createRouter, createWebHistory } from "vue-router";

import TheGame from "./components/TheGame.vue";
import TheHome from "./components/TheHome.vue";

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
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
