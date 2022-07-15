import { createRouter, createWebHashHistory } from "vue-router";

export const routes = [
  {
    name: "404",
    path: "/:catchAll(.*)",
    component: () => import(/* webpackChunkName: "404" */ "@/views/404.vue"),
  },
  {
    name: "index",
    path: "/",
    component: () =>
      import(/* webpackChunkName: "index" */ "@/views/index.vue"),
  },
  {
    name: "other",
    path: "/other",
    component: () =>
      import(/* webpackChunkName: "other" */ "@/views/other.vue"),
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
