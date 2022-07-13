import { createApp } from "vue";
import { createStore } from "vuex";
import * as VueRouter from "vue-router";

import "./index.scss";

import App from "./App.vue";
import Home from "./Home.vue";
import About from "remote/AboutComponent";

const routes = [
    { path: "/", component: Home },
    { path: "/about", component: About },
]

const router = new VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory(),
});

const store = createStore({
    state: {
        count: 0,
    },
    mutations: {
        addOne(state) {
            state.count++;
        }
    }
});

createApp(App).use(router).use(store).mount("#app");
