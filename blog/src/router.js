import { createWebHistory, createRouter } from "vue-router";
import List from "./components/blogList.vue";
import Home from "./components/Home.vue";
import Detail from "./components/Detail.vue";
import page404 from "./components/404Component.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/list",
    component: List,
  },
  {
    path: "/detail/:id(\\d+)",
    component: Detail,
  },
  {
    path: "/:anything(.*)",
    component: page404,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
