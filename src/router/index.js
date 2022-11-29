import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import Groups from "../views/Groups.vue"
import Friends from "../views/Friends.vue"

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      children: [
        {
          path: "/Groups",
          name: "groups",
          component: Groups,
        },
        {
          path: "/Friends",
          name: "friends",
          component: Friends,
        },
        {
          path: "/Privates",
          name: "privates",
          component: Home,
        },
        {
          path: "/Community",
          name: "community",
          component: Home,
        },
        {
          path: "/Doubts",
          name: "doubts",
          component: Home,
        },
      ],
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/Register.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue"),
    },
  ],
})
