import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'

const routes: Array<RouteConfig> = [];
const modules = require.context("./modules", true, /[A-Za-z0-9-_,\s]+\.ts$/i);

modules.keys().forEach(key => {
    routes.push(...modules(key).default);
});


Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    routes
})

export default router
