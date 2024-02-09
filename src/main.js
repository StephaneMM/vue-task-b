import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import routes from "./router";
import App from "./App.vue";

const VueRouter = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(createPinia()).use(VueRouter).mount("#app");
