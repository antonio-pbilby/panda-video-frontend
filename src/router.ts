import { createRouter, createWebHistory } from "vue-router";
import Login from "./views/Login.vue";
import Signup from "./views/Signup.vue";
import Home from "./views/Home.vue";

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/signup',
    component: Signup
  },
  {
    path: '/',
    component: Home
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});