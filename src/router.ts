import { createRouter, createWebHistory } from "vue-router";
import Login from "./views/Login.vue";
import Signup from "./views/Signup.vue";
import Videos from "./views/Videos.vue";
import RequireLogin from "./provider/RequireLogin.vue";

const routes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/signup",
    component: Signup,
  },
  {
    path: "/",
    component: RequireLogin,
    children: [
      {
        path: "videos",
        component: Videos,
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
