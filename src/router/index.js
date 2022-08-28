import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/sign-up",
      name: "signUp",
      component: () => import("../views/SingUpView.vue"),
    },
    {
      path: "/complete",
      name: "complete",
      component: () => import("../views/CompleteView.vue"),
    },
  ],
});

export default router;
