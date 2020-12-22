import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Registration from "./components/Registration.vue";

const history = createWebHistory();
const router = createRouter({
  history,
  routes: [
    { path: "/", component: Home },
    { path: "/registration", component: Registration },
  ],
});

export default router;
